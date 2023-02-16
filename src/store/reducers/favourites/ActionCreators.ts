import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IFavourite } from "models/IFavourite";
import { IVote } from "models/IVote";
import { AppDispatch } from "../../store";
import { favouritesSlice } from "./FavouritesSlice"; 

export const fetchFavourites = () => async(dispatch: AppDispatch) => {

    try {
        // console.log('fetchFavorites')
        dispatch(favouritesSlice.actions.fatching())
        const resp = await axios.get<IVote[]>(
            "https://api.thecatapi.com/v1/favourites", 
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                },
                params: { sub_id: AppConfig.CAT_API_USER_ID } 
            }
        );

        // console.log('resp.data', resp.data)
        const data: IFavourite[] = resp.data
            .map(({ id, image_id, image, created_at }) => ({ 
                id, 
                image_id, 
                image,
                created_at
            }));

        dispatch(favouritesSlice.actions.fatchingSuccess(data));
    } catch(e) {
        dispatch(favouritesSlice.actions.fatchingError((e as AxiosError).message))
    }
};


export const addFavourite = (image_id: string) => async(dispatch: AppDispatch) => {

    try {

        const favorite = { image_id, sub_id: AppConfig.CAT_API_USER_ID };
        const resp = await axios.post(
            "https://api.thecatapi.com/v1/favourites",
            favorite, 
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                }
            }
        );
        
        resp.data && 
        resp.data.message && 
        resp.data.message == 'SUCCESS' &&
        dispatch(favouritesSlice.actions.addFavourite({ 
            id: resp.data.id,
            ...favorite, 
            created_at: new Date().toISOString()
        }));

    } catch(e) {
        dispatch(favouritesSlice.actions.fatchingError((e as AxiosError).message))
    }
};

export const deleteFavourite = (id: string) => async(dispatch: AppDispatch) => {

    try {

        const resp = await axios.delete(
            "https://api.thecatapi.com/v1/favourites/" + id,
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                }
            }
        );
        
        resp.data && 
        resp.data.message && 
        resp.data.message == 'SUCCESS' &&
        dispatch(favouritesSlice.actions.deleteFavourite(id));

    } catch(e) {
        dispatch(favouritesSlice.actions.fatchingError((e as AxiosError).message))
    }
};
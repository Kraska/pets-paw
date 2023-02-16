import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IFavourite } from "models/IFavourite";
import { AppDispatch } from "../../store";
import { favouritesSlice } from "./FavouritesSlice"; 


const headers = { 
    "Content-Type": "application/json",
    "x-api-key": AppConfig.CAT_API_KEY
};

const params = { 
    sub_id: AppConfig.CAT_API_USER_ID 
};

export const fetchFavourites = () => async(dispatch: AppDispatch) => {

    try {
        // console.log('fetchFavorites')
        dispatch(favouritesSlice.actions.fatching())
        const resp = await axios.get<IFavourite[]>(
            "https://api.thecatapi.com/v1/favourites", 
            { headers, params }
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
            { headers }
        );
        
        if (
            resp.data && 
            resp.data.message && 
            resp.data.message == 'SUCCESS'
        ) {
            const favourite = await getFavorite(resp.data.id);
            dispatch(favouritesSlice.actions.addFavourite(favourite));
        }

    } catch(e) {
        // todo log
        throw e; 
    }
};

const getFavorite = async(id: string) => {

    const resp = await axios.get<IFavourite>(
        `https://api.thecatapi.com/v1/favourites/${id}`, 
        { headers, params }
    );

    const { 
        id: itemId, 
        image_id, 
        image,
        created_at
    } = resp.data;

    return { id: itemId, image_id, image, created_at };
};

export const deleteFavourite = (id: string) => async(dispatch: AppDispatch) => {

    try {

        const resp = await axios.delete(
            "https://api.thecatapi.com/v1/favourites/" + id,
            { headers }
        );
        
        resp.data && 
        resp.data.message && 
        resp.data.message == 'SUCCESS' &&
        dispatch(favouritesSlice.actions.deleteFavourite(id));

    } catch(e) {
        // todo log
        throw e; 
    }
};
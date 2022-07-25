import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IBreed } from "models/IBreed";
import { AppDispatch } from "../../store";
import { breedsSlice } from "./BreedsSlice"; 

export const fetchBreeds = () => async(dispatch: AppDispatch) => {

    try {
        dispatch(breedsSlice.actions.fatching())
        const resp = await axios.get<IBreed[]>(
            "https://api.thecatapi.com/v1/breeds", //attach_breed=abys
            {headers: { 
                "Content-Type": "application/json",
                "x-api-key": AppConfig.CAT_API_KEY
            }}
        );
        dispatch(breedsSlice.actions.fatchingSuccess(resp.data));
    } catch(e) {
        dispatch(breedsSlice.actions.fatchingError((e as AxiosError).message))
    }
};

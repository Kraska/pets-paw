import { AppRoute } from "AppRoute";
import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IApiBreed, IBreed } from "models/IBreed";
import { AppDispatch } from "../../store";
import { breedsSlice } from "./BreedsSlice"; 

export const fetchBreeds = () => async(dispatch: AppDispatch) => {

    try {
        // console.log('fetchBreeds')
        dispatch(breedsSlice.actions.fatching())
        const resp = await axios.get<IApiBreed[]>(
            "https://api.thecatapi.com/v1/breeds", //attach_breed=abys
            {headers: { 
                "Content-Type": "application/json",
                "x-api-key": AppConfig.CAT_API_KEY
            }}
        );

        // console.log('resp.data', resp.data)
        const data: Record<string, IBreed> = resp.data
            .map(({ id, name, image, temperament, origin, weight, life_span }) => ({ 
                id, 
                name, 
                url: image && image.url,
                link: `${AppRoute.BREEDS}/${id}`,
                temperament,
                origin,
                weight: weight && weight.metric,
                life_span
            })).reduce<Record<string, IBreed>>(
                (map, item) => {map[item.id] = item; return map},
                {}
            );

        dispatch(breedsSlice.actions.fatchingSuccess(data));
    } catch(e) {
        dispatch(breedsSlice.actions.fatchingError((e as AxiosError).message))
    }
};

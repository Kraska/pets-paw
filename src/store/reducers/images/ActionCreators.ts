import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IImage } from "models/IImage";
import { AppDispatch } from "../../store";
import { imagesSlice } from "./ImagesSlice"; 

export const fetchImages = () => async(dispatch: AppDispatch) => {

    try {
        // console.log('fetchImages')
        dispatch(imagesSlice.actions.fatching())
        const resp = await axios.get<IImage[]>(
            "https://api.thecatapi.com/v1/images/search", 
            {
                headers: { 
                    "Content-Type": "application/json",
                    "x-api-key": AppConfig.CAT_API_KEY
                },
                params: { 
                    sub_id: AppConfig.CAT_API_USER_ID,
                    size: 'small',
                    limit: 10,
                    page: 0 
                } 
            }
        );

        // console.log('resp.data', resp.data)
        const data: IImage[] = resp.data
            .map(({ id, url, breeds, categories }) => ({ 
                id, 
                url, 
                breeds,
                categories
            }));

        dispatch(imagesSlice.actions.fatchingSuccess(data));
    } catch(e) {
        dispatch(imagesSlice.actions.fatchingError((e as AxiosError).message))
    }
};

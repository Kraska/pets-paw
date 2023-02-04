import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IImage } from "models/IImage";
import { AppDispatch } from "../../store";
import { imagesSlice } from "./ImagesSlice"; 
import { GalleryLimit, GalleryOrder, GalleryType } from "./toolbar/options";

export const fetchImages = (
    order: GalleryOrder, 
    type: GalleryType, 
    breed: string, 
    limit: GalleryLimit
) => async(dispatch: AppDispatch) => {

    
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
                    limit: limit,
                    page: 0,
                    mime_types: type,
                    order: order
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

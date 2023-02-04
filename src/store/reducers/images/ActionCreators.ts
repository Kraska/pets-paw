import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IImage } from "models/IImage";
import { AppDispatch } from "../../store";
import { imagesSlice } from "./ImagesSlice"; 
import { GalleryLimit, GalleryOrder, GalleryType, GALLERY_ALL_BREEDS } from "./toolbar/options";

export const fetchImages = (
    order: GalleryOrder, 
    type: GalleryType, 
    breed: string, 
    limit: GalleryLimit
) => async(dispatch: AppDispatch) => {

    let params: Record<string, string|number> = { 
        sub_id: AppConfig.CAT_API_USER_ID,
        size: 'small',
        limit: limit,
        page: 0,
        mime_types: type,
        order: order,
    }; 

    params = (breed == GALLERY_ALL_BREEDS.key) ? 
        params : {...params, breed_ids: breed};

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
                params: params
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

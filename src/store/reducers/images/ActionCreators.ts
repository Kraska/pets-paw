import axios, { AxiosError } from "axios";
import { AppConfig } from "config";
import { IImage } from "models/IImage";
import { AppDispatch } from "../../store";
import { imagesSlice } from "./ImagesSlice"; 
import { GALLERY_ALL_BREEDS } from "./toolbar/options";

export const fetchImages = (
    order: string, 
    type: string, 
    breed: string, 
    limit: number,
    page: number
) => async(dispatch: AppDispatch) => {

    let params: Record<string, string|number> = { 
        sub_id: AppConfig.CAT_API_USER_ID,
        size: 'small',
        mime_types: type,
        order: order,
        limit: limit,
        page
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

        const action = page == 0 ? 
            imagesSlice.actions.setImages(data) :
            imagesSlice.actions.addImages(data);

        dispatch(action);
        data.length < limit && dispatch(imagesSlice.actions.allLoaded());

    } catch(e) {
        dispatch(imagesSlice.actions.fatchingError((e as AxiosError).message))
    }
};

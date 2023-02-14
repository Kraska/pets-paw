import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IImage } from "models/IImage";


type ImagesSatate = {
    images: IImage[] | null,
    allLoaded: boolean,
    isLoading: boolean,
    error: string,
}

const initialState: ImagesSatate = {
    images: null,
    allLoaded: false,
    isLoading: false,
    error: '',
}

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        fatching(state) {
            state.isLoading = true;
        },
        addImages(
            state, 
            action: PayloadAction<IImage[]>
        ) {
            // console.log('addImages')
            state.isLoading = false;
            state.error = '';
            state.images = [
                ...state.images || 
                [], ...action.payload
            ];
        },        
        setImages(
            state, 
            action: PayloadAction<IImage[]>
        ) {
            // console.log('setImages')
            state.isLoading = false;
            state.error = '';
            state.images = action.payload;
            state.allLoaded = false;
        },
        fatchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addImage(state, action: PayloadAction<IImage>) {
            state.images = [...(state.images || []), action.payload];
        },
        deleteImage(state, action: PayloadAction<string>) {
            state.images = [...(state.images ||[])]
                .filter(item => item.id != action.payload);
        },
        allLoaded(state) {
            // console.log('allLoaded')
            state.allLoaded = true;
        }

    }
})

export const imagesReducer = imagesSlice.reducer;

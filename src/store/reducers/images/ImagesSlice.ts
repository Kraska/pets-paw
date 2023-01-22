import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IImage } from "models/IImage";


type ImagesSatate = {
    images: IImage[] | null,
    isLoading: boolean,
    error: string,
}

const initialState: ImagesSatate = {
    images: null,
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
        fatchingSuccess(
            state, 
            action: PayloadAction<IImage[]>
        ) {
            state.isLoading = false;
            state.error = '';
            state.images = action.payload;
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
        }
    }
})

export const imagesReducer = imagesSlice.reducer;

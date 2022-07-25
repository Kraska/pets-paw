import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBreed } from "models/IBreed"


type BreedsSatate = {
    entities: IBreed[],
    isLoading: boolean,
    error: string,
}

const initialState: BreedsSatate = {
    entities: [],
    isLoading: false,
    error: '',
}

export const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {
        fatching(state) {
            state.isLoading = true;
        },
        fatchingSuccess(state, action: PayloadAction<IBreed[]>) {
            state.isLoading = false;
            state.error = '';
            state.entities = action.payload;
        },
        fatchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const breedsReducer = breedsSlice.reducer;
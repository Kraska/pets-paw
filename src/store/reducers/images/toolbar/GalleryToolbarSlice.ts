import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { 
    breedsOptions, 
    limitOptions, 
    orderOptions, 
    typeOptions 
} from "./options";


type gallereyToolbarSatate = {
    order: string,
    type: string,
    breed: string,
    limit: string,
}

const initialState: gallereyToolbarSatate = {
    order: orderOptions[0].key,
    type: typeOptions[0].key,
    breed: breedsOptions[0].key,
    limit: limitOptions[0].key,
}

export const galleryToolbarSlice = createSlice({
    name: 'galleryToolbar',
    initialState,
    reducers: {
        order(state, action: PayloadAction<string>) {
            state.order = action.payload;
        },
        type(state, action: PayloadAction<string>) {
            state.type = action.payload;
        },
        breed(state, action: PayloadAction<string>) {
            state.breed = action.payload;
        },
        limit(state, action: PayloadAction<string>){
            state.limit = action.payload;
        }
    }
})

export const galleryToolbarReducer = galleryToolbarSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LIMIT, SORT } from "components/ToolBar/BreedsToolbar"


type BreedsToolbarSatate = {
    breed: string,
    limit: LIMIT,
    sort: SORT | null,
}

const initialState: BreedsToolbarSatate = {
    breed: 'all',
    limit: '10',
    sort: null,
}

export const breedsToolbarSlice = createSlice({
    name: 'breedsToolbar',
    initialState,
    reducers: {
        breed(state, action: PayloadAction<string>) {
            state.breed = action.payload;
        },
        limit(state, action: PayloadAction<LIMIT>) {
            state.limit = action.payload;
        },
        sort(state, action: PayloadAction<SORT>) {
            state.sort = action.payload;
        },
    }
})

export const breedsToolbarReducer = breedsToolbarSlice.reducer;
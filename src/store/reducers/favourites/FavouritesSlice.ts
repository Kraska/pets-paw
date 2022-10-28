import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFavourite } from "models/IFavourite";


type FavouritesSatate = {
    favourites: IFavourite[] | null,
    isLoading: boolean,
    error: string,
}

const initialState: FavouritesSatate = {
    favourites: null,
    isLoading: false,
    error: '',
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        fatching(state) {
            state.isLoading = true;
        },
        fatchingSuccess(
            state, 
            action: PayloadAction<IFavourite[]>
        ) {
            state.isLoading = false;
            state.error = '';
            state.favourites = action.payload;
        },
        fatchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addFavourite(state, action: PayloadAction<IFavourite>) {
            state.favourites = state.favourites || []
            state.favourites.push(action.payload);
        }
    }
})

export const favouritesReducer = favouritesSlice.reducer;

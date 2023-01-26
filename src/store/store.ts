import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { breedsReducer } from "./reducers/breeds/BreedsSlice";
import { breedsToolbarReducer } from "./reducers/breeds/toolbar/BreedsToolbarSlice";
import { galleryToolbarReducer } from "./reducers/images/toolbar/GalleryToolbarSlice";
import { votingReducer } from "./reducers/voting/VotingSlice";
import { favouritesReducer } from "./reducers/favourites/FavouritesSlice";
import { imagesReducer } from "./reducers/images/ImagesSlice";

const rootReducer = combineReducers({
    breedsReducer,
    breedsToolbarReducer,
    galleryToolbarReducer,
    votingReducer,
    favouritesReducer,
    imagesReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
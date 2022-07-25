import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { breedsReducer } from "./reducers/breeds/BreedsSlice";

const rootReducer = combineReducers({
    breedsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { breedsReducer } from "./reducers/breeds/BreedsSlice";
import { breedsToolbarReducer } from "./reducers/breeds/toolbar/BreedsToolbarSlice";
import { votingReducer } from "./reducers/voting/VotingSlice";

const rootReducer = combineReducers({
    breedsReducer,
    breedsToolbarReducer,
    votingReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
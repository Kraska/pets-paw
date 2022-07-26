import { LIMIT, SORT } from "components/ToolBar/BreedsToolbar";
import { AppDispatch } from "../../../store";
import { breedsToolbarSlice } from "./BreedsToolbarSlice"; 

export const setBreed = (breed: string) => async(dispatch: AppDispatch) => {
    dispatch(breedsToolbarSlice.actions.breed(breed))
};
export const setLimit = (limit: LIMIT) => async(dispatch: AppDispatch) => {
    dispatch(breedsToolbarSlice.actions.limit(limit))
};
export const setSort = (sort: SORT) => async(dispatch: AppDispatch) => {
    dispatch(breedsToolbarSlice.actions.sort(sort))
};

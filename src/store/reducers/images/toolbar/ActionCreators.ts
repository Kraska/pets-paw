import { AppDispatch } from "../../../store";
import { galleryToolbarSlice } from "./GalleryToolbarSlice"; 

export const setOrder = (order: string) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.order(order))
};
export const setType = (type: string) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.type(type))
};
export const setBreed = (breed: string) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.breed(breed))
};
export const setLimit = (limit: string) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.limit(limit))
};

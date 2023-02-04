import { AppDispatch } from "../../../store";
import { galleryToolbarSlice } from "./GalleryToolbarSlice"; 
import { GalleryLimit, GalleryOrder, GalleryType } from "./options";

export const setOrder = (order: GalleryOrder) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.order(order))
};
export const setType = (type: GalleryType) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.type(type))
};
export const setBreed = (breed: string) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.breed(breed))
};
export const setLimit = (limit: GalleryLimit) => async(dispatch: AppDispatch) => {
    dispatch(galleryToolbarSlice.actions.limit(limit))
};

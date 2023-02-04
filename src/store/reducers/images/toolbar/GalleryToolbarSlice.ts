import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { 
    breedsOptions, 
    GALLERY_ORDERS_OPTIONS,
    GALLERY_TYPES_OPTIONS, 
    GALLERY_LIMITS_OPTIONS, 
    GalleryType,
    GalleryOrder,
    GalleryLimit
} from "./options";


type gallereyToolbarSatate = {
    order: GalleryOrder,
    type: GalleryType,
    breed: string,
    limit: GalleryLimit,
}

const initialState: gallereyToolbarSatate = {
    order: GALLERY_ORDERS_OPTIONS[0].key,
    type: GALLERY_TYPES_OPTIONS[0].key,
    breed: breedsOptions[0].key,
    limit: GALLERY_LIMITS_OPTIONS[0].key,
}

export const galleryToolbarSlice = createSlice({
    name: 'galleryToolbar',
    initialState,
    reducers: {
        order(state, action: PayloadAction<GalleryOrder>) {
            state.order = action.payload;
        },
        type(state, action: PayloadAction<GalleryType>) {
            state.type = action.payload;
        },
        breed(state, action: PayloadAction<string>) {
            state.breed = action.payload;
        },
        limit(state, action: PayloadAction<GalleryLimit>){
            state.limit = action.payload;
        }
    }
})

export const galleryToolbarReducer = galleryToolbarSlice.reducer;
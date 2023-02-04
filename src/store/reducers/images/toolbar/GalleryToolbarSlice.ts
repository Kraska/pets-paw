import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { 
    GALLERY_ORDERS_OPTIONS,
    GALLERY_TYPES_OPTIONS, 
    GALLERY_LIMITS_OPTIONS, 
    GalleryType,
    GalleryOrder,
    GalleryLimit,
    GALLERY_ALL_BREEDS
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
    breed: GALLERY_ALL_BREEDS.key,
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
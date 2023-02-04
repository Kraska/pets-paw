import { SelectInputOption } from "components/SelectInput/SelectInput"


type FilterOptions = {
    [key: string]: {
        key: string,
        value: string,
        param: string,
    }
};

const getCopy = (obj: Object) => {
    return JSON.parse(JSON.stringify(obj));
}

const getOptions = (obj: FilterOptions) => {
    return Object.values(obj)
    .map(({key, value}) => ({ key, value}));
}

export const GALLERY_ALL_BREEDS = { key: 'all', value: 'All breeds' };




const galleryLimits: FilterOptions = {
    5: { key: '5', value: '5 items per page', param: '5' },
    10: { key: '10', value: '10 items per page', param: '10' },
    15: { key: '15', value: '15 items per page', param: '15' },
    20: { key: '20', value: '20 items per page', param: '20' },
 } as const;
 const limits = Object.keys(galleryLimits);

export type GalleryLimit = typeof limits[number];
export const GALLERY_LIMITS = getCopy(galleryLimits);
export const GALLERY_LIMITS_OPTIONS = getOptions(galleryLimits);


const galleryOrders: FilterOptions = {
    random: { key: 'random', value: 'Random', param: 'RANDOM' },
    desc: { key: 'desc', value: 'Desc', param: 'DESC' },
    asc: { key: 'asc', value: 'Asc', param: 'ASC' },
 } as const;
const orders = Object.keys(galleryOrders);

export type GalleryOrder = typeof orders[number];
export const GALLERY_ORDERS = getCopy(galleryOrders);
export const GALLERY_ORDERS_OPTIONS = getOptions(galleryOrders);


const galleryTypes: FilterOptions = {
    all: { key: 'all', value: 'All', param: 'jpg,gif,png' },
    static: { key: 'static', value: 'Static', param: 'jpg,png' },
    animated: { key: 'animated', value: 'Animated', param: 'gif' },
 } as const;
const types = Object.keys(galleryTypes);

export type GalleryType = typeof types[number];
export const GALLERY_TYPES = getCopy(galleryTypes);
export const GALLERY_TYPES_OPTIONS = getOptions(galleryTypes);



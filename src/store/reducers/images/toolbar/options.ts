import { SelectInputOption } from "components/SelectInput/SelectInput"

export const breedsOptions: SelectInputOption[] = [
    { key: 'all', value: 'All breeds' },
    { key: 'abyssinian', value: 'Abyssinian' },
    { key: 'aegean', value: 'Aegean' },
    { key: 'american_bobtail', value: 'American Bobtail' },
    { key: 'american_curl', value: 'American Curl' },
    { key: 'american_shorthair', value: 'American Shorthair' },
    { key: 'american_wirehair', value: 'American Wirehair' },
];

export const limitOptions: SelectInputOption[] = [
    { key: '5', value: '5 items per page' },
    { key: '10', value: '10 items per page' },
    { key: '15', value: '15 items per page' },
    { key: '20', value: '20 items per page' },
];

export const orderOptions: SelectInputOption[] = [
    { key: 'random', value: 'Random' },
    { key: 'desc', value: 'Desc' },
    { key: 'asc', value: 'Asc' },
];

export const typeOptions: SelectInputOption[] = [
    { key: 'all', value: 'All' },
    { key: 'static', value: 'Static' },
    { key: 'animated', value: 'Animated' },
];

import { SelectInput, SelectInputOption } from "components/SelectInput/SelectInput"
import { SortBtn } from "components/SortBtn/SortBtn";

type BreedsToolbarProps = {
    className?: string,

}

const breedsOptions: SelectInputOption[] = [
    { key: 'all', value: 'All breeds' },
    { key: 'abyssinian', value: 'Abyssinian' },
    { key: 'aegean', value: 'Aegean' },
    { key: 'american_bobtail', value: 'American Bobtail' },
    { key: 'american_curl', value: 'American Curl' },
    { key: 'american_shorthair', value: 'American Shorthair' },
    { key: 'american_wirehair', value: 'American Wirehair' },
];

const limitOptions: SelectInputOption[] = [
    { key: '5', value: 'Limit: 5' },
    { key: '10', value: 'Limit: 10' },
    { key: '15', value: 'Limit: 15' },
    { key: '20', value: 'Limit: 20' },
];

export const BreedsToolbar: React.FC<BreedsToolbarProps> = ({ className }) => {
    return <div className={`BreedsToolbar ${className} flex gap-4`}>
        <SelectInput name='breed' color='grey' className="grow" items={breedsOptions} />
        <SelectInput name='limit' color='grey' items={limitOptions} />
        <SortBtn type="up" />
        <SortBtn type="down" />
    </div>
}
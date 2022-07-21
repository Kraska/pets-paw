import { IconBtn } from "components/IconBtn/IconBtn";
import { SelectInput, SelectInputOption } from "components/SelectInput/SelectInput"

type GalleryToolbarProps = {
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
    { key: '5', value: '5 items per page' },
    { key: '10', value: '10 items per page' },
    { key: '15', value: '15 items per page' },
    { key: '20', value: '20 items per page' },
];

const orderOptions: SelectInputOption[] = [
    { key: 'random', value: 'Random' },
    { key: 'desc', value: 'Desc' },
    { key: 'asc', value: 'Asc' },
];

const typeOptions: SelectInputOption[] = [
    { key: 'all', value: 'All' },
    { key: 'static', value: 'Static' },
    { key: 'animated', value: 'Animated' },
];

export const GalleryToolbar: React.FC<GalleryToolbarProps> = ({ className }) => {
    return <div className={`${className} grid grid-cols-2 gap-4 bg-background rounded-lg p-2.5`}>
        <SelectInput label="ORDER" name='order' color='white' items={orderOptions} />
        <SelectInput label="TYPE" name='type' color='white' items={typeOptions} />
        <SelectInput label="BREED" name='breed' color='white' items={breedsOptions} />
        <div className="flex gap-3">
            <SelectInput label="LIMIT" className="grow" name='limit' color='white' items={limitOptions} />
            <IconBtn className="self-end" type="update" size="sm" />
        </div>
    </div>
}
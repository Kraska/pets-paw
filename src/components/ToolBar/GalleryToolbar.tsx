import { IconBtn } from "components/IconBtn/IconBtn";
import { SelectInput } from "components/SelectInput/SelectInput"
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setBreed, setLimit, setOrder, setType } from "store/reducers/images/toolbar/ActionCreators";
import { 
    breedsOptions, 
    GALLERY_TYPES_OPTIONS, 
    GalleryType,
    GalleryOrder,
    GalleryLimit,
    GALLERY_ORDERS_OPTIONS,
    GALLERY_LIMITS_OPTIONS
} from "store/reducers/images/toolbar/options";


type GalleryToolbarProps = {
    className?: string,

}


export const GalleryToolbar: React.FC<GalleryToolbarProps> = ({ className }) => {

    const { order, type, breed, limit } = useAppSelector(state => state.galleryToolbarReducer);
    const dispatch = useAppDispatch();

    return <div className={`${className} grid grid-cols-2 gap-4 bg-background rounded-lg p-2.5`}>
        <SelectInput 
            label="ORDER" 
            name='order' 
            color='white' 
            items={GALLERY_ORDERS_OPTIONS} 
            value={order}
            onChange={e => dispatch(setOrder(e.target.value as GalleryOrder))}
            />
        <SelectInput 
            label="TYPE" 
            name='type' 
            color='white' 
            items={GALLERY_TYPES_OPTIONS} 
            value={type}
            onChange={e => dispatch(setType(e.target.value as GalleryType))}
            />
        <SelectInput 
            label="BREED" 
            name='breed' 
            color='white' 
            items={breedsOptions} 
            value={breed}
            onChange={e => dispatch(setBreed(e.target.value))}
            />
        <div className="flex gap-3">
            <SelectInput 
                label="LIMIT" 
                className="grow" 
                name='limit' 
                color='white' 
                items={GALLERY_LIMITS_OPTIONS} 
                value={limit}
                onChange={e => dispatch(setLimit(e.target.value as GalleryLimit))}    
                />
            <IconBtn className="self-end" type="update" size="sm" />
        </div>
    </div>
}



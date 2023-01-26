import { IconBtn } from "components/IconBtn/IconBtn";
import { SelectInput } from "components/SelectInput/SelectInput"
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setBreed, setLimit, setOrder, setType } from "store/reducers/images/toolbar/ActionCreators";
import { 
    breedsOptions, 
    limitOptions, 
    orderOptions, 
    typeOptions 
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
            items={orderOptions} 
            value={order}
            onChange={e => dispatch(setOrder(e.target.value))}
            />
        <SelectInput 
            label="TYPE" 
            name='type' 
            color='white' 
            items={typeOptions} 
            value={type}
            onChange={e => dispatch(setType(e.target.value))}
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
                items={limitOptions} 
                value={limit}
                onChange={e => dispatch(setLimit(e.target.value))}    
                />
            <IconBtn className="self-end" type="update" size="sm" />
        </div>
    </div>
}


// const types = typeOptions.map(({ key }) => key);
// const TYPES = typeof types;
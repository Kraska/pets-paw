import { SelectInput, SelectInputOption } from "components/SelectInput/SelectInput"
import { SortBtn, SortBtnType, SORT_TYPES } from "components/SortBtn/SortBtn";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { fetchBreeds } from "store/reducers/breeds/ActionCreators";
import { setBreed, setLimit, setSort } from "store/reducers/breeds/toolbar/ActionCreators";

type BreedsToolbarProps = {
    className?: string,

}

const limits = ['5', '10', '15', '20'] as const;
const limitOptions: SelectInputOption[] = limits
    .map(key => ({ key, value: `Limit: ${key}` }));

export const ALL_BREEDS = 'all';

export const BreedsToolbar: React.FC<BreedsToolbarProps> = ({ className }) => {

    const dispatch = useAppDispatch();
    const { entities, isLoading } = useAppSelector(state => state.breedsReducer);

    useEffect(() => {
        dispatch(fetchBreeds());
    }, []);

    const allBreedsOption = { key: ALL_BREEDS, value: 'All breeds' };
    const loadingBreedsOption = { key: 'loading', value: 'Loading...', disabled: true };

    const breedsOptions = isLoading ? 
        [allBreedsOption, loadingBreedsOption] :
        [allBreedsOption, ...entities.map(({id, name}) => ({ key: id, value: name }))]


    const { breed, limit, sort } = useAppSelector(state => state.breedsToolbarReducer)

    return <div className={`BreedsToolbar ${className} flex gap-4`}>
        <SelectInput 
            name='breed' 
            color='grey' 
            className="grow" 
            items={breedsOptions} 
            value={breed}
            onChange={e => dispatch(setBreed(e.target.value))}
            />
        <SelectInput 
            name='limit' 
            color='grey' 
            items={limitOptions} 
            value={limit}
            onChange={e => dispatch(setLimit(e.target.value as LIMIT))}
            />
        <SortBtn 
            type={SORT_TYPES.up} 
            isActive={sort === SORT_TYPES.up} 
            onClick={() => dispatch(setSort(sort === SORT_TYPES.up ? null : SORT_TYPES.up))}
            />
        <SortBtn 
            type={SORT_TYPES.down} 
            isActive={sort === SORT_TYPES.down} 
            onClick={() => dispatch(setSort(sort === SORT_TYPES.down ? null : SORT_TYPES.down))}
            />
    </div>
}

export type LIMIT = typeof limits[number];
export type SORT = SortBtnType | null;

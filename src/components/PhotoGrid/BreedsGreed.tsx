import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { Loader } from "components/Loader/Loader";
import { SORT_TYPES } from "components/SortBtn/SortBtn";
import { ALL_BREEDS } from "components/ToolBar/BreedsToolbar";
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { useEffect, useMemo } from "react";
import { fetchBreeds } from "store/reducers/breeds/ActionCreators";
import { PhotoGrid } from "./PhotoGrid";

export const BreedsGreed: React.FC = () => {

    const { breedsMap, isLoading, error } = useAppSelector(state => state.breedsReducer);

    const { breed, limit, sort } = useAppSelector(state => state.breedsToolbarReducer);

    const compare = (item1: string, item2: string) => {
        const res = item1.localeCompare(item2);
        return sort == SORT_TYPES.up ? -res : res;
    }

    // todo fetch only if not loaded!
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(fetchBreeds());
    // }, []);
    // console.log('entities', entities);

    const filteredItems = useMemo(
        () => {
            if (breed === ALL_BREEDS) return Object.values(breedsMap);
            return Object.values(breedsMap).filter(({ id }) => id === breed);
        }, 
        [breedsMap, breed]
    );

    const sortedItems = useMemo(
        () => {
            if (!sort) return filteredItems;
            return filteredItems.sort((item1, item2) => compare(item1.name, item2.name))
        } , 
        [filteredItems, sort]
    );

    const items = useMemo(
        () => sortedItems.slice(0, +limit), 
        [sortedItems, sort, limit]
    );

    //console.log('items', items);

    return <>
        {error && <ErrorMsg error={error} />}
        {isLoading ? <Loader /> : <PhotoGrid items={items} />}
    </> 
}
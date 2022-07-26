import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { Loader } from "components/Loader/Loader";
import { SORT_TYPES } from "components/SortBtn/SortBtn";
import { ALL_BREEDS } from "components/ToolBar/BreedsToolbar";
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { useEffect, useMemo } from "react";
import { fetchBreeds } from "store/reducers/breeds/ActionCreators";
import { PhotoGrid } from "./PhotoGrid";

export const BreedsGreed: React.FC = () => {

    const { entities, isLoading, error } = useAppSelector(state => state.breedsReducer);

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

    let items = useMemo(
        () => entities
                .map(({ id, name, image }) => 
                    ({ id, name, url: image && image.url })), 
        [entities]
    );

    const filteredItems = useMemo(
        () => {
            if (breed === ALL_BREEDS) return items;
            return items.filter(({ id }) => id === breed);
        }, 
        [items, breed]
    );

    const sortedItems = useMemo(
        () => {
            if (!sort) return filteredItems;
            return filteredItems.sort((item1, item2) => compare(item1.name, item2.name))
        } , 
        [filteredItems, sort]
    );

    const limitedItems = useMemo(
        () => sortedItems.slice(0, +limit), 
        [sortedItems, sort, limit]
    );

    console.log('items', limitedItems);

    return <>
        {error && <ErrorMsg error={error} />}
        {isLoading ? <Loader /> : <PhotoGrid items={limitedItems} />}
    </> 
}
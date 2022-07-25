import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { Loader } from "components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { useEffect } from "react";
import { fetchBreeds } from "store/reducers/breeds/ActionCreators";
import { PhotoGrid } from "./PhotoGrid";

export const BreedsGreed: React.FC = () => {

    const dispatch = useAppDispatch();
    const { entities, isLoading, error } = useAppSelector(state => state.breedsReducer);

    useEffect(() => {
        dispatch(fetchBreeds());
    }, []);

    console.log('entities', entities);
    const items = entities
        .map(({ id, name, image }) => ({ id, name, url: image && image.url }))
    // console.log('items', items);

    return <>
        {error && <ErrorMsg error={error} />}
        {isLoading ? <Loader /> : <PhotoGrid items={items} />}
    </> 
}
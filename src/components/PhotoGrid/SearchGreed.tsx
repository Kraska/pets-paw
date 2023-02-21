import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { Loader } from "components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { useEffect } from "react";
import { fetchBreeds } from "store/reducers/breeds/ActionCreators";
import { PhotoGrid } from "./PhotoGrid";

type SearchGreedParams = {
    text: string
}

export const SearchGreed: React.FC<SearchGreedParams> = ({ text }) => {

    const { breedsMap, isLoading, error } = useAppSelector(state => state.breedsReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        !isLoading && dispatch(fetchBreeds());
    }, []);

    const items = Object.values(breedsMap)
        .filter(({ name }) => name.toLowerCase().includes(text))

    return <>
        {error && <ErrorMsg error={error} />}
        {isLoading ? <Loader /> : <PhotoGrid items={items} />}
    </> 
}
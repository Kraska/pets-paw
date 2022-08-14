import { AppRoute } from "AppRoute";
import { NavBar } from "components/NavBar/NavBar";
import { Layout, RightSideLayout } from "./Layout";
import { useParams } from "react-router-dom";
import { BreedInfo } from "components/BreedInfo/BreedInfo";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { fetchBreeds } from "store/reducers/breeds/ActionCreators";
import { Loader } from "components/Loader/Loader";
import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";

export const BreedPage: React.FC = () => {
    const { id } = useParams();

    const { breedsMap, isLoading, error } = useAppSelector(state => state.breedsReducer);
    const breed = breedsMap[id!]

    const dispatch = useAppDispatch();
    useEffect(() => {
        !breedsMap.length && !isLoading && dispatch(fetchBreeds());
    }, []);

    return (
        <Layout>
            <RightSideLayout>
                <NavBar links={[{ title: "BREEDS", link: AppRoute.BREEDS }]} currentTitle={id!} />
                {error && <ErrorMsg error={error} />}
                {isLoading ?
                    <Loader /> 
                    : !breed ? 
                        <ErrorMsg error={`There are no breed with id=${id}`} />
                        : 
                        <BreedInfo breed={breed} />
                }
            </RightSideLayout>
        </Layout>
    )
}
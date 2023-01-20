import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid, PhotoGridItem } from "components/PhotoGrid/PhotoGrid";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { fetchFavourites } from "store/reducers/favourites/ActionCreators";
import { Layout, RightSideLayout } from "./Layout";


export const FavoritesPage: React.FC = () => {

    const { favourites, isLoading, error } = useAppSelector(state => state.favouritesReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        favourites === null && !isLoading && dispatch(fetchFavourites())
    }, [])

    const items: PhotoGridItem[] = (favourites || []).filter(({ image }) => image && image.url)
        .map(({ image_id, image }) => ({ 
            id: image_id, 
            name: image_id, 
            url: image!.url,
        }));

    return (
        <Layout>
            <RightSideLayout>
                <NavBar className="mb-5" currentTitle="FAVORITES" />
                <PhotoGrid items={items} hoverType="heart" />
            </RightSideLayout>
        </Layout>
    )
}
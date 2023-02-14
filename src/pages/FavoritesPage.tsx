import { NavBar } from "components/NavBar/NavBar";
import { getBtnHoverGen, PhotoGrid, PhotoGridItem } from "components/PhotoGrid/PhotoGrid";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { fetchFavourites, deleteFavourite } from "store/reducers/favourites/ActionCreators";
import { Layout, RightSideLayout } from "./Layout";


export const FavoritesPage: React.FC = () => {

    const { favourites, isLoading, error } = useAppSelector(state => state.favouritesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        favourites === null && !isLoading && dispatch(fetchFavourites())
    }, []);

    const items: PhotoGridItem[] = (favourites || [])
        .filter(({ image }) => image && image.url)
        .map(({ id, image_id, image }) => ({ 
            id: id!.toString(), 
            name: image_id, 
            url: image!.url,
        }))
        .reverse();

    const deleteFromFavorites = (item: PhotoGridItem) => {
        dispatch(deleteFavourite(item.id));
    }    

    return (
        <Layout>
            <RightSideLayout>
                <NavBar className="mb-5" currentTitle="FAVORITES" />
                <PhotoGrid 
                    items={items} 
                    hoverGen={getBtnHoverGen("heart-full", "white", deleteFromFavorites)}
                    />
            </RightSideLayout>
        </Layout>
    )
}
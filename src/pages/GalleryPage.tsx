import { UploadButton } from "components/Button/Button";
import { NavBar } from "components/NavBar/NavBar";
import { getBtnHoverGen, PhotoGrid, PhotoGridItem } from "components/PhotoGrid/PhotoGrid";
import { GalleryToolbar } from "components/ToolBar/GalleryToolbar";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { addFavourite } from "store/reducers/favourites/ActionCreators";
import { fetchImages } from "store/reducers/images/ActionCreators";
import { Layout, RightSideLayout } from "./Layout";

type GalleryPageProps = {}

export const GalleryPage: React.FC<GalleryPageProps> = () => {

    const { images, isLoading, error } = useAppSelector(state => state.imagesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        images == null && !isLoading && dispatch(fetchImages())
    }, []);

    const items: PhotoGridItem[] = (images || [])
        .map(({ id, url }) => ({ id, name: id, url}))


    const addToFavorites = (item: PhotoGridItem) => {
        dispatch(addFavourite(item.id))
    }

    return (
        <Layout>
            <RightSideLayout>
                <div className="flex ">
                    <NavBar className="grow" currentTitle='Gallery'/>
                    <UploadButton color='pink-light' />
                </div>
                <GalleryToolbar className="my-5" />
                <PhotoGrid 
                    items={items} 
                    hoverGen={getBtnHoverGen('heart', 'white', addToFavorites)}
                    />
            </RightSideLayout>
        </Layout>
    )
}
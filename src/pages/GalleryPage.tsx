import { UploadButton } from "components/Button/Button";
import { LazyLoader } from "components/Loader/LazyLoader";
import { NavBar } from "components/NavBar/NavBar";
import { getBtnHoverGen, PhotoGrid, PhotoGridItem } from "components/PhotoGrid/PhotoGrid";
import { GalleryToolbar } from "components/ToolBar/GalleryToolbar";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { addFavourite } from "store/reducers/favourites/ActionCreators";
import { fetchImages } from "store/reducers/images/ActionCreators";
import { increasePage } from "store/reducers/images/toolbar/ActionCreators";
import { GALLERY_LIMITS, GALLERY_ORDERS, GALLERY_TYPES } from "store/reducers/images/toolbar/options";
import { Layout, RightSideLayout } from "./Layout";

type GalleryPageProps = {}

export const GalleryPage: React.FC<GalleryPageProps> = () => {

    const { images, allLoaded, isLoading, error } = useAppSelector(state => state.imagesReducer);
    const dispatch = useAppDispatch();

    const { order, type, breed, limit, page } = useAppSelector(state => state.galleryToolbarReducer);

    const loadNext = () => {
        dispatch(increasePage());
    }

    useEffect(() => {
        !isLoading && 
        dispatch(fetchImages(
            GALLERY_ORDERS[order].param, 
            GALLERY_TYPES[type].param, 
            breed, 
            GALLERY_LIMITS[limit].param,
            page
        ))
    }, [order, type, breed, limit, page]);
    

    const items: PhotoGridItem[] = (images || [])
        .map(({ id, url }) => ({ id, name: id, url}))


    const addToFavorites = (item: PhotoGridItem) => {
        dispatch(addFavourite(item.id))
    }

    return (
        <Layout>
            <RightSideLayout>
                <div className="flex">
                    <NavBar className="grow" currentTitle='Gallery'/>
                    <UploadButton color='pink-light' />
                </div>
                <GalleryToolbar className="my-5" />
                <PhotoGrid 
                    items={items} 
                    hoverGen={getBtnHoverGen('heart', 'white', addToFavorites)}
                    />
                <LazyLoader loadNext={loadNext} isFinish={allLoaded} />
            </RightSideLayout>
        </Layout>
    )
}
import { UploadButton } from "components/Button/Button";
import { IconBtn } from "components/IconBtn/IconBtn";
import { LazyLoader } from "components/Loader/LazyLoader";
import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid, PhotoGridItem } from "components/PhotoGrid/PhotoGrid";
import { GalleryToolbar } from "components/ToolBar/GalleryToolbar";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect, useState } from "react";
import { addFavourite, deleteFavourite, fetchFavourites } from "store/reducers/favourites/ActionCreators";
import { fetchImages } from "store/reducers/images/ActionCreators";
import { increasePage } from "store/reducers/images/toolbar/ActionCreators";
import { GALLERY_LIMITS, GALLERY_ORDERS, GALLERY_TYPES } from "store/reducers/images/toolbar/options";
import { Layout, RightSideLayout } from "./Layout";

type GalleryPageProps = {}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
    const dispatch = useAppDispatch();

    const { images, allLoaded, isLoading, error } = 
    useAppSelector(state => state.imagesReducer);

    const { order, type, breed, limit, page } = 
    useAppSelector(state => state.galleryToolbarReducer);

    const { favourites, isLoading: isLoadingFauvorites } = 
    useAppSelector(state => state.favouritesReducer);

    const favouritesIds = favourites ? 
        favourites.map(i => i.image_id) :
        [];

    useEffect(() => {
        favourites === null && !isLoadingFauvorites && dispatch(fetchFavourites())
    }, []);

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
        favouritesIds.push(item.id)
        dispatch(addFavourite(item.id))
    }

    const removeFromFavorites = (item: PhotoGridItem) => {
        favouritesIds.filter(id => id != item.id)
        const favourite = favourites?.find(({ image_id }) => image_id == item.id)
        favourite && favourite.id && dispatch(deleteFavourite(favourite.id))
    }

    const btnHoverGen = (item: PhotoGridItem) => {
        const isFavourite = favouritesIds.includes(item.id);

        return <Hover 
            isFavourite={isFavourite} 
            add={() => removeFromFavorites(item)} 
            remove={() => addToFavorites(item)} 
            />
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
                    hoverGen={btnHoverGen}
                    />
                <LazyLoader loadNext={loadNext} isFinish={allLoaded} />
            </RightSideLayout>
        </Layout>
    )
}

type HoverProps = {
    isFavourite: boolean,
    add: () => void,
    remove: () => void,
}

const Hover: React.FC<HoverProps> = ({ isFavourite, add, remove }) => {

    const type = isFavourite ? 'heart-full' : 'heart';

    const [ loading, setLoading ] = useState(false);
    const [ prevValue, setPrevValue ] = useState<null|boolean>(null);

    loading && 
    prevValue !== isFavourite &&
    setLoading(false)

    const callback = () => {
        setLoading(true);
        setPrevValue(isFavourite);
        isFavourite ? add() : remove();
    };

    return <div className="PhotoGridItemHover">
        {loading ? 
            <Loader /> :
            <IconBtn size='sm' color='white' type={type} onClick={callback} />
        }
    </div>;
}


const Loader: React.FC<{}> = () => {
    return <div>loading...</div>
}
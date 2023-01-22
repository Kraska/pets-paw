import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid, PhotoGridItem } from "components/PhotoGrid/PhotoGrid";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { fetchVotes } from "store/reducers/voting/ActionCreators";
import { Layout, RightSideLayout } from "./Layout";

type VotesPageProps = {
    type: 'likes'| 'dislikes',
    title: string,
};

export const VotesPage: React.FC<VotesPageProps> = ( { type, title } ) => {

    const { votes, isLoading, error } = useAppSelector(state => state.votingReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        votes === null && !isLoading && dispatch(fetchVotes());
    }, []);
 
    const voteType = (type == 'likes') ? 1 : 0;

    const likes: PhotoGridItem[] = Array.from(new Set(votes))
        .filter(({ value }) => value == voteType)
        .filter(({ image }) => image && image.url)
        .map(({ image_id, image }) => ({ 
            id: image_id, 
            name: image_id, 
            url: image!.url,
        }));

// console.log(likes);

    return (
        <Layout>
            <RightSideLayout>
                <NavBar className="mb-5" currentTitle={title} />
                <PhotoGrid items={likes} hoverGen={() => <></>} />
            </RightSideLayout>
        </Layout>
    )
}
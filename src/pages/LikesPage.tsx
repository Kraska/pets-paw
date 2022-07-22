import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid";
import { Layout, RightSideLayout } from "./Layout";


export const LikesPage: React.FC = () => {
    return (
        <Layout>
            <RightSideLayout>
                <NavBar className="mb-5" currentTitle="LIKES" />
                <PhotoGrid hoverType="heart" />
            </RightSideLayout>
        </Layout>
    )
}
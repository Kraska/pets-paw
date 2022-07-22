import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid";
import { Layout, RightSideLayout } from "./Layout";


export const FavoritesPage: React.FC = () => {
    return (
        <Layout>
            <RightSideLayout>
                <NavBar className="mb-5" currentTitle="FAVORITES" />
                <PhotoGrid hoverType="heart" />
            </RightSideLayout>
        </Layout>
    )
}
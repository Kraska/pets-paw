import { UploadButton } from "components/Button/Button";
import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid";
import { GalleryToolbar } from "components/ToolBar/GalleryToolbar";
import { Layout, RightSideLayout } from "./Layout";

type GalleryPageProps = {}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
    return (
        <Layout>
            <RightSideLayout>
                <div className="flex ">
                    <NavBar className="grow" title='Gallery'/>
                    <UploadButton color='pink-light' />
                </div>
                <GalleryToolbar className="my-5" />
                <PhotoGrid hoverType="heart" />
            </RightSideLayout>
        </Layout>
    )
}
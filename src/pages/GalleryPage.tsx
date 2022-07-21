import { UploadButton } from "components/Button/Button";
import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid";
import { GalleryToolbar } from "components/ToolBar/GalleryToolbar";
import { ToolBar } from "components/ToolBar/ToolBar";
import { Layout } from "./Layout";

type GalleryPageProps = {}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
    return (
        <Layout>
            <ToolBar />
            <div className="bg-white rounded-lg w-full my-2.5 p-5">
                <div className="flex ">
                    <NavBar className="grow" title='Gallery'/>
                    <UploadButton color='pink-light' />
                </div>
                <GalleryToolbar className="my-5" />
                <PhotoGrid hoverType="heart" />
            </div>
        </Layout>
    )
}
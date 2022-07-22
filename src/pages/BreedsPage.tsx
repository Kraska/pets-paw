import { NavBar } from "components/NavBar/NavBar"
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid"
import { BreedsToolbar } from "components/ToolBar/BreedsToolbar"
import { Layout, RightSideLayout } from "./Layout"

type BreedsPageProps = {

}

export const BreedsPage: React.FC<BreedsPageProps> = () => {
    return (
        <Layout>
            <RightSideLayout>
                <div className="flex mb-5">
                    <NavBar currentTitle='Breeds'/>
                    <BreedsToolbar className='grow ml-5' />
                </div>
                <PhotoGrid />
            </RightSideLayout>
        </Layout>
    )
}
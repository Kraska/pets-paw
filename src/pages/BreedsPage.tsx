import { NavBar } from "components/NavBar/NavBar"
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid"
import { BreedsToolbar } from "components/ToolBar/BreedsToolbar"
import { ToolBar } from "components/ToolBar/ToolBar"
import { Layout } from "./Layout"

type BreedsPageProps = {

}

export const BreedsPage: React.FC<BreedsPageProps> = () => {
    return (
        <Layout>
            <ToolBar />
            <div className="bg-white rounded-lg w-full my-2.5 p-5">
                <div className="flex">
                    <NavBar title='Breeds'/>
                    <BreedsToolbar className='mt-5 grow' />
                </div>
                <PhotoGrid />
            </div>
        </Layout>
    )
}
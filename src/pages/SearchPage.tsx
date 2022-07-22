import { NavBar } from "components/NavBar/NavBar";
import { PhotoGrid } from "components/PhotoGrid/PhotoGrid";
import { useSearchParams } from "react-router-dom";
import { Layout, RightSideLayout } from "./Layout";


export const SearchPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    return (
        <Layout>
            <RightSideLayout>
                <NavBar currentTitle="SEARCH" />
                <div className="my-5 text-md text-text-light">
                    Search results for:  
                    <span className="text-text font-medium"> {searchParams.get('text')}</span>
                </div>
                <PhotoGrid />
            </RightSideLayout>
        </Layout>
    )
}
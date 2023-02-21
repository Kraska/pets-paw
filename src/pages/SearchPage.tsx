import { NavBar } from "components/NavBar/NavBar";
import { SearchGreed } from "components/PhotoGrid/SearchGreed";
import { useSearchParams } from "react-router-dom";
import { Layout, RightSideLayout } from "./Layout";


export const SearchPage: React.FC = () => {

    const [searchParams] = useSearchParams();
    const text = searchParams.get('text');

    return (
        <Layout>
            <RightSideLayout>
                <NavBar currentTitle="SEARCH" />
                <div className="my-5 text-md text-text-light">
                    Search results for:  
                    <span className="text-text font-medium"> {text}</span>
                </div>
                {text && <SearchGreed text={text} />}
            </RightSideLayout>
        </Layout>
    )
}
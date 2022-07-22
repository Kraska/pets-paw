import { AppRoute } from "AppRoute";
import { NavBar } from "components/NavBar/NavBar";
import { Layout, RightSideLayout } from "./Layout";
import RandomImg from 'assets/images/tmp/image1.png';
import { useParams } from "react-router-dom";

type BreedPageProps = {}

export const BreedPage: React.FC<BreedPageProps> = () => {
    let { id } = useParams();
    return (
        <Layout>
            <RightSideLayout>
                <NavBar links={[{ title: "BREEDS", link: AppRoute.BREEDS }]} currentTitle={id || ''} />
                <img 
                    src={RandomImg} 
                    alt="Random image" 
                    className="w-full rounded-lg mt-5" 
                    />
            </RightSideLayout>
        </Layout>
    )
}
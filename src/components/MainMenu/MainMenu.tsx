import { MainMenuItem } from "./MainMenuItem";
import VoteImg from 'assets/images/menu/vote-table.png';
import BreedsImg from 'assets/images/menu/pet-breeds.png';
import SaerchImg from 'assets/images/menu/images-search.png';
import { AppRoute } from "AppRoute";


export const MainMenu: React.FC = () => {
    return (
        <div className="MainMenu">
          <MainMenuItem 
            imgSrc={VoteImg}
            type='Vote'
            title="Voting" 
            link={AppRoute.VOTING}  
            />
    
          <MainMenuItem 
            imgSrc={BreedsImg}
            type='Breeds'
            title="Breeds" 
            link={AppRoute.BREEDS} 
            />
    
          <MainMenuItem 
            imgSrc={SaerchImg}  
            type='Search'
            title="Gallery" 
            link={AppRoute.GALLERY}  
            />
        </div>
      );
}
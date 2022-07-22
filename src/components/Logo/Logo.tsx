import { AppRoute } from 'AppRoute';
import logo from 'assets/images/Logo.png'
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
    return <Link to={AppRoute.HOME}><img className='w-[106px] h-[24px]' alt="Logo" src={logo} /></Link>;
}
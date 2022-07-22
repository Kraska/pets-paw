import { AppRoute } from "AppRoute";
import { IconBtn, IconType } from "components/IconBtn/IconBtn"
import { SearchInput } from "components/SearchInput/SearchInput"
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const ToolBar = () => {

    const { pathname } = useLocation();
    const [searchParams] = useSearchParams(); 

    const serchText = pathname === AppRoute.SEARCH ? 
        searchParams.get('text') || '' : '';

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value);
    }

    const navButton = (type: IconType, link: string) => (pathname === link) ?
            <IconBtn type={type} color='pink' /> :
            <Link to={link}><IconBtn type={type} color='white' /></Link>;
    

    return <div className="flex gap-2.5">
        <SearchInput onChange={onChange} value={serchText} className="grow" />
        {navButton('smile', AppRoute.LIKES)}
        {navButton('heart', AppRoute.FAVORITES)}
        {navButton('sad', AppRoute.DISLIKES)}
    </div>
}


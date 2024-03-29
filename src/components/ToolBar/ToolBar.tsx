import { AppRoute } from "AppRoute";
import { IconBtn, IconType } from "components/IconBtn/IconBtn"
import { SearchInput } from "components/SearchInput/SearchInput"
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const ToolBar = () => {

    const { pathname } = useLocation();
    const [ searchParams ] = useSearchParams(); 

    const searchText = pathname === AppRoute.SEARCH ? 
        searchParams.get('text') || '' : '';
        
    const navigate = useNavigate();
    const onSearch = (text: string) => {
        navigate({
            pathname: AppRoute.SEARCH,
            search: createSearchParams({
                text: text
            }).toString()
        });
    }
    
    const navButton = (type: IconType, link: string) => (pathname === link) ?
            <IconBtn type={type} color='pink' /> :
            <Link to={link}><IconBtn type={type} color='white' /></Link>;
    

    return <div className="flex gap-2.5">
        <SearchInput 
            onSearch={onSearch}
            initValue={searchText} 
            className="grow" 
            />
        {navButton('smile', AppRoute.LIKES)}
        {navButton('heart', AppRoute.FAVORITES)}
        {navButton('sad', AppRoute.DISLIKES)}
    </div>
}


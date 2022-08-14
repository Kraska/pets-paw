import { Badge } from "components/Badge/Badge";
import { BackButton, Button, PrevButton } from "components/Button/Button";
import { Link } from "react-router-dom";

type NavBarLinkEntity = {
    title: string,
    link: string,
}

type NavBarProps = {
    currentTitle: string,
    links?: NavBarLinkEntity[],
    className?: string,
}

export const NavBar: React.FC<NavBarProps> = ({ currentTitle, links = [], className }) => {

    const navBarLink = ({ link, title }: NavBarLinkEntity) => 
    (<Link key={title} to={link}><Button color='pink-light' title={title} /></Link>)

    return <div className={`${className} flex gap-2`}>
        <BackButton key="back" color='pink-light' />
        {links.map((item) => navBarLink(item))}
        <Badge key={currentTitle} title={currentTitle} color='pink' />
    </div>
}


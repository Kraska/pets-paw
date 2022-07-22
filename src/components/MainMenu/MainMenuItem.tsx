import { Badge } from "components/Badge/Badge";
import React from "react";
import { Link } from "react-router-dom";
import './MainMenu.css';


type MainMenuItemProps = {
    type: 'Vote' | 'Breeds' | 'Search',
    imgSrc: string,
    title: string,
    link: string
}

export const MainMenuItem: React.FC<MainMenuItemProps> = ({ type, title, imgSrc, link }) => {
    return <Link to={link} className="MainMenuItem">
        <div className={`Img ${type}`}>
            <img alt={title} src={imgSrc} />
        </div>
        <Badge className="my-2.5 uppercase" title={title} />
    </Link>;
}
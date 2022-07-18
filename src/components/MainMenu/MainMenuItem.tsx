import React from "react";
import './MainMenu.css';


type MainMenuItemProps = {
    type: 'Vote' | 'Breeds' | 'Search',
    imgSrc: string,
    title: string,
    url: string
}

export const MainMenuItem: React.FC<MainMenuItemProps> = ({ type, title, imgSrc, url }) => {
    return <div className="MainMenuItem">
        <div className={`Img ${type}`}>
            <img alt={title} src={imgSrc} />
        </div>
        <div className="Label">{title}</div>
    </div>;
}
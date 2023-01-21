import './PhotoGrid.css';
import { IconBtn } from 'components/IconBtn/IconBtn';
import { Badge } from 'components/Badge/Badge';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type PhotoGridProps = {
    items?: PhotoGridItem[],
    className?: string,
    hoverGen?: (item: PhotoGridItem) => ReactNode,
}

export type PhotoGridItem = {
    id: string,
    url: string,
    name: string,
    link?: string, 
}



export const PhotoGrid: React.FC<PhotoGridProps> = ({ 
    items = [],  
    className, 
    hoverGen = linkHoverGen
}) => {
    
    return <div className={`PhotoGrid ${className}`}>
        {items.map(item => 
            (<PhotoGridItem 
                key={item.id} 
                item={item} 
                hoverGen={hoverGen}
                />))}
    </div>
}


type PhotoGridItemProps = {
    item: PhotoGridItem,
    hoverGen: (item: PhotoGridItem) => ReactNode,
}

const PhotoGridItem: React.FC<PhotoGridItemProps> = ({ item, hoverGen }) => {
    const { url, name } = item;

    return <div className='PhotoGridItem'>
            {hoverGen(item)}
            <img src={url} alt={name} />
        </div>;
}


export const linkHoverGen = (item: PhotoGridItem) => {
    return <Link to={item.link || ''}>
        <div className="PhotoGridItemHover">
            <Badge className='w-full m-2.5 self-end' title={item.name} /> 
        </div>
    </Link>
}

export const getBtnHoverGen = (
    type: 'heart' | 'heart-full', 
    color: 'white' | 'pink',
    callback: (item: PhotoGridItem) => void,

) => {
    return (item: PhotoGridItem) =>
        <div className="PhotoGridItemHover">
            <IconBtn size='sm' color={color} type={type} onClick={e => callback(item)} />
        </div>;
}


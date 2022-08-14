import './PhotoGrid.css';
import Img1 from 'assets/images/tmp/breeds/image1.png';
import Img2 from 'assets/images/tmp/breeds/image2.png';
import Img3 from 'assets/images/tmp/breeds/image3.png';
import Img4 from 'assets/images/tmp/breeds/image4.png';
import Img5 from 'assets/images/tmp/breeds/image5.png';
import Img6 from 'assets/images/tmp/breeds/image6.png';
import Img7 from 'assets/images/tmp/breeds/image7.png';
import Img8 from 'assets/images/tmp/breeds/image8.png';
import Img9 from 'assets/images/tmp/breeds/image4.png';
import Img10 from 'assets/images/tmp/breeds/image2.png';
import { IconBtn } from 'components/IconBtn/IconBtn';
import { Badge } from 'components/Badge/Badge';
import { Link } from 'react-router-dom';

type PhotoGridProps = {
    items?: PhotoGridItem[],
    hoverType?: 'title' | 'heart',
    className?: string,
}

type PhotoGridItem = {
    id: string,
    url: string,
    name: string,
    link?: string, 
}

const tmpItems: PhotoGridItem[] = [
    { id: 'Img1', url: Img1, name: 'Img1' },
    { id: 'Img2', url: Img2, name: 'Abyssinian' },
    { id: 'Img3', url: Img3, name: 'Img3' },
    { id: 'Img4', url: Img4, name: 'Img4' },
    { id: 'Img5', url: Img5, name: 'Img5' },
    { id: 'Img6', url: Img6, name: 'Img6' },
    { id: 'Img7', url: Img7, name: 'Img7' },
    { id: 'Img8', url: Img8, name: 'Img8' },
    { id: 'Img9', url: Img9, name: 'Img9' },
    { id: 'Img10', url: Img10, name: 'Img10' },
]; 

export const PhotoGrid: React.FC<PhotoGridProps> = ({ 
    items = tmpItems,  
    className, 
    hoverType = 'title' 
}) => {
    
    return <div className={`PhotoGrid ${className}`}>
        {items.map(item => 
            (<PhotoGridItem key={item.id} item={item} hoverType={hoverType} />))}
    </div>
}


type PhotoGridItemProps = {
    item: PhotoGridItem,
    hoverType: 'title' | 'heart',
}

const PhotoGridItem: React.FC<PhotoGridItemProps> = ({ item, hoverType }) => {
    const { id, url, name, link } = item;

    const hover = (<div className="PhotoGridItemHover">
            {hoverType === 'title' ?
                <Badge className='w-full m-2.5 self-end' title={name} /> 
                : <IconBtn size='sm' type='heart' />
            }
        </div>);

    return <div className='PhotoGridItem'>
                {link ? 
                    <Link to={link}>{hover}</Link>  
                    : hover
                }
                <img src={url} alt={name} />
            </div>
}
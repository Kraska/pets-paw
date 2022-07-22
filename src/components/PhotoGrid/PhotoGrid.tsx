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

type PhotoGridProps = {
    hoverType?: 'title' | 'heart',
    className?: string,
}

type ImgEntity = {
    src: string,
    title: string,
}

const imgList: ImgEntity[] = [
    { src: Img1, title: 'Img1' },
    { src: Img2, title: 'Abyssinian' },
    { src: Img3, title: 'Img3' },
    { src: Img4, title: 'Img4' },
    { src: Img5, title: 'Img5' },
    { src: Img6, title: 'Img6' },
    { src: Img7, title: 'Img7' },
    { src: Img8, title: 'Img8' },
    { src: Img9, title: 'Img9' },
    { src: Img10, title: 'Img10' },
]; 

export const PhotoGrid: React.FC<PhotoGridProps> = ({ className, hoverType = 'title' }) => {
    
    return <div className={`PhotoGrid ${className}`}>
        {imgList.map(({ src, title }) => (
            <div className='PhotoGridItem' key={title}>
                <div className="PhotoGridItemHover">
                    {hoverType === 'title' ?
                        <Badge className='w-full m-2.5 self-end' title={title} /> 
                        : <IconBtn size='sm' type='heart' />
                    }
                </div>
                <img src={src} alt={title} />
            </div>
        ))}
    </div>
}
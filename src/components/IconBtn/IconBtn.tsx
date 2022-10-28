import { MouseEventHandler, ReactElement } from "react"
import { ReactComponent as Smile } from 'assets/icons/smile.svg';
import { ReactComponent as Sad } from 'assets/icons/sad.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Back } from 'assets/icons/back.svg';
import { ReactComponent as Search } from 'assets/icons/Search.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Update } from 'assets/icons/update.svg';
import { ReactComponent as HeartFull } from 'assets/icons/heart-full.svg';
import './IconBtn.css';

export type IconType = 'smile' | 'sad' | 'heart' | 'back' | 'search' | 'close' | 'heart-full' | 'update';
type IconSize = 'sm' | 'md' | 'lg';
type IconColor = 'white' | 'pink-light' | 'pink' | 'green' | 'yellow';

type IconBtnProps = {
    type: IconType,
    size?: IconSize,
    color?: IconColor,
    className?: string,
    onClick?: MouseEventHandler,
}

const iconMap: Record<IconType, ReactElement> = {
    smile: <Smile />,
    sad: <Sad />,
    heart: <Heart />,
    back: <Back />,
    search: <Search />,
    close: <Close />,
    'heart-full': <HeartFull />,
    update: <Update />
}

const sizeClassMap: Record<IconSize, string> = {
    sm: 'IconBtn-sm',
    md: 'IconBtn-md',
    lg: 'IconBtn-lg',
}

const colorClassMap: Record<IconColor, string> = {
    white: 'IconBtn-white',
    'pink-light': 'IconBtn-pink-light',
    pink: 'IconBtn-pink',
    green: 'IconBtn-green',
    yellow: 'IconBtn-yellow',
}

export const IconBtn: React.FC<IconBtnProps> = ({ 
    type, size = 'md', 
    color = 'white', 
    className,
    onClick
}) => {
    className = `IconBtn ${sizeClassMap[size]} ${colorClassMap[color]} ${className}`;
    return <button 
            className={className}
            onClick={onClick} 
            type="submit"
            >
                {iconMap[type]}
            </button>;
}


{/* <div className="m-7 grid gap-4 grid-cols-4">
        <IconBtn type='smile' />
        <IconBtn type='sad' />
        <IconBtn type='heart' />
        <IconBtn type='back' />
        <IconBtn type='search' />
        <IconBtn type='close' />
        <IconBtn type='heart-full' />
    </div>

    <h1>Size = sm</h1>
    <div className="m-7 grid gap-4 grid-cols-4">
        <IconBtn size='sm' type='smile' />
        <IconBtn size='sm' type='sad' />
        <IconBtn size='sm' type='heart' />
        <IconBtn size='sm' type='back' />
        <IconBtn size='sm' type='search' />
        <IconBtn size='sm' type='close' />
        <IconBtn size='sm' type='heart-full' />
    </div> */}

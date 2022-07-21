import './Badge.css';


type BadgeColor = 'white' | 'pink' | 'pink-light'
type BadgeSize = 'sm' | 'md' | 'lg'

type BadgeProps = {
    title: string,
    className?: string,
    color?: BadgeColor,
    size?: BadgeSize,
}

const colorClassMap: Record<BadgeColor, string> = {
    white: 'Badge-white',
    pink: 'Badge-pink',
    'pink-light': 'Badge-pink-light',
}

const sizeClassMap: Record<BadgeSize, string> = {
    sm: 'Badge-sm',
    md: 'Badge-md',
    lg: 'Badge-lg',
}


export const Badge:React.FC<BadgeProps> = ({ title, className, color = 'white', size = 'md' }) => {
    className = `Badge ${className} ${colorClassMap[color]} ${sizeClassMap[size]}`;
    return <div className={className}>{title}</div>
}
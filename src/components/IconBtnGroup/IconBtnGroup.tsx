import './IconBtnGroup.css';


type IconBtnGroupProps = {
    children?: React.ReactNode,
    className?: string,
}

export const IconBtnGroup: React.FC<IconBtnGroupProps> = ({ children, className }) => {
    return <div className={`${className} IconBtnGroup flex`}>{children}</div>
}
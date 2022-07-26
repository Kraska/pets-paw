import { ReactComponent as SortUp } from 'assets/icons/sort-up.svg';
import { ReactComponent as SortDown } from 'assets/icons/sort-down.svg';
import './SortBtn.css';

export enum SORT_TYPES {
    up = 'up',
    down = 'down',
};
export type SortBtnType = `${SORT_TYPES}`;

type SortBtnProps = {
    type: SortBtnType,
    isActive?: boolean,
    onClick?: () => void,
    className?: string,
}

export const SortBtn:React.FC<SortBtnProps> = ({ 
    type, 
    isActive = false, 
    onClick = () => {}, 
    className = '' 
}) => {
    className = `SortBtn ${className} ${isActive && 'SortBtn-active'}`
    return <button className={className} onClick={onClick}>
        {type === 'up' ? <SortUp /> : <SortDown />}
    </button>
}
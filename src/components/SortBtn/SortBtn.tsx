import { ReactComponent as SortUp } from 'assets/icons/sort-up.svg';
import { ReactComponent as SortDown } from 'assets/icons/sort-down.svg';
import './SortBtn.css';

type SortBtnProps = {
    type: 'up' | 'down',
    className?: string,
}

export const SortBtn:React.FC<SortBtnProps> = ({ type, className = '' }) => {
    return <button className={`SortBtn ${className}`} type="submit">
        {type === 'up' ? <SortUp /> : <SortDown />}
    </button>
}
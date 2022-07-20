import './SearchInput.css';
// import { ReactComponent as Search } from 'assets/icons/Search.svg';
import { IconBtn } from 'components/IconBtn/IconBtn';

type SearchInputProps = {
    plaseholder?: string,
    className?: string,
}

export const SearchInput: React.FC<SearchInputProps> = ({ plaseholder = 'Search...', className }) => {
    return <form className={`SearchInput ${className}`}>
        <div className="relative">
            <input 
                type="search" 
                placeholder={plaseholder}
                />
            <IconBtn size='sm' color='pink-light' type='search' />
        </div>
    </form>
}

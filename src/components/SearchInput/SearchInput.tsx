import './SearchInput.css';
import { IconBtn } from 'components/IconBtn/IconBtn';

type SearchInputProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
    plaseholder?: string,
    className?: string,
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
    value, 
    onChange,
    plaseholder = 'Search...', 
    className 
}) => {
    return <form className={`SearchInput ${className}`}>
        <div className="relative">
            <input 
                value={value}
                type="search" 
                onChange={onChange}
                placeholder={plaseholder}
                />
            <IconBtn size='sm' color='pink-light' type='search' />
        </div>
    </form>
}

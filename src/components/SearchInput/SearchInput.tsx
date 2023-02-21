import './SearchInput.css';
import { IconBtn } from 'components/IconBtn/IconBtn';
import { useState } from 'react';

type SearchInputProps = {
    initValue: string,
    onSearch: (text: string) => void,
    plaseholder?: string,
    className?: string,
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
    initValue, 
    onSearch,
    plaseholder = 'Search...', 
    className 
}) => {


    const [value, setValue] = useState(initValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault();
        onSearch(value);
    }

    return <form className={`SearchInput ${className}`} onSubmit={onSubmit}>
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

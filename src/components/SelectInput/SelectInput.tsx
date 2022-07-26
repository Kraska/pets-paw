import { ChangeEventHandler } from 'react';
import './SelectInput.css';


export type SelectInputOption = {
    key: string,
    value: string,
    disabled?: boolean,
}

type SelectInputColor = 'white' | 'grey'

type SelectInputProps = {
    name: string,
    items: SelectInputOption[],
    value?: string,
    onChange?:ChangeEventHandler<HTMLSelectElement>,
    className?: string,
    color?: SelectInputColor,
    label?: string,
}

const colorClassMap: Record<SelectInputColor, string> = {
    white: 'SelectInput-white',
    grey: 'SelectInput-grey',
}

export const SelectInput: React.FC<SelectInputProps> = 
    ({ name, items, value, onChange, className, color = 'white', label }) => {

    return <div className={`SelectInput ${className} ${colorClassMap[color]}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <div>
            <select name={name} value={value} onChange={onChange}>
                {items.map(({ key, value, disabled = false }) => (
                    <option disabled={disabled} key={key} value={key}>{value}</option>
                ))}
            </select>
        </div>
    </div>
}
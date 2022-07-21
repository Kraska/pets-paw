import './SelectInput.css';


export type SelectInputOption = {
    key: string,
    value: string,
}

type SelectInputColor = 'white' | 'grey'

type SelectInputProps = {
    name: string,
    items: SelectInputOption[],
    className?: string,
    color?: SelectInputColor,
    label?: string,
}

const colorClassMap: Record<SelectInputColor, string> = {
    white: 'SelectInput-white',
    grey: 'SelectInput-grey',
}

export const SelectInput: React.FC<SelectInputProps> = 
    ({ name, items, className, color = 'white', label }) => {

    return <div className={`SelectInput ${className} ${colorClassMap[color]}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <div>
            <select name={name}>
                {items.map(({ key, value }) => (<option key={key}>{value}</option>))}
            </select>
        </div>
    </div>
}
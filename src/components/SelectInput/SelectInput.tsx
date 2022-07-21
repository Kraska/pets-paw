import './SelectInput.css';


export type SelectInputOption = {
    key: string,
    value: string,
}

type SelectInputColor = 'white' | 'grey'

type SelectInputProps = {
    items: SelectInputOption[],
    className?: string,
    color?: SelectInputColor,
}

const colorClassMap: Record<SelectInputColor, string> = {
    white: 'SelectInput-white',
    grey: 'SelectInput-grey',
}

export const SelectInput: React.FC<SelectInputProps> = ({ items, className, color = 'white' }) => {

    return <div className={`SelectInput ${className} ${colorClassMap[color]}`}>
        <select>
            {items.map(({ key, value }) => (<option key={key}>{value}</option>))}
        </select>
    </div>
}
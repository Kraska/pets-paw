import React from 'react';
import './Button.css';
import { ReactComponent as Upload } from 'assets/icons/upload.svg';
import { ReactComponent as Prev } from 'assets/icons/arrow-left.svg';
import { ReactComponent as Next } from 'assets/icons/arrow-right.svg';


type ButtonCollor = 'white' | 'pink' | 'pink-light' | 'grey';

type ButtonProps = {
    title: string,
    iconBefore?: React.ReactNode,
    iconAfter?: React.ReactNode,
    color: ButtonCollor,
    className?: string,
}

const colorClassMap: Record<ButtonCollor, string> = {
    white: 'Button-white',
    'pink-light': 'Button-pink-light',
    pink: 'Button-pink',
    grey: 'Button-grey',
}

export const Button: React.FC<ButtonProps> = ({ title, iconBefore, iconAfter, color, className }) => {
    className = `Button ${className} ${colorClassMap[color]}`
    return <button className={className}>
        {iconBefore}
        <div className='mx-2'>{title}</div>
        {iconAfter}
    </button>
}


type CustomButtonProps = {
    color: ButtonCollor,
    className?: string,
}

export const UploadButton: React.FC<CustomButtonProps> = ({ color, className }) => {
    return <Button title='UPLOAD' iconBefore={<Upload />} className={className} color={color} />
}

export const PrevButton: React.FC<CustomButtonProps> = ({ color, className }) => {
    return <Button title='PREV' iconBefore={<Prev />} className={className} color={color} />
}

export const NextButton: React.FC<CustomButtonProps> = ({ color, className }) => {
    return <Button title='NEXT' iconAfter={<Next />} className={className} color={color} />
}

{/* <div className="grid grid-cols-2 gap-4 mt-5">
    <PrevButton className="max-w-fit" color='pink-light' />
    <NextButton className="max-w-fit" color='pink-light' />

    <PrevButton className="max-w-fit" color='grey' />
    <NextButton className="max-w-fit" color='grey' />

    <PrevButton className="max-w-fit" color='pink' />
    <NextButton className="max-w-fit" color='pink' />
</div> */}
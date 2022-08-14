import { IBreed } from "models/IBreed";
import React from "react";
import './BreedInfo.css';


type BreedInfoProps = {
    breed: IBreed,
    className?: string,
}

export const BreedInfo: React.FC<BreedInfoProps> = ({ breed, className = '' }) => {

    const { url, name, temperament, origin, weight, life_span } = breed;
    return <div className={`BreedInfo ${className}`}>
        <img src={url} alt={name} />
        <div>
            <div className="BreedInfoParams">
                <div className="BreedInfoName">{name}</div>
                <div>
                    <div className="BreedInfoParam">
                        <div><b>Temperament:</b></div>
                        <div>{temperament}</div>
                    </div>
                </div>
                <div>
                    <div className="BreedInfoParam"><b>Origin:</b> {origin}</div>
                    <div className="BreedInfoParam"><b>Weight:</b> {weight} kgs</div>
                    <div className="BreedInfoParam"><b>Life span:</b> {life_span}</div>
                </div>
            </div>
        </div>
    </div>
}
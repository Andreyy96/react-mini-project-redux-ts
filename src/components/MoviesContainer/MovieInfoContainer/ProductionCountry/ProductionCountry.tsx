import {FC} from 'react';
import {IProdCountry} from "../../../../interfaces";

interface IProps {
    country: IProdCountry
}
const ProductionCountry:FC<IProps> = ({country}) => {

    const {name} = country

    return (
        <p>{name}</p>
    );
};

export {ProductionCountry};
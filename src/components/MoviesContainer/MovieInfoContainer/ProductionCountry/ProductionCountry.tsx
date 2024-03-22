import {FC} from 'react';

import {IProdCountry} from "../../../../interfaces";

interface IProps {
    country: IProdCountry
    index: number
    count: number
}
const ProductionCountry:FC<IProps> = ({country, index, count}) => {

    const {name} = country

    return (
        <p>{name}{count !== index && ","}</p>
    );
};

export {ProductionCountry};
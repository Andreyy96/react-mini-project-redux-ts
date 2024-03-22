import {FC} from 'react';

import {IProdCompany} from "../../../../interfaces";

interface IProps {
    company: IProdCompany
    index: number
    count: number
}
const ProductionCompany:FC<IProps> = ({company, count, index}) => {

    const {name, origin_country} = company

    return (
        <p>{name}({origin_country}) {count !== index && ","}</p>
    );
};

export {ProductionCompany};
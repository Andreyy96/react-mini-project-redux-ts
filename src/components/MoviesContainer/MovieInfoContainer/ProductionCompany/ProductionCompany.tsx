import {FC} from 'react';
import {IProdCompany} from "../../../../interfaces";

interface IProps {
    company: IProdCompany
}
const ProductionCompany:FC<IProps> = ({company}) => {

    const {name, origin_country} = company

    return (
        <p>{name} ({origin_country})</p>
    );
};

export {ProductionCompany};
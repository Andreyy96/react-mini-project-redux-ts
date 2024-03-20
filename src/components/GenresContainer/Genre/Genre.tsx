import {FC} from 'react';
import {IGenre} from "../../../interfaces";
import {NavLink} from "react-router-dom";
import css from "./Genre.module.css"
import {useAppSelector} from "../../../hooks";


interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {

    const {id,name} = genre
    const {switcherState} = useAppSelector(state => state.header)

    return (
        <div>
            <NavLink className={!switcherState ? css.switchOff : css.switchOn} to={`/movies?genre_id=${id}`}><p>{name}</p></NavLink>
        </div>
    );
};

export {Genre};
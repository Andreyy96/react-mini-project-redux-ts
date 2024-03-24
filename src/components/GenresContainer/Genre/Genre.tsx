import {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import {useAppSelector} from "../../../hooks";
import css from "./Genre.module.css"

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {

    const {id,name} = genre
    const {switcherState} = useAppSelector(state => state.header)

    return (
        <div className={css.genre}>
            <NavLink className={switcherState && css.switchOn} to={`/movies?genre_id=${id}`}><p>{name}</p></NavLink>
        </div>
    );
};

export {Genre};
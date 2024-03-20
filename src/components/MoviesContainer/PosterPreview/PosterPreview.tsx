import {FC} from 'react';
import css from "./PosterPreview.module.css"

interface IProps {
    poster_path: string
}
const PosterPreview:FC<IProps> = ({poster_path}) => {

    const url = "https://Image.tmdb.org/t/p/w500"

    return (
        <img className={css.poster} src={url + poster_path} alt={poster_path}/>
    );
};

export {PosterPreview};
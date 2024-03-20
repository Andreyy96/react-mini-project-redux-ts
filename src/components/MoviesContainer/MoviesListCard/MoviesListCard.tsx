import {FC} from 'react';
import {IMovie} from "../../../interfaces";

import {PosterPreview} from "../PosterPreview";
import {useNavigate} from "react-router-dom";
import css from "./MoviesListCard.module.css"
import {Badge} from "@mui/material";
import {useAppDispatch} from "../../../hooks";
import {movieActions} from "../../../store";

interface IProps {
    movie: IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {

    const {id, title, vote_average, poster_path} = movie
    const dispatch = useAppDispatch()
    const navigate =useNavigate()

    const navigateMovieInfo = async (): Promise<void> => {
       await dispatch(movieActions.getById({id}))
        navigate(`/movie/${id}`)
    }

    return (
        <div className={css.movies_list_card} onClick={navigateMovieInfo}>
            <Badge badgeContent={vote_average.toFixed(1)} color="primary">
                <PosterPreview poster_path={poster_path}/>
            </Badge>
            <h4>{title}</h4>
        </div>
    );
};

export {MoviesListCard};
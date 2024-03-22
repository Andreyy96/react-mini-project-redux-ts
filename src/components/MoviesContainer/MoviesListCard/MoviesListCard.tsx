import {FC} from 'react';
import {IMovie} from "../../../interfaces";
import {useNavigate} from "react-router-dom";
import {PosterPreview} from "../PosterPreview";
import {Badge} from "@mui/material";

import {useAppDispatch} from "../../../hooks";
import {movieActions} from "../../../store";
import css from "./MoviesListCard.module.css"
import {StartsRatingMovieCard} from "../StartsRatingMovieCard";

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
            <StartsRatingMovieCard vote_average={vote_average}/>
            <h4>{title}</h4>
        </div>
    );
};

export {MoviesListCard};
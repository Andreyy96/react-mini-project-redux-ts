import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";

import {movieActions} from "../../../store";
import {MoviesListCard} from "../MoviesListCard";
import {usePageQuery} from "../../../hooks/usePageQuery";
import {useSearchParams} from "react-router-dom";
import {MoviesPagination} from "../MoviesPagination";
import css from "./MoviesList.module.css"


const MoviesList = () => {

    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const {page} = usePageQuery()

    const [searchParams] = useSearchParams()
    const id = searchParams.get("genre_id")
    const query = searchParams.get("query")

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getByGenreId({id, page}))
        }
        else if (query) {
            dispatch(movieActions.getByWord({query, page}))
        }
        else {
            dispatch(movieActions.getAll({page}))
        }
    }, [dispatch, page, id, query]);

    return (
        <div className={css.main_div}>
            <div className={css.movies_list}>
                {movies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
            </div>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesList}
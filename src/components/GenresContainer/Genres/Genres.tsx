import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";
import {genreActions} from "../../../store";
import {Genre} from "../Genre";
import css from "./Genres.module.css"

const Genres = () => {

    const {genresRes} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.genres_list}>
            {genresRes && genresRes.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres}
import {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../store";
import {MovieInfo} from "../components";

const MovieInfoResponse = () => {

    const {id} = useParams<string>()
    const dispatch = useAppDispatch()
    const {movieInfo} = useAppSelector(state => state.movies)

    useEffect(() => {
        const getMovie = async ():Promise<void> => {
            await dispatch(movieActions.getById({id: +id}))
        }
        getMovie()
    }, [dispatch, id]);
    return (
        <>
            {movieInfo && <MovieInfo movieInfo={movieInfo}/>}
        </>
    );
};

export {MovieInfoResponse};
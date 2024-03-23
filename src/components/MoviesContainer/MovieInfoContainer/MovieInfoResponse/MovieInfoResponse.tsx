import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Box, CircularProgress} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {movieActions} from "../../../../store";
import {MovieInfo} from "../MovieInfo";

const MovieInfoResponse = () => {

    const {id} = useParams<string>()
    const dispatch = useAppDispatch()
    const {movieInfo} = useAppSelector(state => state.movies)
    const {isLoading} = useAppSelector(state => state.loading)

    useEffect(() => {
        dispatch(movieActions.getById({id: +id}))
    }, [dispatch, id]);

    return (
        <>
            {
                !isLoading && movieInfo ?
                    <MovieInfo movieInfo={movieInfo}/>
                    :
                    <Box sx={{ display: 'flex'  }}>
                        <CircularProgress />
                    </Box>
            }
        </>
    );
};

export {MovieInfoResponse};
import {useAppSelector} from "../hooks";
import {MovieInfo} from "../components";

const MovieInfoPage = () => {

    const {movieInfo} = useAppSelector(state => state.movies)

    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfoPage}
import {Genres, MoviesList} from "../components";
import {useAppSelector} from "../hooks";



const MoviesPage = () => {

    const {flag} = useAppSelector(state => state.header)


    return (
        <div>
            {!flag && <Genres/>}
            <MoviesList/>
        </div>
    );
};

export {MoviesPage}
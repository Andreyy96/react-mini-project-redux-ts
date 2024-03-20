import {MoviesList} from "../components";
import {useAppSelector} from "../hooks";
import {Genres} from "../components/GenresContainer";


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
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts";
import {GenresPage, MovieInfoPage, MoviesPage} from "./pages";



const router = createBrowserRouter([
    {path: "", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"movies"}/>},
            {path: "movies", element: <MoviesPage/>},
            {path: "movies/:id", element: <MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>}
        ]}
])

export {router}
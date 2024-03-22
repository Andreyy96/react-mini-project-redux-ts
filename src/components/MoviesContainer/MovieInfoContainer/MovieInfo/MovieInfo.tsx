import {FC} from 'react';
import {Stack} from "@mui/material";

import {IMovie, IVideo} from "../../../../interfaces";
import {PosterPreview} from "../../PosterPreview";
import {ProductionCompany} from "../ProductionCompany";
import {ProductionCountry} from "../ProductionCountry";
import {GenreBadge} from "../GenreBadge";
import {StarsRating} from "../StarsRating";
import css from "./MovieInfo.module.css"
import {MovieTrailer} from "../MovieTrailer";
import {useNavigate} from "react-router-dom";

interface IProps {
    movieInfo: IMovie
}
const MovieInfo:FC<IProps> = ({movieInfo}) => {

    const {title,original_title, poster_path, vote_average, overview,
        release_date, genres, production_companies, production_countries, runtime, videos: {results}} = movieInfo

    const navigate = useNavigate()

    const findTrailer: IVideo = results.find(video => video.type === "Trailer")
    const findTeaser: IVideo = results.find(video => video.type === "Teaser")

    return (
        <div className={css.main}>
            <button onClick={() => navigate(-1)}>Back</button>
            <div className={css.title}>
                <h2>{title} ({original_title})</h2>
            </div>
            <div className={css.poster}>
                <PosterPreview poster_path={poster_path}/>
            </div>
            <div className={css.details}>
                <p>Release date: {release_date}</p>
                <div className={css.genres_container}>
                    <Stack spacing={9} direction={"row"}>
                        {genres.map(genre => <GenreBadge genre={genre} key={genre.id}/>)}
                    </Stack>
                </div>
                <Stack className={css.companies_container} direction={"row"}>
                    <p>Companies:</p> {production_companies.map((company, index) => <ProductionCompany company={company} index={index} count={production_companies.length - 1} key={company.id}/>)}
                </Stack>
                <Stack className={css.countries_container} direction={"row"}>
                    <p>Countries:</p> {production_countries.map((country, index) => <ProductionCountry country={country} index={index} count={production_countries.length - 1} key={country.iso_3166_1}/>)}
                </Stack>
                <p>Runtime: {runtime}min</p>
                <p>Rating:</p> <StarsRating vote_average={vote_average}/>
            </div>
            <div className={css.overview}>
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
            {(findTrailer || findTeaser) && <MovieTrailer trailer_key={findTrailer ? findTrailer.key : findTeaser.key} />}
        </div>
    );
};

export {MovieInfo};
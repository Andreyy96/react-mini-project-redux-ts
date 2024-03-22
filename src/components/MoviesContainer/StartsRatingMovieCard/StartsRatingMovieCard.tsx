import {FC} from 'react';
import {Rating} from "@mui/material";

interface IProps {
    vote_average: number
}

const StartsRatingMovieCard:FC<IProps> = ({vote_average}) => {

    return (
        <div>
            <Rating name="read-only" defaultValue={vote_average} max={10} precision={0.1} readOnly size={"small"} />
        </div>
    );
};

export {StartsRatingMovieCard};
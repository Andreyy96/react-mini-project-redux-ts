import {FC} from 'react';
import {Rating} from "@mui/material";

interface IProps {
    vote_average: number
}
const StarsRating:FC<IProps> = ({vote_average}) => {

    return (
        <div>
            <Rating name="read-only" defaultValue={vote_average} max={10} precision={0.1} readOnly size={"medium"} />
        </div>
    );
};

export {StarsRating};
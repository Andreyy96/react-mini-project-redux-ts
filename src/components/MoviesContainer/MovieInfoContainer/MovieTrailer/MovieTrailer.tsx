import {FC} from 'react';
import YouTube from "react-youtube";

interface IProps {
    trailer_key: string
}
const MovieTrailer:FC<IProps> = ({trailer_key}) => {

    return (
        <div>
            <YouTube videoId={trailer_key}/>
        </div>
    );
};

export {MovieTrailer};
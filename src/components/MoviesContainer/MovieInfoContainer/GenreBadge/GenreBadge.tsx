import {FC} from 'react';
import {Badge} from "@mui/material";
import {NavLink} from "react-router-dom";
import {IGenre} from "../../../../interfaces";

interface IProps {
    genre: IGenre
}
const GenreBadge:FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <Badge badgeContent={<NavLink to={`/movies?id=${id}`}>{name}</NavLink>} color={"primary"}></Badge>
    );
};

export {GenreBadge};
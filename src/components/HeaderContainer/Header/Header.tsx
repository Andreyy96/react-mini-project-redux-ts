import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

import {useAppDispatch} from "../../../hooks";
import {headerActions} from "../../../store";
import {ThemesSwitcher} from "../ThemesSwitcher";
import {UserInfo} from "../UserInfo";
import css from "./Header.module.css"

const Header = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={css.Header}>
            <div><h2>MovieDB</h2></div>
            <div className={css.navigate_container}>
                <NavLink to={"movies"}>Movies</NavLink>
                <NavLink to={"genres"}>Genres</NavLink>
            </div>
            <div className={css.button_search}>
                <Button variant="text" color={"inherit"} onClick={() => dispatch(headerActions.setFlag())}>Search</Button>
            </div>
            <ThemesSwitcher/>
            <UserInfo/>
        </div>
    );
};

export {Header}
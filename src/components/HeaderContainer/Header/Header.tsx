import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../hooks";
import {headerActions} from "../../../store";
import css from "./Header.module.css"
import {Button} from "@mui/material";
import {ThemesSwitcher} from "../ThemesSwitcher";

const Header = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={css.Header}>
            <div><h3>MovieDB</h3></div>
            <div className={css.navigate_container}>
                <NavLink to={"movies"}>Movies</NavLink>
                <NavLink to={"genres"}>Genres</NavLink>
            </div>
            <div className={css.button_search}>
                <Button variant="text" color={"inherit"} onClick={() => dispatch(headerActions.setFlag())}>Search</Button>
            </div>
            <ThemesSwitcher/>
        </div>
    );
};

export {Header}
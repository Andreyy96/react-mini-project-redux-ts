import {FormControlLabel, Switch} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {headerActions} from "../../../store";

const ThemesSwitcher = () => {

    const {switcherState} = useAppSelector(state => state.header)
    const dispatch = useAppDispatch()

    const changeThemes: () => void = () => {
        dispatch(headerActions.setSwitcherState())
    }

    if (switcherState) {
        document.body.classList.add("night")
    }
    else {
        document.body.classList.remove("night")
    }

    return (
        <FormControlLabel
            value="Themes"
            control={<Switch checked={switcherState} onChange={changeThemes} color="primary" />}
            label="Themes"
            labelPlacement="start"
        />
    );
};

export {ThemesSwitcher}
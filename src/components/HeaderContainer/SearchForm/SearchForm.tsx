import {InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../../hooks";
import {headerActions} from "../../../store";
import css from "./SearchForm.module.css"

const SearchForm = () => {

    const {register, handleSubmit} = useForm<{word: string}>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const searchByWord: SubmitHandler<{word: string}> = (query) => {
        dispatch(headerActions.setFlag())
        navigate(`/movies?query=${query.word}`)
    }

    return (
         <div className={css.search_div}>
                 <form onSubmit={handleSubmit(searchByWord)}>
                     <InputBase
                         className={css.searchField}
                         size={"small"}
                         type={"text"}
                         id="outlined-textarea"
                         placeholder="Movie name"
                         required
                         {...register("word")}
                     />
                     <button><SearchIcon/></button>
                 </form>
         </div>
    );
};

export {SearchForm}
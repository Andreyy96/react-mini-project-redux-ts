import {TextField} from "@mui/material";
import {useAppDispatch} from "../../../hooks";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {headerActions} from "../../../store";
import css from "./SearchForm.module.css"



const SearchForm = () => {

    const {reset, register, handleSubmit} = useForm<{word: string}>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const search: SubmitHandler<{word: string}> = (query) => {
        dispatch(headerActions.setFlag())
        navigate(`/movies?query=${query.word}`)
        reset()
    }

    return (
         <div className={css.search_div}>
             <form onSubmit={handleSubmit(search)}>
                 <TextField
                     className={css.searchField}
                     size={"small"}
                     type={"text"}
                     id="outlined-textarea"
                     label="Search"
                     placeholder="Movie namenpm"
                     required

                     {...register("word")}
                 />
             </form>
        </div>
    );
};

export {SearchForm}
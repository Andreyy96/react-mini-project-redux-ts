import {Pagination} from "@mui/material";

import {useAppSelector, usePageQuery} from "../../../hooks";
import css from "./MoviesPagination.module.css"

const MoviesPagination = () => {

    const {total_pages} = useAppSelector(state => state.movies)
    const {switcherState} = useAppSelector(state => state.header)
    const {page, handleChange} = usePageQuery()
    let limit_pages

    if (total_pages >= 500 && total_pages) {
        limit_pages = 500
    }
    else {
        limit_pages = total_pages
    }

    return (
        <div className={css.pagination_div}>
            <Pagination
                className={!switcherState ? css.pagination : css.paginationBlack}
                count={limit_pages}
                page={page ? +page : 1}
                onChange={handleChange}
                size={"medium"}
                showFirstButton
                showLastButton
            />
        </div>
    );
};

export {MoviesPagination};
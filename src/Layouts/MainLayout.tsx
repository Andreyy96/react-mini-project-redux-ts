import {Outlet} from "react-router-dom";
import {Header, SearchForm} from "../components";
import {useAppSelector} from "../hooks";


const MainLayout = () => {
    const {flag} = useAppSelector(state => state.header)

    return (
        <div>
            <Header/>
            {flag && <SearchForm/>}
            <Outlet/>
        </div>
    );
};

export {MainLayout}
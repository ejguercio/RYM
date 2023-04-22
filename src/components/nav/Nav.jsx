import { NavLink } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import css from "./Nav.module.css"

const Nav = ({ onSearch }) => {

    return (
        <div className={css.contenedor}>
            <NavLink to="/home">
                <button>HOME</button>
            </NavLink>
            <SearchBar onSearch={onSearch} />
            <NavLink to="/about">
                <button>ABOUT</button>
            </NavLink>

        </div>
    )
};

export default Nav;
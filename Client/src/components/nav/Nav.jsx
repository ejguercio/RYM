import { NavLink } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import css from "./Nav.module.css"

const Nav = ({ onSearch }) => {

    return (
        <div className={css.contenedor}>
            <NavLink to="/home">
                <button className={css.botonBarra}>HOME</button>
            </NavLink>
            <NavLink to="/favorites">
                <button className={css.botonBarra}>FAVORITES</button>
            </NavLink>
            <NavLink to="/about">
                <button className={css.botonBarra}>ABOUT</button>
            </NavLink>
            <NavLink to="/">
                <button className={css.botonBarra}>LOG-OUT</button>
            </NavLink>
            <SearchBar onSearch={onSearch} />

        </div>
    )
};

export default Nav;
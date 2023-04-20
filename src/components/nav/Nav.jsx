import SearchBar from "../search-bar/SearchBar";
import estilo from "./Nav.module.css"

const Nav = ({onSearch}) => {

    return (
        <div className={estilo.contenedor}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default Nav;
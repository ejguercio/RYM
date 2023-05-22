import { connect } from "react-redux";
import Card from '../card/Card';
import css from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ myFavorites, onClose }) => {

    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
    <div className={css.contenedor}>
        <div className={css.contenedorAllFiltros}>
            <h2 className={css.titulo}>FAVORITES</h2>
            <div className={css.contenedorFiltros}>
                <select onChange={handleOrder} className={css.nombreFiltros}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter} className={css.nombreFiltros}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div >
        </div>
        {myFavorites?.map(({ id, name, species, status, gender,origin, image}) => {
            return (
                <Card
                    key={id}// para uso interno de React, no la veremos
                    id={id}
                    name={name}
                    species={species}
                    status={status}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                    onClose={onClose}
                />
            )
        })
        }

    </div>)
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};
export default connect(
    mapStateToProps,
    null
)(Favorites);
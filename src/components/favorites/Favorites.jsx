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

    return (<div className={css.contenedor}>
        <div className={css.contenedorFiltros}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div >

        {
            myFavorites?.map(({ id, name, status, gender, image }) => {
                return (
                    <Card
                        key={id}// para uso interno de React, no la veremos
                        id={id}
                        name={name}
                        status={status}
                        gender={gender}
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
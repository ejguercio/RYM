import { connect } from "react-redux";
import Card from '../card/Card';
import css from "./Favorites.module.css";

const Favorites = ({ myFavorites, onClose}) => {

    return (<div className={css.contenedor}>
        {
            myFavorites?.map(({ id, name, status, image }) => {
                return (
                    <Card
                        key={id}// para uso interno de React, no la veremos
                        id={id}
                        name={name}
                        status={status}
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
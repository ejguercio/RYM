import css from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({ id, name, status, image, gender, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({ id, name, status, image, gender })
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={css.contenedor}>
         {
            isFav ? 
               (<h2>Es favorito</h2>)
             : (<button className={css.botonCerrar} onClick={() => onClose(id)}>X</button>)
         }
         <NavLink className={css.datos} to={`/detail/${id}`}>
            <h2 className={css.datos}>Nombre: {name}</h2>
         </NavLink>
         <h2 className={css.datos}>Estado: {status}</h2>
         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         <img className={css.imagenes} src={image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: ({ id, name, status, image, gender }) => dispatch(addFav({ id, name, status, image, gender })),
      removeFav: (id) => dispatch(removeFav(id))
   }
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

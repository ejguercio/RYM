import css from "./Card.module.css"
import { NavLink } from "react-router-dom";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={css.contenedor}>
         <button className={css.botonCerrar} onClick={() => onClose(id)}>X</button>
         <NavLink className={css.datos} to={`/detail/${id}`}>
            <h2 className={css.datos}>Nombre: {name}</h2>
         </NavLink>
         <h2 className={css.datos}>Estado: {status}</h2>
         <h2 className={css.datos}>Especie: {species}</h2>
         <h2 className={css.datos}>Genero: {gender}</h2>
         <h2 className={css.datosOrigen}>Origen: {origin}</h2>
         <img className={css.imagenes} src={image} alt='' />
      </div>
   );
}

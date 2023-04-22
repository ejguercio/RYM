import css from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={css.contenedor}>
         <input className={css.input}
            type='search'
            onChange={handleChange}
            value={id}
         />
         <button
            className={css.botonBarra}
            onClick={()=> onSearch(id)}//tengo que pasar id a onSearch como argumento pero uso cb para que no se ejecute la funcion apenas lea esa linea
         >Agregar</button>
      </div>
   );
}

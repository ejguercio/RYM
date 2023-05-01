import css from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };

   const handleKeysPress = (event) => {
      if (event.key === "Enter") {
         onSearch(id)
         setId("")
      }
   };

   return (
      <div className={css.contenedor}>
         <input className={css.input}
            type='search'
            value={id}
            onChange={handleChange}
            onKeyDown={handleKeysPress}
            placeholder="Search ID 1-826"
         />
         <button
            className={css.botonBarra}
            onClick={() => { onSearch(id); setId("") }}//tengo que pasar id a onSearch como argumento pero uso cb para que no se ejecute la funcion apenas lea esa linea
         >ADD</button>
      </div>
   );
}

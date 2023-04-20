import estilo from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={estilo.contenedor}>
         <input className={estilo.input}
            type='search'
            onChange={handleChange}
            value={id}
         />
         <button
            className={estilo.botonBarra}
            onClick={()=> onSearch(id)}//tengo que pasar id a onSearch como argumento pero uso cb para que no se ejecute la funcion apenas lea esa linea
         >Agregar</button>
      </div>
   );
}

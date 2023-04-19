import estilo from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   return (
      <div className={estilo.contenedor}>
         <input className={estilo.input} type='search' />
         <button className={estilo.botonBarra} onClick={onSearch}>Agregar</button> 
      </div>
   );
}

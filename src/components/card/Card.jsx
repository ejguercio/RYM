import estilo from "./Card.module.css"

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={estilo.contenedor}>
         <button className={estilo.botonCerrar} onClick={onClose}>X</button>
         <h2 className={estilo.datos}>Nombre: {name}</h2>
         <h2 className={estilo.datos}>Estado: {status}</h2>
         <h2 className={estilo.datos}>Especie: {species}</h2>
         <h2 className={estilo.datos}>Genero: {gender}</h2>
         <h2 className={estilo.datosOrigen}>Origen: {origin}</h2>
         <img className={estilo.imagenes} src={image} alt='' />
      </div>
   );
}

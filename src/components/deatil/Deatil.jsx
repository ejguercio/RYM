import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import css from "./Detail.module.css"

const Deatil = () => {
    const { detailId } = useParams()
    const [character, setCharacter] = useState([])
    

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={css.contenedor}>
            <div className={css.contenedorDatos}>
            <h1 className={css.datos}>DETALLES</h1>
            <h2 className={css.datos}>Nombre: {character.name}</h2>
            <h2 className={css.datos}>Estado: {character.status}</h2>
            <h2 className={css.datos}>Especie: {character.species}</h2>
            <h2 className={css.datos}>Genero: {character.gender}</h2>
            <h2 className={css.datosOrigen }>Origen: {character.origin?.name}</h2> 
            </div>
            <div>
            <img className={css.imagenes} src={character.image} alt='' />
            </div>
        </div>
    )
};
{
    /* en la linea donde obtenemos el orgin.name aplicamos un renderizado condicial 
    con "?" para asegurarnos de esperar a ya tener origin para obtener el name */
}
export default Deatil;
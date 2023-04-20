import Card from '../card/Card';
import estilo from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return (<div className={estilo.contenedor}>
      {
         characters.map(({ id, name, status, species, gender, origin, image }) => {
            return (
               <Card
                  key={id}// para uso interno de React, no la veremos
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
            )
         })
      }
   </div>);
}

import Card from '../card/Card';
import css from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return (<div className={css.contenedor}>
      {
         characters?.map(({ id, name, species, status, origin, image, gender }) => {
            return (
               <Card
                  key={id}// para uso interno de React, no la veremos
                  id={id}
                  name={name}
                  species={species}
                  status={status}
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

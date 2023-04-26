import Card from '../card/Card';
import css from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return (<div className={css.contenedor}>
      {
         characters?.map(({ id, name, status, image }) => {
            return (
               <Card
                  key={id}// para uso interno de React, no la veremos
                  id={id}
                  name={name}
                  status={status}
                  image={image}
                  onClose={onClose}
               />
            )
         })
      }
   </div>);
}


 
import { Props } from 'next/script'
import styles from './card.module.scss'
 
interface CardData{
  id : number,
  name : string,
  description : string,
  image : string,
}

export function Card(props : CardData) {
    return (
        <>

        <div className={styles.container}>
          <div className={styles.card}>
            <img src={props.image} alt="od"/>
            <div className={styles.card__content}>
              <h2>{props.name}</h2>
              <p>
                {props.description}
              </p>
              <button>ver mais</button>
            </div>
          </div>
        </div>
   
        
        </>

    )
}
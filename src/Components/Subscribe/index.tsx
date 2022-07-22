

import styles from './styles.module.scss';
 


export function Subscribe(){


    return(

        <>
        
        
        <div className={styles.subscribe}>
        <h2 className={styles.subscribe__title}>Mantenha-se informado</h2>
        <div className={styles.form}>
            <input type="email" className={styles.form__email} placeholder="Digite o seu email" />
            <button className={styles.form__button}>Enviar</button>
        </div>
      
         </div>

    </>
    );
    


}
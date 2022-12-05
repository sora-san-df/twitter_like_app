import styles from './LeftInfo.module.css'
import {FaPaintBrush} from 'react-icons/fa'
function LeftInfo(){
    return(
        <div className={styles.LeftInfo}>
           <FaPaintBrush className={styles.Logo}/>
            <ul className={styles.LeftInfo__options}>
                <li># Descubrir</li>
                <li># Configuracion</li>
                <li># Tus comisiones</li>
                <li># Tus Favoritos</li>
            </ul>
            <div className={styles.LogOut}>Log out</div>
        </div>
    )
}
export{LeftInfo}
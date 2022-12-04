import styles from './LeftInfo.module.css'
import {RiBrushFill} from 'react-icons/ri'
function LeftInfo(){
    return(
        <div className={styles.LeftInfo}>
           <RiBrushFill className={styles.Logo}/>
            <ul className={styles.LeftInfo__options}>
                <li># Descubrir</li>
                <li># Configuracion</li>
            </ul>
            <div className={styles.LogOut}>Log out</div>
        </div>
    )
}
export{LeftInfo}
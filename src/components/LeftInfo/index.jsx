import styles from './LeftInfo.module.css'
function LeftInfo(){
    return(
        <div className={styles.LeftInfo}>
            <h1>PostArt</h1>
            <ul>
                <li>Descubrir</li>
                <li>Configuracion</li>
                <li>Cuentas recomendadas</li>
            </ul>
            <p>Logout</p>
        </div>
    )
}
export{LeftInfo}
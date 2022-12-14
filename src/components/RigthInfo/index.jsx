import styles from './RigthInfo.module.css'
import {generateUsername} from 'unique-username-generator';
function RigthInfo(){

    const userName = generateUsername()
    return(
        <div className={styles.RigthInfo}>

            <h3 className={styles.RigthInfo_Title}> tus artista recomendados</h3>
            <ul className={styles.listContParent}>
                <li className={styles.listCont}>
                    <figure className={styles.ImgCont}>
                    <img src="https://picsum.photos/728/442" alt="ci" />
                    </figure>
                    <p>{userName}</p>
                </li>
                <li className={styles.listCont}>
                    <figure className={styles.ImgCont}>
                    <img src="https://picsum.photos/728/444" alt="ci" />
                    </figure>
                    <p>{userName}</p>
                </li>
                <li className={styles.listCont}>
                    <figure className={styles.ImgCont}>
                    <img src="https://picsum.photos/728/434" alt="ci" />
                    </figure>
                    <p>{userName}</p>
                </li>
                <li className={styles.listCont}>
                    <figure className={styles.ImgCont}>
                    <img src="https://picsum.photos/728/469" alt="ci" />
                    </figure>
                    <p>{userName}</p>
                </li>
                <li className={styles.listCont}>
                    <figure className={styles.ImgCont}>
                    <img src="https://picsum.photos/728/496" alt="ci" />
                    </figure>
                    <p>{userName}</p>
                </li>
                
            </ul>

            <div className={styles.ShowMore}>Show more</div>
        </div>
    )
}

export {RigthInfo}
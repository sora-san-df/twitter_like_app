import { PublishArt } from '../publishArt';
import styles from './TimeLine.module.css';
import {LeftInfo} from '../LeftInfo';
import {RigthInfo} from '../RigthInfo';
// import {PostArt} from '../PostArt'

function TimeLine (){

     return(


         <div className={styles.container}>
            <LeftInfo/>
            <RigthInfo/>
            <PublishArt/>
            {/* //linea divisora de publish art y los post  */}
            <div className={styles.divisorLine}></div>
            {/* <PostArt/> */}
        </div>

     )
}

export{TimeLine}

import { PublishArt } from '../publishArt';
import styles from './TimeLine.module.css';
import {LeftInfo} from '../LeftInfo';
import {RigthInfo} from '../RigthInfo';
import {PostArt} from '../PostArt';
import {useState} from 'react'
import {getFromLocalStorage} from '../../utilities/getFromLocalStorage';
import {MyPost} from '../MyPost'


 function TimeLine (){
    const [color, setColor]= useState(1)
    const clickMe = ()=>{
        //logica para cambiar los colores de los likes.
       if(color==0){
        document.getElementById('test').style.color='red'
        setColor(1)
       }else{

           document.getElementById('test').style.color='black'
           setColor(0)
       }
    }
    
    const value = getFromLocalStorage("Posts")
     return(
         <div className={styles.container}>
            <LeftInfo/>
            <RigthInfo/>
            <PublishArt/>
            {/* //linea divisora de publish art y los post  */}
            <div className={styles.divisorLine}></div>
            {/* My post  */}
            {<p>{value.username}</p>}
            <MyPost
            username={value.username}
            name={value.name}
            numImg={455}
            click={clickMe}

            >
                <p>{value.post}</p>
            </MyPost>

            <PostArt nombre={'juano'} numImg={401} click={clickMe}/>
            <PostArt nombre={'carlitos'} numImg={402} click={clickMe}/>
            <PostArt nombre={'tuki'} numImg={403} click={clickMe}/>
            <PostArt nombre={'josé'} numImg={404} click={clickMe}/>
            
            

            
        </div>

     )
}

export{TimeLine}

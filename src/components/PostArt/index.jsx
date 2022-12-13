import styles from './PostArt.module.css';
import {generateUsername} from 'unique-username-generator';
import {FaHeart} from 'react-icons/fa';
import {GrSave} from 'react-icons/gr';
import {BiRepost} from 'react-icons/bi';
import {useAPI} from '../../Hooks/useAPI'
import { useState,useEffect } from 'react';



function PostArt({nombre, numImg, click}){
    const userName = generateUsername()
    const [cuotas, setCuotas] = useState([]);

   
   
    useEffect(()=>{
        let mounted = true; 
        useAPI()
            .then(cuotas=>{
                if(mounted){
                    setCuotas(cuotas);
                }
            })
            return ()=>mounted=false;
    }, [])

   
        return(
            <div className={styles.Container}>
                {/* div for the prof image and username */}
                <div className={styles.profileHeader}>
                    <figure className={styles.profileHeader__profileImg}>
                    <img src="https://i.pinimg.com/736x/19/ce/2f/19ce2fd87c741b5725cc5c74e71ea028.jpg" alt="profile photo" />
                    </figure>
                    <div className={styles.Names}>
    
                    <p>@{userName} </p>
                    <p>{nombre}</p>
                    </div>
                </div>
                {/* content container  */}
    
                <div className={styles.PostContainer}>
                
                {/* container to set the quotes on the left without leaving... the parent container */}
                <div className={styles.quoteContainer}> 
                {cuotas.map(cuotas=><p>{cuotas.quote}</p>)}
                </div>
    
                    <img className={styles.postImage}src={`https://picsum.photos/728/${numImg}`} alt="Post" />
                    <ul className={styles.postActions}>
                        <li className={styles.Like} onClick={click} id="test"><FaHeart/></li>
                        <li className={styles.Save}><GrSave/></li>
                        <li className={styles.Repost}><BiRepost/></li>
                    </ul>
                </div>
            </div>
        )

    }


export{PostArt}
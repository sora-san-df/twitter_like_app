import styles from './myPost.module.css'
import {FaHeart} from 'react-icons/fa';
import {MdSaveAlt} from 'react-icons/md';
import {BiRepost} from 'react-icons/bi';



function MyPost({username, name,numImg,click,like,children}){

   
    return(
        <div className={styles.Container}>
        {/* div for the prof image and username */}
        <div className={styles.profileHeader}>
            <figure className={styles.profileHeader__profileImg}>
            <img src="https://i.pinimg.com/736x/19/ce/2f/19ce2fd87c741b5725cc5c74e71ea028.jpg" alt="profile photo" />
            </figure>
            <div className={styles.Names}>

            <p>@{username} </p>
            <p>{name}</p>
            </div>
        </div>
        {/* content container  */}

        <div className={styles.PostContainer}>
        
        {/* container to set the quotes on the left without leaving... the parent container */}
        <div className={styles.quoteContainer}> 
        <p>{children}</p>
        </div>

            <img className={styles.postImage}src={`https://picsum.photos/728/${numImg}`} alt="Post" />
            <ul className={styles.postActions}>
                <li className={styles.Like} onClick={click} id="test"><FaHeart/>{ like }</li>
                <li className={styles.Save}><MdSaveAlt/></li>
                <li className={styles.Repost}><BiRepost/></li>
            </ul>
        </div>
    </div>
    )
}

export{MyPost}
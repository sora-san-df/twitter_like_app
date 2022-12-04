import styles from './PostArt.module.css';

function PostArt(){
    return(
        <div >
            {/* div for the prof image and username */}
            <div className={styles.profileHeader}>
                <figure>
                <img src="" alt="profile photo" />
                </figure>
                <p>@username</p>
            </div>
            {/* content container  */}
            <div className={styles.PostContainer}>
                <p>description of the post</p>
                <img className={styles.postImage}src="https://i.pinimg.com/564x/46/e5/75/46e575178b349d027d9345f2a82bfacf.jpg" alt="Post" />
                <ul className={styles.postActions}>
                    <li>Like</li>
                    <li>Save</li>
                    <li>Repost</li>
                </ul>
            </div>
        </div>
    )
}

export{PostArt}
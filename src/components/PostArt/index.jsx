import styles from './PostArt.module.css';

function PostArt(){
    return(
        <div >
            {/* div for the prof image and username */}
            <div className={styles.profileHeader}>
                <figure className={styles.profileHeader__profileImg}>
                <img src="https://i.pinimg.com/736x/19/ce/2f/19ce2fd87c741b5725cc5c74e71ea028.jpg" alt="profile photo" />
                </figure>
                <p>@username</p>
            </div>
            {/* content container  */}
            <div className={styles.PostContainer}>
                <p>muchos texto texto mdmkdmakdakdsakdmsakdm</p>
                <img className={styles.postImage}src="https://picsum.photos/728/400" alt="Post" />
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
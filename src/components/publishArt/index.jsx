//Component that will allows us to make a publication. 
import React from "react";
import {RiImageAddFill} from 'react-icons/ri'
import {RiDeleteBin6Line} from 'react-icons/ri'
import styles from './styles.module.css'

function PublishArt(){
  
   return(
      <form className={styles.myForm}>
        <figure className={styles.figure_profileImg}>
        <img
          className={styles.profileImg}
          src="https://i.pinimg.com/736x/19/ce/2f/19ce2fd87c741b5725cc5c74e71ea028.jpg"
          alt="Profile Image"
        />
        </figure>
        <textarea
          className={styles.textArea}
          placeholder="write some dumb text"
        ></textarea>
        <div>
          <ul className={styles.lista}>
            <div className={styles.buttons}>
            <li>
              <button className={styles.uploadImg}>
                <RiImageAddFill/>
              </button>
            </li>
            <li>
              <button className={styles.deletePost}>
                <RiDeleteBin6Line/>
              </button>
            </li>
            </div>
            <button className={styles.submitButton}type="submit">Post</button>
          </ul>
        </div>
      </form>
   )
}

export { PublishArt}

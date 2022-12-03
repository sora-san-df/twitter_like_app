//Component that will allows us to make a publication. 
import React from "react";
import {RiImageAddFill} from 'react-icons/ri'
import {RiDeleteBin6Line} from 'react-icons/ri'
import styles from './styles.module.css'

function PublishArt(){

  const submitFunc = (e)=>{
    e.preventDefault()
    console.log(e.target.content.value);
  }
   return(
      <form className={styles.myForm} onSubmit={submitFunc}>
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
          name="content"
        ></textarea>
        <div>
          <ul className={styles.lista}>
            <div className={styles.buttons}>
            <li>
              <button  className={styles.uploadImg}>
                <RiImageAddFill/>
              </button>
            </li>
            <li>
              <button className={styles.deletePost}>
                <RiDeleteBin6Line/>
              </button>
            </li>
            </div>
            
            <input type="submit" value="Post"   className={styles.submitInput}/>
          </ul>
        </div>
      </form>
   )
}

export { PublishArt}

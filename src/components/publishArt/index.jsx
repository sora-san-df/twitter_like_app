//Component that will allows us to make a publication. 
import React from "react";

function PublishArt(){
   return(
    <div className="publishArt">
        <form className="content">
        <img src="image.png" alt="profile image" />
        <textarea className="content" name="publishART" id="" cols="30" rows="10"></textarea>
        </form>
        <div>
        <ul className="buttons">
            <li>Boton 1</li>
            <li>Boton 2</li>
            <button type="submit">heheh</button>
        </ul>

        </div>
       
        
    </div>
   )
}

export { PublishArt}

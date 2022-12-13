
function saveInLocalStorage(key, value){
    
        let myPost = localStorage.getItem(key)
        if(myPost){
            myPost = JSON.parse(myPost)
            console.log(myPost)
            if(Array.isArray(myPost)){

                myPost.push(value)
            }
            window.localStorage.setItem(key, JSON.stringify(myPost))
        }else{

            window.localStorage.setItem(key, JSON.stringify([value]))
       
        }
}

export {saveInLocalStorage}
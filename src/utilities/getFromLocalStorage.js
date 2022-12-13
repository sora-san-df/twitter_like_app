function getFromLocalStorage (key){
    let value = JSON.parse(window.localStorage.getItem(key))
    
    return value
}

export {getFromLocalStorage}
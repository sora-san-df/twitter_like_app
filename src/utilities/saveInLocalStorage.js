
function saveInLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

export {saveInLocalStorage}
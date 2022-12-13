export function useAPI (){
  return fetch(import.meta.env.VITE_API)
    .then(data => data.json())
}

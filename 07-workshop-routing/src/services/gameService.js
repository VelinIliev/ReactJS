const BASE_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => console.log(data))
}
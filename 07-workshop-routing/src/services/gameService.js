const BASE_URL = 'http://localhost:3030/jsonstore/games';

// export const getAll = () => {
//     fetch(BASE_URL)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

export const getAll = async () => {
    const response = await fetch(BASE_URL);
    const result = await response.json();   
    const games = Object.values(result)
    return games;
};

export const create = async (data) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export const get = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const result = await response.json();
    const game = result;
    return game;
}
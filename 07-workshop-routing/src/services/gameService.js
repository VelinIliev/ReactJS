const BASE_URL = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const response = await fetch(BASE_URL);
    const result = await response.json();   
    const games = Object.values(result)
    return games;
};

export const getLatestGames = async () => {
    const queryOrder = encodeURIComponent(`_createdOn desc`);
    const response = await fetch(`${BASE_URL}?sortBy=${queryOrder}`);
    const result = await response.json();   
    const games = Object.values(result).slice(0, 3);
    return games;
};

export const create = async (data) => {
    const token = JSON.parse(localStorage.getItem('auth')).accessToken;

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        },
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
}; 

export const deleteGame = async (id) => {
    const token = JSON.parse(localStorage.getItem('auth')).accessToken;
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": token
        },
    });
    const result = await response.json();
    
    return result;
};

export const editGame = async(id, values) => {
    const token = JSON.parse(localStorage.getItem('auth')).accessToken;

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "X-Authorization": token
        },
        body: JSON.stringify(values)
    });
    const result = await response.json();
    
    return result;
}
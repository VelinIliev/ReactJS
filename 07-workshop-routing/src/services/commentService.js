const BASE_URL = 'http://localhost:3030/jsonstore/comments';

export const createComment = async(data) => {
    // console.log(data);
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
};

export const getComments = async(gameId) => {
    // const query = encodeURIComponent(`gameId="${gameId}"`);
    // console.log(query);
    // const response = await fetch(`${BASE_URL}?where=${query}`);
    const response = await fetch(`${BASE_URL}`);
    const result = await response.json();
    // console.log(result);
    const comments = Object.values(result);
    const gameComments = comments.filter(x => x.gameId === gameId)
    return gameComments;
};
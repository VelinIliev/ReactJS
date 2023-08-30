const BASE_URL = 'http://localhost:3030/data/comments';

export const createComment = async (gameId, comment) => {
    const uesrname = JSON.parse(localStorage.getItem('auth')).email.split("@")[0];
    const token = JSON.parse(localStorage.getItem('auth')).accessToken;

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({
            gameId,
            "text": comment,
            "username": uesrname,
        })
    });
    const result = await response.json();
    return result;
};

export const getComments = async (gameId) => {
    const response = await fetch(`${BASE_URL}`);
    try {
        const result = await response.json();
        const comments = Object.values(result);
        const gameComments = comments.filter(x => x.gameId === gameId)
        return gameComments;
    } catch (error) {
        return []
    }

};
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
    const querySearch = encodeURIComponent(`gameId="${gameId}"`);
    const queryRelation= encodeURIComponent(`author=_ownerId:users`);
    const response = await fetch(`${BASE_URL}?where=${querySearch}&load=${queryRelation}`);
    const result = await response.json();
    const comments = Object.values(result);
    // console.log(comments);
    return comments
};
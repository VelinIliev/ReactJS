const baseURL = 'http://localhost:3005/api/users'

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    return result.users
};

export const getUser = async (id) => {
    const response = await fetch(`${baseURL}/${id}`);
    const result = await response.json();
    return result.user
}




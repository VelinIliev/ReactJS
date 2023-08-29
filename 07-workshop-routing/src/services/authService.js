const BASE_URL = 'http://localhost:3030/users';

export const login = async (loginData) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginData)
    });
    const result = await response.json()
    return result 
};

export const register = async (data) => {

    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    const result = await response.json()
    return result;
}

export const logout = async(token) => {
    const response = await fetch(`${BASE_URL}/logout`, {
        method: "GET",
        headers: {
            "X-Authorization": token
        }
    })
}
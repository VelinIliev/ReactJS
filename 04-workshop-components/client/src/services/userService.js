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

export const create = async (userData) => {
    const response = await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(
            {
                "firstName": userData.firstName,
                "lastName": userData.lastName,
                "email": userData.email,
                "imageUrl": userData.imageUrl,
                "phoneNumber": userData.phoneNumber,
                "address": {
                    "country": userData.country,
                    "city": userData.city,
                    "street": userData.street,
                    "streetNumber": userData.streetNumber
                }
            }
        )
    });
    const result = await response.json();

    return result.user;
}

export const deleteUser = async (id) => {
    const response = await fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    });
    const result = await response.json();
    return result;
};

export const update = async (id, userData) => {
    
    const response = await fetch(`${baseURL}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(
            {
                "firstName": userData.firstName,
                "lastName": userData.lastName,
                "email": userData.email,
                "imageUrl": userData.imageUrl,
                "phoneNumber": userData.phoneNumber,
                "address": {
                    "country": userData.country,
                    "city": userData.city,
                    "street": userData.street,
                    "streetNumber": userData.streetNumber
                }
            }
        )
    });
    const result = await response.json();
    return result.user
}


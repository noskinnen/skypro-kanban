export let token;
export const setToken = (newToken) => {
    token = newToken;
};
const mainHostUrl = "https://wedev-api.sky.pro/api/kanban";

const userUrl = "https://wedev-api.sky.pro/api/user";

export async function getTodos({token}) {
    const response = await fetch(mainHostUrl, {
        headers: {
Authorization: `Bearer ${token}`,
        },
    });
    if (!response.status === 200) {
        throw new Error("Не удалось загрузить данные, попробуйте позже");
    }
    const data = await response.json();
    return data;
}


export async function postTodo({text, token}) {
    const response = await fetch(mainHostUrl, {
        headers: {
Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Не удалось добавить задачу, попробуйте позже");
    }
    const data = await response.json();
    return data;
}


export async function putTodo({text, id, token}) {
    const response = await fetch(mainHostUrl + `/${id}`, {
        headers: {
Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Не удалось обновить задачу, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

export async function deleteTodo({text, id, token}) {
    const response = await fetch(mainHostUrl + `/${id}`, {
        headers: {
Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Не удалось удалить задачу, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

export async function getUsersList({token}) {
    const response = await fetch(userUrl, {
        headers: {
Authorization: `Bearer ${token}`,
        },
    });
    if (!response.status === 200) {
        throw new Error("Не удалось получить список пользователей, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

export async function registration({ name, login,password}) {
    return fetch(userUrl, {
        method: "POST",
        body: JSON.stringify({
            name, 
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Пользователь с таким логином уже существует");
        }
        return response.json();
    });
}

export function signIn({login, password}) {
return fetch(userUrl + "/login", {  
    method: "POST",                 
        body: JSON.stringify({      
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Введён неверный логин или пароль"); 
        }
        return response.json();     
    });
} 
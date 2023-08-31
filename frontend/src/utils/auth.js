export const BASE_URL = 'https://api.kmv-mesto.nomoredomainsicu.ru';

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const register = async (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email, 
      password 
    })
  })
  .then((res) => {
    return checkResponse(res);
  })
  .then((data) => {
    return data;
  });
};

export const login = async (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email, 
      password 
    })
  })
  .then(checkResponse)
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    } else {
      return;
    }
  })
}

export const checkToken = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
  .then(checkResponse)
    .then((data) => {
      return data;
    })
}
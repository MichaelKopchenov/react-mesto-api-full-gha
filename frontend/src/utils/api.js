class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers
        }

_getResponseData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

getInitialCards() {
    return fetch(`${this._url}/cards`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
    })
    .then(this._getResponseData);
}

getInitialProfile() {
    return fetch(`${this._url}/users/me`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
    })
    .then(this._getResponseData);
}

setNewProfileData(dataOfUser) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            name: dataOfUser.name,
            about: dataOfUser.about,
        })
    })
    .then(this._getResponseData);
}

setNewCard(data) {
    return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            name: data.name,
            link: data.link,
        })
    })
    .then(this._getResponseData);
}

setNewAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data,
      })
    })
    .then(this._getResponseData);
}

deleteMyCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(this._getResponseData);
}

putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(this._getResponseData);
}

unputLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(this._getResponseData);
}

}

const api = new Api({
    baseUrl: 'https://api.kmv-mesto.nomoredomainsicu.ru',
  });

export default api;
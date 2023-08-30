class Api {
    constructor(options) {
        this._url = options.baseUrl;
        }

_getResponseData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(this._getResponseData);
}

getInitialProfile(token) {
    return fetch(`${this._url}/users/me`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(this._getResponseData);
}

setNewProfileData(dataOfUser, token) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
          },
        body: JSON.stringify({
            name: dataOfUser.name,
            about: dataOfUser.about,
        })
    })
    .then(this._getResponseData);
}

setNewCard(data, token) {
    return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
          },
        body: JSON.stringify({
            name: data.name,
            link: data.link,
        })
    })
    .then(this._getResponseData);
}

setNewAvatar(data, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: data,
      })
    })
    .then(this._getResponseData);
}

deleteMyCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._getResponseData);
}

putLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._getResponseData);
}

unputLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._getResponseData);
}

}

const api = new Api({
    baseUrl: 'https://api.kmv-mesto.nomoredomainsicu.ru',
  });

export default api;
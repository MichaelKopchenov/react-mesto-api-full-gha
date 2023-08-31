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

_request(url, options) {
    return fetch(`${this._url}${url}`, options)
      .then(this._getResponseData)
  }

getInitialCards(token) {
    return this._request('/cards', {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }

getInitialProfile(token) {
    return this._request('/users/me', {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }

setNewProfileData(dataOfUser, token) {
    return this._request('/users/me', {
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
}

setNewCard(data, token) {
    return this._request('/cards', {
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
}

setNewAvatar(data, token) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: data,
      })
    })
}

deleteMyCard(cardId, token) {
    return this._request(`/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
    }

putLike(cardId, token) {
    return this._request(`/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }

unputLike(cardId, token) {
    return this._request(`/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
    }
}

const api = new Api({
    baseUrl: 'https://api.kmv-mesto.nomoredomainsicu.ru',
  });

export default api;
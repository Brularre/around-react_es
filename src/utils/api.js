class Api {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  async getUser() {
    try {
      const res = await fetch(`${this._address}/users/me`, {
        headers: this._headers,
      });
      return res.ok ? await res.json() : Promise.reject(res.status);
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }

  async setUserInfo(userInfo) {
    try {
      return await fetch(`${this._address}/users/me`, {
        method: "PATCH",
        body: JSON.stringify({
          name: userInfo.name,
          about: userInfo.about,
        }),
        headers: this._headers,
      });
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }

  async setAvatar(avatar) {
    try {
      console.log(avatar);
      return await fetch(`${this._address}/users/me/avatar`, {
        method: "PATCH",
        body: JSON.stringify({
          avatar: avatar,
        }),
        headers: this._headers,
      });
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }

  async getCards() {
    try {
      const res = await fetch(`${this._address}/cards`, {
        headers: this._headers,
      });
      return res.ok ? await res.json() : Promise.reject(res.status);
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }

  async addCard(name, link) {
    try {
      const res = await fetch(`${this._address}/cards`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          link: link,
        }),
        headers: this._headers,
      });
      return res.ok ? await res.json() : Promise.reject(res.status);
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }

  async changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      try {
        const res = await fetch(`${this._address}/cards/likes/${id}`, {
          method: "PUT",
          headers: this._headers,
        });
        return res.ok ? await res.json() : Promise.reject(res.status);
      } catch (err) {
        throw new Error(`Error ${err}.`);
      }
    } else {
      try {
        const res = await fetch(`${this._address}/cards/likes/${id}`, {
          method: "DELETE",
          headers: this._headers,
        });
        return res.ok ? await res.json() : Promise.reject(res.status);
      } catch (err) {
        throw new Error(`Error ${err}.`);
      }
    }
  }

  async deleteCard(id) {
    try {
      return fetch(`${this._address}/cards/${id}`, {
        method: "DELETE",
        headers: this._headers,
      });
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }
}

const api = new Api({
  address: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "3a5f7fd0-4f77-4f83-8848-cbfc8ddc2f6c",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

export default api;

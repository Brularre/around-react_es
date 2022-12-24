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
}

const api = new Api({
  address: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "3a5f7fd0-4f77-4f83-8848-cbfc8ddc2f6c",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

export { api };

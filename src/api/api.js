const key = 'AIzaSyDhJPqSK0NU6b3H1r_Oh7BUjNcPbDKsWGY';

class Api {
  constructor(url, key) {
    this._url = url;
    this._key = key;
  }
  
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }

  getBooksByQuery(query) {
    const finalQueryUrl = `${this._url}${query}+intitle:${query}&maxResults=30&key=${key}`;

    return fetch(finalQueryUrl, {
      method: 'GET'
    })
    .then(res => {
      return this._checkStatus(res);
    }) 
  }
}




const api = new Api('https://www.googleapis.com/books/v1/volumes?q=', key);

export default api;
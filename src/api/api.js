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

  getBooksByQuery(seacrhData) {
    const { query, sorting, categories } = seacrhData;

    let category = categories === 'all' ? '' : `+subject:${categories}`;

    const finalQueryUrl = `${this._url}?q=${query}+intitle:${query}${category}&maxResults=30&orderBy=${sorting}&startIndex=0&key=${key}`;

    return fetch(finalQueryUrl, {
      method: 'GET'
    })
    .then(res => {
      return this._checkStatus(res);
    }) 
  }

  getMoreBooks(seacrhData, page) {
    const { query, sorting, categories } = seacrhData;

    let category = categories === 'all' ? '' : `+subject:${categories}`;

    const finalQueryUrl = `${this._url}?q=${query}+intitle:${query}${category}&maxResults=30&orderBy=${sorting}&startIndex=${page}&key=${key}`;

    return fetch(finalQueryUrl, {
      method: 'GET'
    })
    .then(res => {
      return this._checkStatus(res);
    })
  }

  getDetailBookInfo(id) {
    return fetch(`${this._url}/${id}`, {
      method: 'GET'
    })
    .then(res => {
      return this._checkStatus(res);
    })
  }
}




const api = new Api('https://www.googleapis.com/books/v1/volumes', key);

export default api;
import  { React, useEffect, useState } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/api';

const CardList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const searchData = useSelector(state => state.search);

  const loadBooks = (data) => {
    dispatch({type: 'LOAD', payload: data}); 
  }

  const clearBooks = (data) => {
    dispatch({type: 'CLEAR'}); 
  }

  const [messageForUser, setMessageForUser] = useState('Здесь будет результат поиска');
  const [toLoad, setToLoad] = useState(30);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const loadMore = () => {
    if (books.books.length) {
      api.getMoreBooks(searchData, toLoad)
      .then(data => {
        loadBooks(data.items);
        setToLoad(prev => prev + 30)
      })
    }
  }

  useEffect(() => {
    if (searchData.query) {
      api.getBooksByQuery(searchData)
      .then(data => {
        clearBooks();
        loadBooks(data.items);
        setTotalItems(data.totalItems);
        setToLoad(30);
      })
      .catch(err => {
        if (err.name === 'TypeError') {
          setMessageForUser('По вашему запросу ничего не найдено');
        } else {
          setMessageForUser('Произошла ошибка на сервере'); 
        }
      })
    }
  }, [searchData])

  useEffect(() => {
    if (toLoad >= totalItems) {
      setIsAllLoaded(true);
    } else {
      setIsAllLoaded(false);
    }
  }, [toLoad, totalItems])

  return (
    <>
      <ul className='card-list'>
        {
          books.books.length > 0 ? (
            books.books.slice(0, toLoad).map(el => {
              const { title, authors, categories, imageLinks } = el.volumeInfo;
              const src = imageLinks ? imageLinks.smallThumbnail : undefined;
              const key = el.id + Math.random();
              return (
                <Card
                  title={title}
                  authors={authors}
                  cathegory={categories ? categories : ['Нет категорий']}
                  src={src}
                  key={key}
                  id={el.id}
                />
              )
            })
          ) :
          (
            <li key={2} className='not-found'>{messageForUser}</li>
          )
        }
      </ul>
      <button className={`load-more ${isAllLoaded || !books.books.length ? 'load_more_status_hide' : ''}`} onClick={loadMore}>Load more</button>
    </>
  );
}

export default CardList;

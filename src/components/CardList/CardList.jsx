import React, { useEffect } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/api';

const CardList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.search);

  const loadBooks = (data) => {
    dispatch({type: 'LOAD', payload: data}); 
  }

  useEffect(() => {
    api.getBooksByQuery('Цвет')
    .then(data => {
      loadBooks(data.items);
    })
  }, [])

  useEffect(() => {
    const arr = books.books.map(el => el);
    arr.forEach(el => {
      console.log(el.id);
    })
  }, [books])

  return (
    <>
      <ul className='card-list'>
        {
          books.books.length > 0 ? (
            books.books.map(el => {
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
                />
              )
            })
          ) :
          (<p>Ничего не найдено</p>)
        }
      </ul>
      <button className='load-more'>Load more</button>
    </>
  );
}

export default CardList;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import templateBook from '../../images/template.svg'
import api from '../../api/api';
import { useDispatch } from 'react-redux';

const Card = ({ title, cathegory, authors, src, id }) => {
  const dispatch = useDispatch();

  const loadData = (data) => {
    dispatch({type: 'LOAD-EXTENDED-DATA', payload: data}); 
  }

  const clearData = () => {
    dispatch({type: 'CLEAR-EXTENDED-DATA'}); 
  }

  const loadDetailData = () => {
    api.getDetailBookInfo(id)
    .then(data => {
      clearData();
      loadData(data.volumeInfo);
    })
  }

  return (
    <Link className='card-link' to='/book' onClick={loadDetailData}>
      <li className='card'>
        <img className='card__bg' src={src ? src : templateBook} alt='' />
        <div className='card__info'>
          <p className='card__title'>
            {
              title
            }
          </p>
          <p className='card__categhory'>
            {
              cathegory[0]
            }
          </p>
          {
            authors ? (
              <p className='card__authors'>
                {
                  authors.map(el => ` ${el}`)
                }
              </p>
            ) :
            (
              <p>Автор не указан</p>
            )
          }
        </div>
      </li>
    </Link>
  );
}

export default Card;

import { React, useState } from 'react';
import './DetailCard.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const DetailCard = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    src: '',
    title: '',
    categories: [],
    authors: [],
    description: ''
  });

  const extendedData = useSelector(state => state.extendedData);

  useEffect(() => {
    const { src, title, categories, authors, description } = extendedData;

    console.log(extendedData);

    setData({...data, 
      title,
      src,
      categories,
      authors,
      description
    })
  }, [extendedData]);

  return (
    <div className='detail'>
      <img className='detail__bg' src={data.src} alt='' />
      <div className='detail__info'>
        <p className='detail__title'>{data.title}</p>
        <p className='detail__about'>{data.description}</p>
        <p className='detail__categhories'>
          {
            data.categories && data.categories.length > 0 ? (
              data.categories.map(el => {
                return el;
              })
            ) : (
              <span>Нет категорий</span>
            )
          }
        </p>
        <p className='detail__authors'>
          {
            data.authors && data.authors.length > 0 ? (
              data.authors.map(el => {
                return el;
              })
            ) :
            (
              <span>Авторы не указаны</span>
            )
          }
        </p>
      </div>
      <button
        className='detail__link'
        onClick={() => navigate(-1)}>Назад
      </button>
    </div>
  );
}

export default DetailCard;

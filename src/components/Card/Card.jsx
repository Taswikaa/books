import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import templateBook from '../../images/template.svg'

const Card = ({ title, cathegory, authors, src }) => {
  useEffect(() => {
    
  }, [])

  return (
    <Link className='card-link' to='/book'>
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

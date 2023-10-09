import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => {
  return (
    <Link to='/book'>
      <li className='card'>
        <img className='card__bg' src='http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70vPq4lsKXM3UVHnuNLU0MoOyOYZeOrsAtcuT_fU-Ih9bjMkj-0zB0xjhm8-m69g-tDHqAUwL_foXVOHBFJLXJk3nMzTKleEAq6mMtiZGYTxXDG7Vz0it7mJj60QlkLtIMulJxu&source=gbs_api' alt='' />
        <div className='card__info'>
          <p className='card__title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt!</p>
          <p className='card__categhory'>Computers</p>
          <p className='card__authors'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, cum!</p>
        </div>
      </li>
    </Link>
  );
}

export default Card;

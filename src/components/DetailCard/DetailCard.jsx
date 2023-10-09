import React from 'react';
import './DetailCard.css';
import { useNavigate } from 'react-router-dom';

const DetailCard = () => {
  const navigate = useNavigate();

  return (
    <div className='detail'>
      <img className='detail__bg' src='http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70vPq4lsKXM3UVHnuNLU0MoOyOYZeOrsAtcuT_fU-Ih9bjMkj-0zB0xjhm8-m69g-tDHqAUwL_foXVOHBFJLXJk3nMzTKleEAq6mMtiZGYTxXDG7Vz0it7mJj60QlkLtIMulJxu&source=gbs_api' alt='' />
      <div className='detail__info'>
        <p className='detail__title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt!</p>
        <p className='detail__about'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque soluta commodi ullam consequuntur quo natus minus rerum explicabo rem dolorum! Nesciunt deserunt neque odit quod quo dignissimos explicabo, quis eaque eveniet iure minima sit assumenda excepturi nobis rem eligendi quam molestiae earum illo asperiores. Qui?</p>
        <p className='detail__categhories'>Computers</p>
        <p className='detail__authors'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, cum!</p>
      </div>
      <button
        className='detail__link'
        onClick={() => navigate(-1)}>Назад
      </button>
    </div>
  );
}

export default DetailCard;

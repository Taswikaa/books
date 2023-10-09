import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = () => {
  return (
    <ul className='card-list'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ul>
  );
}

export default CardList;

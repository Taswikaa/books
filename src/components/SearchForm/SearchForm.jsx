import React from 'react';
import './SearchForm.css'

const SearchForm = () => {
  return (
    <section className='search'>
      <h2 className='search__title'>Search</h2>
      <form className='search__form'>
        <div className='search__form-input-label'>
          <input className='search__form-input' type='text' placeholder='Start typing' />
          <button className='search__form-button' type='submit'></button>
        </div>
        <div className='search__form-filter-label'>
          <div className='search__form-filter'>
            <h3 className='search__form-subtitle'>Categories</h3>
            <select className='select' defaultValue='all'>
              <option value='all'>all</option>
              <option value='art'>art</option>
              <option value='biography'>biography</option>
              <option value='computers'>computers</option>
              <option value='history'>history</option>
              <option value='medical'>medical</option>
              <option value='poetry'>poetry</option>
            </select>
          </div>
          <div className='search__form-filter'>
            <h3 className='search__form-subtitle'>Sorting by</h3>
            <select className='select' defaultValue='relevance'>
              <option value='relevance'>relevance</option>
              <option value='newest'>newest</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;

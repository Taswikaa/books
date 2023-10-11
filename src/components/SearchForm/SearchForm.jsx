import { React, useState } from 'react';
import './SearchForm.css'
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const dispatch = useDispatch();

  const seacrhData = (data) => {
    dispatch({type: 'ENTER', payload: data}); 
  }

  const [query, setQuery] = useState({
    title: '',
    categories: 'all',
    sorting: 'relevance'
  });

  const changeInput = (e, type) => {
    setQuery({...query, [type]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();

    seacrhData(query);
  }

  return (
    <section className='search'>
      <h2 className='search__title'>Search</h2>
      <form className='search__form' onSubmit={onSubmit}>
        <div className='search__form-input-label'>
          <input
          className='search__form-input'
          type='text'
          placeholder='Start typing'
          value={query.title}
          onChange={(e) => {
            changeInput(e, 'title')
          }}
          />
          <button className='search__form-button' type='submit'></button>
        </div>
        <div className='search__form-filter-label'>
          <div className='search__form-filter'>
            <h3 className='search__form-subtitle'>Categories</h3>
            <select
              className='select' 
              value={query.categories}
              onChange={(e) => {
                changeInput(e, 'categories');
              }}
              >
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
            <select
              className='select' 
              value={query.sorting}
              onChange={(e) => {
                changeInput(e, 'sorting');
              }}
              >
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

import { Route, Routes } from 'react-router-dom';
import CardList from '../CardList/CardList';
import DetailCard from '../DetailCard/DetailCard';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={(
          <>
            <SearchForm />
            <CardList />
          </>
        )} />
        <Route path='/book' element={(
          <>
            <DetailCard />
          </>
        )} />
      </Routes>
    </div>
  );
}

export default App;

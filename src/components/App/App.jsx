import CardList from '../CardList/CardList';
import DetailCard from '../DetailCard/DetailCard';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <SearchForm></SearchForm>
      <CardList></CardList>
      <DetailCard></DetailCard>
    </div>
  );
}

export default App;

import './App.scss';
import SearchCity from './components/SearchCity/SearchCity';
function App() {
  return (
    <>
      <div className="container">
        <SearchCity />
        <div className="weather"></div>
      </div>
    </>
  );
}

export default App;

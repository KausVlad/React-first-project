import './App.scss';
import SearchCity from './components/SearchCity/SearchCity';
import Weather from './components/Weather/Weather';
function App() {
  return (
    <>
      <div className="container">
        <SearchCity />
        <Weather />
      </div>
    </>
  );
}

export default App;

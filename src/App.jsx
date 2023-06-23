import './App.scss';
import { Menu } from './components/Menu/Menu';
import SearchCity from './components/SearchCity/SearchCity';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="header">
            <SearchCity />
            <Menu />
          </div>
          <Weather />
        </div>
      </div>
    </>
  );
}

export default App;

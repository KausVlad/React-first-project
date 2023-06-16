import './SearchCity.scss';
import cancel from './svg/cancel.svg';
import search from './svg/search.svg';
import GeocodingAPI from './GeocodingAPI/GeocodingAPI';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCoordinate,
  resetCoordinate,
} from '../../store/weatherState/weatherState.slice';

function SearchCity() {
  const dispatch = useDispatch();

  const { coordinate } = useSelector((state) => state.weatherState);

  const [cityName, setCity] = useState('');
  const [locationData, setLocationData] = useState([]);
  const [selectedLocationData, setSelectedLocationData] = useState({});
  let selectedState = Object.keys(selectedLocationData).length === 0;

  useEffect(() => {
    GeocodingAPI(setLocationData, cityName);
  }, [cityName]);

  const handleClick = (index) => {
    setSelectedLocationData(locationData[index]);
    dispatch(setCoordinate(locationData[index]));
    setCity(
      `${locationData[index].name}, ${
        locationData[index].state ? `${locationData[index].state}, ` : ''
      } ${locationData[index].country}`
    );
  };

  console.log(coordinate);

  const clearSelection = () => {
    setSelectedLocationData({});
    dispatch(resetCoordinate());
    setLocationData([]);
    setCity('');
  };

  return (
    <>
      <div className="search-bar">
        <div className="search">
          <input
            disabled={!selectedState}
            type="text"
            name="search"
            id="search"
            value={cityName}
            onChange={(e) => setCity(e.target.value)}
            autoComplete="off"
            placeholder="Enter city like: Kyiv, UA"
          />
          <label htmlFor="search">
            <img
              src={selectedState ? search : cancel}
              alt="search/cancel"
              onClick={!selectedState ? clearSelection : undefined}
            />
          </label>
        </div>
        {selectedState && (
          <div className="city-tips">
            {locationData.map((location, index) => (
              <li key={index} onClick={() => handleClick(index)}>
                {location.name}, {location.state ? `${location.state}, ` : ''}
                {location.country}
              </li>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchCity;

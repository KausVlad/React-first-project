import './SearchCity.scss';
import cancel from './svg/cancel.svg';
import search from './svg/search.svg';
import GeocodingAPI from './GeocodingAPI/GeocodingAPI';
import { useState, useEffect, useRef } from 'react';
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
  let selectedState = Object.keys(coordinate).length === 0;
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const debouncedGeocodingAPI = () => {
      GeocodingAPI(setLocationData, cityName);
    };

    clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(debouncedGeocodingAPI, 500);

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [cityName]);

  const handleClick = (index) => {
    dispatch(setCoordinate(locationData[index]));
    setCity(
      `${locationData[index].name}, ${
        locationData[index].state ? `${locationData[index].state}, ` : ''
      } ${locationData[index].country}`
    );
  };

  const clearSelection = () => {
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

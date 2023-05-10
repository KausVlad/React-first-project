import './SearchCity.scss';
import GeocodingAPI from './GeocodingAPI';
import { useState, useEffect } from 'react';

function SearchCity() {
  const [cityName, setCity] = useState('');
  const [locationData, setLocationData] = useState([]);
  const [selectedLocationData, setSelectedLocationData] = useState({});
  let selectedState = Object.keys(selectedLocationData).length === 0;

  useEffect(() => {
    GeocodingAPI(setLocationData, cityName);
  }, [cityName]);

  const handleClick = (index) => {
    setSelectedLocationData(locationData[index]);
    setCity(
      `${locationData[index].name}, ${
        locationData[index].state ? `${locationData[index].state}, ` : ''
      } ${locationData[index].country}`
    );
  };
  console.log(selectedLocationData);
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

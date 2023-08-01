import { NavLink } from "react-router-dom";
import "./About.scss";

export function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-inf">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Back to Weather App</NavLink>
        </div>
        <div className="about">
          <ol>
            <li>
              Weather Display:{" "}
              <ul>
                <li>Shows detailed information about the current weather.</li>
                <li>
                  Option for authentication to access additional features.
                </li>
              </ul>
            </li>
            <li>
              5-Day Weather Forecast:{" "}
              <ul>
                <li>Available only for authenticated users.</li>
                <li>Displays the weather forecast for the next 5 days.</li>
                <li>
                  Includes data such as temperature, humidity, wind speed, and
                  other indicators.
                </li>
              </ul>
            </li>
            <li>
              User Registration:{" "}
              <ul>
                <li>Users without an account can register.</li>
                <li>Required registration data: email and password.</li>
              </ul>
            </li>
            <li>
              City Weather Search:{" "}
              <ul>
                <li>
                  The application utilizes the GEO API to search for weather
                  conditions in a specific city.
                </li>
                <li>
                  Users can enter the city name in the search field, and the
                  application will find the weather for that location.
                </li>
              </ul>
            </li>
            <li>
              User Dashboard:{" "}
              <ul>
                <li>Optional feature to set up custom API keys for usage.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

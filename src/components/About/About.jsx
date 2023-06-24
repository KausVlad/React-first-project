import { NavLink } from 'react-router-dom';
import './About.scss';

export function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-inf">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Back to Weather App</NavLink>
        </div>
        <div className="about">
          <div className="about-common about1">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              dolore excepturi facere expedita iure eum. Placeat facere libero
              iure ea atque, laboriosam corrupti odit repellat voluptatibus modi
              sunt obcaecati maxime!
            </p>
            <img src="/images/1T.gif" alt="1" />
          </div>

          <div className="about-common about2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              dolore excepturi facere expedita iure eum. Placeat facere libero
              iure ea atque, laboriosam corrupti odit repellat voluptatibus modi
              sunt obcaecati maxime!
            </p>
            <img src="/images/1T.gif" alt="1" />
          </div>

          <div className="about-common about1">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              dolore excepturi facere expedita iure eum. Placeat facere libero
              iure ea atque, laboriosam corrupti odit repellat voluptatibus modi
              sunt obcaecati maxime!
            </p>
            <img src="/images/1T.gif" alt="1" />
          </div>

          <div className="about-common about2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              dolore excepturi facere expedita iure eum. Placeat facere libero
              iure ea atque, laboriosam corrupti odit repellat voluptatibus modi
              sunt obcaecati maxime!
            </p>
            <img src="/images/1T.gif" alt="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

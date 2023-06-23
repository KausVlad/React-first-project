import { NavLink } from 'react-router-dom';
import './About.scss';

export function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <h1>About</h1>
        <div className="about">
          <p className="about1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            dolore excepturi facere expedita iure eum. Placeat facere libero
            iure ea atque, laboriosam corrupti odit repellat voluptatibus modi
            sunt obcaecati maxime!
          </p>
          <img className="about-img1" src="public\images\1T.gif" alt="1" />
          <p className="about2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            dolore excepturi facere expedita iure eum. Placeat facere libero
            iure ea atque, laboriosam corrupti odit repellat voluptatibus modi
            sunt obcaecati maxime!
          </p>
          <img className="about-img2" src="public\images\1T.gif" alt="1" />
        </div>
        <NavLink to="/">back</NavLink>
      </div>
    </div>
  );
}

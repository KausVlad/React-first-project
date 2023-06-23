import { NavLink } from 'react-router-dom';

export function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <NavLink to="/">back</NavLink>
    </div>
  );
}

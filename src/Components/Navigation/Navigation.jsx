import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </>
  );
};

export default Navigation;

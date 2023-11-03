import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <nav className="green lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
      Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;

import "./header.css";

const Header = () => {
  return (
    <nav className="orange lighten-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React - food
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

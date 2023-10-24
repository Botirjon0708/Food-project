import "./footer.css"

const Footer = () => {
  return (
    <footer className="page-footer  #2196f3 brown">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

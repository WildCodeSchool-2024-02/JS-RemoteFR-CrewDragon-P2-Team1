import "../styles/Footer.scss";
import Logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__text">
          <p>Travel far enough, you meet yourself</p>
          <p>Copyright © 2024 Wild Code School (F.M.S.L.B)</p>
        </div>
        <img src={Logo} alt="desktop-logo" className="logo" />
      </div>
    </footer>
  );
}

export default Footer;

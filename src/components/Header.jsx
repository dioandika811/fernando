import profilePicture from "../assets/Fernando1.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Rizky Fernando</h3>
        <p>Kuliner - Content Creator - Vlogger </p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/rizky_fernandooo?igsh=MXRxdzl2MThpN3dueQ==">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/share/19AagqAMaf/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

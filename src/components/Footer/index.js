import { FaFacebook, FaInstagram, FaYoutube , FaLinkedin,FaWhatsapp   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div>
            <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740565779/infy-logo_jnjruw.jpg" alt=""  className="footerImage"/>
          <h2 className="footer-title">Travel Unbounded</h2>
          <p className="footer-text">Your gateway to unforgettable journeys.</p>
        </div>

        <div>
          <h3 className="footer-subtitle">Registered Office</h3>
          <hr className="break" />
          <p className="footer-text">No 10, 8th Main, 12th Cross, Vinayaka Nagar B block, Konene Agrahara, Bangalore - 560017</p>
          <h3 className="footer-subtitle">Headquarters</h3>
          <hr className="break" />
          <p className="footer-text">No 32, Global Incubation Services, CA Site, No 1, HAL 3rd Stage EXTN, behind Hotel Leela Palace, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka - 560008</p>
        </div>

        <div>
          <h3 className="footer-subtitle">Other Offices</h3>
          <hr className="break" />
          <p className="footer-text">Nairobi: Westpark Towers, Muthithi Road, Nairobi, P.O. Box: 6950 Postal Code - 00100</p>
          <p className="footer-text">Kerala: 39/2475-B1, Suite 80, LR Towers, SJRRA 104, S Janatha Road, Palavivatton, Kochi, Ernakulam, Kerala - 682025</p>
          <p className="footer-text">Tamil Nadu: The Workvilla, Kamala Arcade, Thousand Lights, Anna Salai, Chennai, Tamil Nadu - 600006</p>
          <p className="footer-text">Goa: No. 66, Phase IV, Verna Industrial Estate, Verna, South Goa, Goa - 403722</p>
        </div>
      </div>

      <div className="footer-contact">
        <h3 className="footer-subtitle">Contact Us</h3>
        <hr className="break" />
        <p className="footer-text">+91 9141001434 | support@travelunbounded.com</p>
        
        <div className="footer-social">
          <FaFacebook className="social-icon" color="#1b64f5"  />
          <FaInstagram className="social-icon" color="#f70faa"/>
          <FaYoutube  className="social-icon" color="#ed2f21" />
          <FaLinkedin className="social-icon" color="#37d1f0" />
          <FaWhatsapp className="social-icon" color="#16f585" />
          <FaXTwitter className="social-icon" color="#5d5c5e" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

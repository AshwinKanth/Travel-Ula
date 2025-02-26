import React, { Component } from "react";
import Popup from 'reactjs-popup'
import BookingForm from "../BookingForm";

import 'reactjs-popup/dist/index.css'
import "./index.css"

class Navbar extends Component {
  render() {
    const scrollToWildfire = () => {
      const wildfireSection = document.getElementById("wildfire-packages");
      if (wildfireSection) {
        wildfireSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <nav className="navbar">
        <div>
          <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740553409/logo_gfbc3f.webp" alt="logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <div className="destinations">
            <Popup
              trigger={
                <li><a href="#destinations">DESTINATIONS</a></li>
              }
              position="bottom center"
              className="destination-popup"
              contentStyle={{ width: "400px", backgroundColor: "#f8f9fa", }}
            >
              <div className=''>
                <div className="destinations-container">
                  <div>
                    <p className="country-Name">India</p>
                    <ul className="indian-countries">
                      <li className="destination-item">Keral</li>
                      <li className="destination-item">Himachal</li>
                      <li className="destination-item">Andaman</li>
                      <li className="destination-item">Bandipur</li>
                      <li className="destination-item">Kabini</li>
                      <li className="destination-item">Corbett</li>
                      <li className="destination-item">Ranthambore</li>
                    </ul>
                  </div>
                  <div>
                    <p className="country-Name">International</p>
                    <ul className="indian-countries">
                      <li className="destination-item">Kenya</li>
                      <li className="destination-item">Vietnam</li>
                      <li className="destination-item">Bali</li>
                      <li className="destination-item">Iceland</li>
                      <li className="destination-item">Dubai</li>
                      <li className="destination-item">Malaysia</li>
                      <li className="destination-item">Switzerland</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Popup>
          </div>

          <li><a href="#leisurepacakges">LEISURE PACKAGES</a></li>
          <li><a href="#wildfirepacakge" onClick={scrollToWildfire} className="">WILDFIRE PACKAGES</a></li>
          <li><a href="#blogs">BLOGS</a></li>
          <li><a href="#aboutus">ABOUT US</a></li>
          <li><a href="#contactus">CONTACT US</a></li>
          <div>
            <Popup
              modal
              trigger={

                <button type="button" className="book-now" >
                  BOOK NOW
                </button>
              }
            >
              {close => (
                <div div className="popup-container">
                  <BookingForm />
                  <button
                    type="button"
                    className="book-now"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </ul>

      </nav>
    );
  }
}

export default Navbar;


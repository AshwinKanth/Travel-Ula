import React, { Component } from "react";
import Popup from 'reactjs-popup'
import Itinerary from "../Itinerary";
import BookingForm from "../BookingForm";
import TermsAndConditions from "../TermsAndConditions";
import { BiMessageRounded } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import { FaCarSide } from "react-icons/fa";
import { GiLion } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";


class LandingPage extends Component {
    handleScrollToWildfire = () => {
        const wildfireSection = document.getElementById("wildfire-packages");
        if (wildfireSection) {
            wildfireSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        return (
            <div className="landing-container">
                <div>
                    <Popup
                        modal
                        trigger={

                            <div className="help-container">
                                <BiMessageRounded size={50} className="helpIcon" />
                            </div>
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
                <Slider {...settings} className="slider-container">
                    <div>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740473377/crossroad-car-safari-scene_qpzdft.jpg" className="sliderImage" alt="Maasai Mara Safari" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740473259/lion-pride-dry-forest_xl95se.jpg" className="sliderImage" alt="Lion in Maasai Mara" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740473824/graceful-cheetah-walking-meadow_181624-34022_nyipfj.jpg" className="sliderImage" alt="Cheetah in Maasai Mara" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740473987/group-giraffes-standing-grass-covered-hill-near-trees_181624-26603_jiqezw.jpg" className="sliderImage" alt="Giraffes in Maasai Mara" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740474063/sunset-savannah_1048-4710_vwufs2.jpg" className="sliderImage" alt="Sunset in Maasai Mara" />
                    </div>
                </Slider>
                <div className="hero-section">
                    <h1 className="heroSection-heading">Explore the Wonders of Maasai Mara</h1>
                    <p>Experience the ultimate African safari adventure.</p>
                </div>

                <div className="about-section">
                    <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740558749/field-covered-grass-trees-surrounded-by-zebras-sunlight-sunset_1_vkmqzv.jpg" alt="" className="aboutImage" />
                    <div className="aboutSection-details">
                        <h2>About Maasai Mara</h2>
                        <p>
                            Maasai Mara is one of Africa's greatest wildlife reserves, offering
                            an unparalleled safari experience with abundant wildlife, stunning
                            landscapes, and rich Maasai culture.
                        </p>
                    </div>
                </div>

                <div className="highlights-section">
                    <h2>Tour Highlights</h2>
                    <div className="highlight-section-cards">
                        <div className="highlight-card">
                            <FaCarSide size={60} color="#4d0204" />
                            <p> Exciting Game Drives</p>
                        </div>
                        <div className="highlight-card">
                            <GiLion size={60} color="#4d0204" />
                            <p> Big Five Wildlife Encounters</p>
                        </div>
                        <div className="highlight-card">
                            <FaHotel size={60} color="#4d0204" />
                            <p>Luxury Safari Lodges</p>
                        </div>
                        <div className="highlight-card">
                            <GiElephant size={60} color="#4d0204" />
                            <p>Great Migration Experience</p>
                        </div>
                    </div>
                </div>
                <Itinerary />
                <div id="wildfire-packages" className="wildfire-packages">
                    <h2>Wildfire Packages</h2>
                    <div className="wildfire-package-cards-container">

                        <div className="package-card">
                            <h3>Great Migration Tour</h3>
                            <p><strong>Dates:</strong> 5th to 11th September 2025</p>
                            <p><strong>Duration:</strong> 6N/7D</p>
                            <p><strong>Cost:</strong> USD 2550 per person (Twin Sharing)</p>
                            <button className="btn">View Itinerary</button>
                            <button className="btn book-btn">Book Now</button>
                        </div>

                        <div className="package-card">
                            <h3>Jim Corbett Tour Package</h3>
                            <p><strong>Duration:</strong> 4N/5D</p>
                            <p><strong>Cost:</strong> INR 68,999/- <del>INR 75,999</del> per person</p>
                            <button className="btn">View Itinerary</button>
                            <button className="btn book-btn">Book Now</button>
                        </div>

                        <div className="package-card">
                            <h3>Magical Kenya</h3>
                            <p><strong>Duration:</strong> 5N/6D</p>
                            <p><strong>Cost:</strong> 12-17 yrs: USD 1842 | 18+ yrs: USD 1967</p>
                            <button className="btn">View Itinerary</button>
                            <button className="btn book-btn">Book Now</button>
                        </div>
                    </div>
                </div>

                <TermsAndConditions />
            </div>
        );
    }
}

export default LandingPage;
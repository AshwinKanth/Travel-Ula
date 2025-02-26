import React, { Component } from "react";
import "./index.css";

class BookingForm extends Component {
  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h1 className="formHeading">Book Your Dream Holiday Today</h1>
          <form className="booking-form">
            <div className="input-container">
              <label className="label">Name:</label>
              <input className="input" type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-container">
              <label className="label">Email:</label>
              <input className="input" type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-container">
              <labe className="label"l>Phone:</labe>
              <input className="input" type="tel" placeholder="Enter your phone number" required />
            </div >
            <div className="input-container">
              <label className="label">STAY PREFERENCE:</label>
              <select className="select">
                <option className="option">3 Star</option>
                <option>4 Star</option>
                <option>5 Star</option>
              </select>
            </div>
            <div className="input-container">
              <label className="label">Select Package:</label>
              <select className="select">
                <option className="option">Maasai Mara Safari</option>
                <option>Great Migration Tour</option>
                <option>Jim Corbett Tour</option>
                <option>Magical Kenya</option>
              </select>
            </div>
            <div className="input-container">
              <label className="label">Travel Date:</label>
              <input className="input" type="date" required />
            </div>
            <button className="book-now submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default BookingForm;

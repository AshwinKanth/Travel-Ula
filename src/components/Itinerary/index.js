import React, { Component } from "react";
import "./index.css";

class Itinerary extends Component {
  render() {
    return (
      <div className="itinerary-container">
        <h2 className="itinerary-title">Detailed Itinerary</h2>

        <div className="itinerary-day">
            <div className="data-container">
          <h3>Day 1 - Nov 14th 2023</h3>
          <p>
            Our drivers will pick you up from JKIA airport at 7AM. Board our 4x4 Landcruisers to start your journey to Maasai Mara.
            Enjoy the scenic drive through Nairobi National Park and the breathtaking views of the Great Rift Valley.
          </p>
          </div>
          <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740474510/beautiful-shot-deer-standing-grassy-field-with-blurred-natural_181624-4740_lcddpe.jpg" alt="Nairobi National Park" />
        </div>

        <div className="itinerary-day">
          <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740474688/table-with-two-elephants-two-elephants-background_316032-20570_dx1jdi.jpg" alt="Bush Breakfast in Maasai Mara" />
          <div className="data-container"> 
          <h3>Day 2 - Nov 15th 2023</h3>
          <p>
            Wake up early for a morning game drive. Experience a bush breakfast in the wilderness while observing wildlife in its natural habitat.
            Spot lions, cheetahs, and other animals in their morning routines.
          </p>
          </div>
        </div>

        <div className="itinerary-day">
            <div className="data-container">
          <h3>Day 3 - Nov 16th 2023</h3>
          <p>
            Explore the border of Maasai Mara and Tanzania at the Sand River. Witness the Great Migration paths and enjoy a full-day game drive.
          </p>
          </div>
          <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740474846/big-herd-wildebeest-is-about-mara-river_265142-4845_za8nrc.jpg" alt="Great Migration in Maasai Mara" />
        </div>

        <div className="itinerary-day">
        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1740474914/tents-with-wooden-chairs-pathway-front-them-glamping-nature-greenery-around_1268-18155_o6kpp3.jpg" alt="Safari Camp in Maasai Mara" />
            <div className="data-container">
          <h3>Day 4 - Nov 17th 2023</h3>
          <p>
            Enjoy a relaxed morning at the camp before heading back to Nairobi. Cherish the unforgettable memories of Maasai Mara.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Itinerary;



import React from "react";
import "./index.css";

const termsData = [
  "Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for internal transfers.",
  "Stay at Maasai Mara would be at Zebra Plains, Loyk Camp, or Julia River Camp.",
  "Last day to confirm the tour is August 14th, 2023.",
  "Guests must have valid passports with at least 6 months validity from the date of return.",
  "Yellow fever and oral polio vaccinations are mandatory, taken at least 15 days before travel.",
  "Medical conditions must be disclosed; Travel Unbounded is not liable for any loss or damage.",
  "International travel insurance is required 15 days before departure.",
  "Guests staying in Nairobi prior to the tour must reach JKIA airport at 7 AM on Nov 14th.",
  "Guests staying in Nairobi on Nov 17th must arrange their own transport from JKIA airport.",
  "Lunch on Nov 17th is not included in the package.",
  "Meals are indicated in brackets at the end of each day’s itinerary.",
  "Groups above 5 people can avail special discounts.",
  "Vehicles are for internal transfers and game drives only.",
  "Refer to all terms at www.travelunbounded.com."
];

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h2>Terms and Conditions</h2>
      <div className="terms-grid">
        {termsData.map((term, index) => (
          <div
            key={index}
            className="term-card"
          >
            {term}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;

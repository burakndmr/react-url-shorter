import React from "react";
import BrandIcon from "../Assets/Components/Icons/BrandIcon";
import DetailedIcon from "../Assets/Components/Icons/DetailedIcon";
import CostumizableIcon from "../Assets/Components/Icons/CostumizableIcon";
const Details = () => {
  return (
    <div className="details">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="details-container">
        <div className="line"></div>
        <div className="box">
          <div className="icon-container">
            <BrandIcon />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="box" id="two">
          <div className="icon-container">
            <DetailedIcon />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="box" id="three">
          <div className="icon-container">
            <CostumizableIcon />
          </div>
          <h3>Fully Customable</h3>
          <p>
            Imporve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

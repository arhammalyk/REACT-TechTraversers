import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import green from "../images/green.png";
import "../mycss.css";

function Preslider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="tw-mx-2 tw-my-1 md:tw-hidden">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 pre-carousel-img"
            src={green}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="">
              <h1><b>GreenPal</b></h1>
              <p>
                <i><b>THE NEWEST WAY TO DESIGN YOUR NEW HOME - FOR FREE</b></i>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pre-carousel-img"
            src={green}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1><b>myHouseBy</b></h1>
            <p>
              <i><b>DESIGN YOUR VISION, THEN FIND A BUILDER WHO WILL BRINK IT TO LIFE</b></i>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Preslider;

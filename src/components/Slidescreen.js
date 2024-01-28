import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slideimg from "../images/buildings.jpg";
import slideimg2 from "../images/building.jpg";
import slideimg3 from "../images/anders-jilden-Sc5RKXLBjGg-unsplash.jpg";
import "../mycss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Slidescreen() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slideimg3}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="">
              <h1 className="tw-text-5xl">Turn Your Vision to Product</h1>
              <p className="tw-my-8">
                Not your average coders, we bring more to the table than just
                good skills. Here to help you bring innovation to your business
                with our custom software development services.
              </p>

              <button className="tw-transition-all tw-duration-500 tw-mt-8 tw-py-3 tw-px-2 tw-bg-[#02d463] tw-rounded hover:tw-bg-transparent hover:tw-text-[#02d463] tw-border tw-border-[#02d463] hover:tw-border hover:tw-border-[#02d463]">
                LET'S TALK ABOUT YOUR PROJECT{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} className="tw-mx-2" />
                </span>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slideimg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="tw-text-5xl">Turn Your Vision to Product</h1>
            <p className="tw-my-8">
              Not your average coders, we bring more to the table than just good
              skills. Here to help you bring innovation to your business with
              our custom software development services.
            </p>
            <button className="tw-transition-all tw-duration-500 tw-mt-8 tw-py-3 tw-px-2 tw-bg-[#02d463]  tw-rounded hover:tw-bg-transparent hover:tw-text-[#02d463] tw-border tw-border-[#02d463] hover:tw-border hover:tw-border-[#02d463]">
              LET'S TALK ABOUT YOUR PROJECT
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="tw-mx-2" />
              </span>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slideimg}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="tw-text-5xl">Turn Your Vision to Product</h1>
            <p className="tw-my-8">
              Not your average coders, we bring more to the table than just good
              skills. Here to help you bring innovation to your business with
              our custom software development services.
            </p>
            <button className="tw-transition-all tw-duration-500 tw-mt-8 tw-py-3 tw-px-2 tw-bg-[#02d463] tw-rounded hover:tw-bg-transparent hover:tw-text-[#02d463] tw-border tw-border-[#02d463] hover:tw-border hover:tw-border-[#02d463]">
              LET'S TALK ABOUT YOUR PROJECT
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="tw-mx-2" />
              </span>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slidescreen;

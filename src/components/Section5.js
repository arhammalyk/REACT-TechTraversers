import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import googlelogo from "../images/section5/google.svg";
import clutchlogo from "../images/section5/clutch.svg";

const Section5 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="tw-bg-gray-50 container tw-my-10 md:tw-flex">
        <div className="left tw-text-start md:tw-w-1/2">
          <h2 className="tw-font-semibold tw-mt-8">Reviews</h2>
          <h2 className="tw-my-5 tw-font-bold tw-text-2xl">
            <span className="tw-font-extrabold">Take a Peek at</span> What our
            Clients are Saying
          </h2>
          <p className="tw-text-gray-500">
            Our clients are our biggest advocates, they have nothing but good
            things to say about us
          </p>
          <h1 className="tw-mt-10 tw-text-2xl tw-text-[#10375c]">
            Read More
            <span className="tw-font-extrabold tw-text-[#10375c]">Reviews</span>
          </h1>
          <div className="logos tw-flex tw-justify-start">
            <div className="">
              <img
                className="tw-cursor-pointer tw-w-52"
                src={clutchlogo}
                alt=""
              />
            </div>
            <div className="">
              <img className="tw-cursor-pointer" src={googlelogo} alt="" />
            </div>
          </div>
        </div>
        <div className="right md:tw-w-1/2 md:tw-mt-10">
          <div className="">
            <Carousel slide activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100 tw-h-50"
                  src={clutchlogo}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 tw-h-50"
                  src={clutchlogo}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;

import React from "react";
import { useState } from "react";
import img1 from "../images/section2/section2img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import img2 from "../images/section2/section2img2.png";
// import img3 from "../images/section2/section2img3.png";
import gradient from "../images/section2/gradient.jpg";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  return (
    <>
      <div className="container md:tw-flex tw-mb-24">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="tw-group tw-inline-block tw-mx-2"
        >
          <div className="tw-relative">
            <img className="" src={img1} alt="" />
            <div className="tw-transition-all tw-duration-500 tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-opacity-0 group-hover:tw-opacity-100">
              <img src={gradient} alt="" className="tw-w-full" />
              <h1 className="tw-font-semibold tw-absolute tw-left-5 tw-top-28 tw-text-white tw-text-sm">
                TMaximize transparency, predictability and minimize risks by
                choosing a fixed price project with us. We guarantee on-time
                delivery, quality and value.
              </h1>
            </div>
            <h1 className="tw-absolute tw-top-5 tw-left-6 tw-font-bold tw-text-white tw-text-3xl">
              Fixed Price Project
            </h1>
            <button className=" tw-bg-[#02d463] tw-absolute tw-bottom-0 tw-text-white tw-p-5">
              {isHovered ? (
                "Explore More ➜"
              ) : (
                <span>
                  <FontAwesomeIcon icon={faAnglesUp} className="tw-mx-2" />
                </span>
              )}
            </button>
          </div>
        </div>
        <div
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="tw-group tw-inline-block tw-mx-2"
        >
          <div className="tw-relative">
            <img className="" src={img1} alt="" />
            <div className="tw-transition-all tw-duration-500 tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-opacity-0 group-hover:tw-opacity-100">
              <img src={gradient} alt="" className="tw-w-full tw-h-auto" />
              <h1 className="tw-font-semibold tw-absolute tw-left-5 tw-top-28 tw-text-white tw-text-sm">
                Expand your in-house team with our hosted team extension
                services. Leverage our expertise to cut costs while maintaining
                full control over the project.
              </h1>
            </div>
            <h1 className="tw-absolute tw-top-5 tw-left-8 tw-font-bold tw-text-white tw-text-3xl">
              Hosted Team Extention
            </h1>
            <button className="tw-bg-[#02d463] tw-absolute tw-bottom-0 tw-text-white tw-p-5">
              {isHovered2 ? (
                "Explore More ➜"
              ) : (
                <span>
                  <FontAwesomeIcon icon={faAnglesUp} className="tw-mx-2" />
                </span>
              )}
            </button>
          </div>
        </div>
        <div
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          className="tw-group tw-inline-block tw-mx-2"
        >
          <div className="tw-relative">
            <img src={img1} alt="" />
            <div className="tw-transition-all tw-duration-500 tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-opacity-0 group-hover:tw-opacity-100">
              <img src={gradient} alt="" className="tw-w-full tw-h-auto" />
              <h1 className="tw-font-semibold tw-absolute tw-left-5 tw-top-28 tw-text-white tw-text-sm">
                Get a highly skilled and dedicated team that works exclusively
                on your project with our dedicated team model. Flexibility,
                transparency and cost-efficiency guaranteed.
              </h1>
            </div>
            <h1 className="tw-absolute tw-top-5 tw-left-8 tw-font-bold tw-text-white tw-text-3xl">
              Dedicated Team Model
            </h1>
            <button className=" tw-bg-[#02d463] tw-absolute tw-bottom-0 tw-text-white tw-p-5">
              {isHovered3 ? (
                "Explore More ➜"
              ) : (
                <span>
                  <FontAwesomeIcon icon={faAnglesUp} className="tw-mx-2" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

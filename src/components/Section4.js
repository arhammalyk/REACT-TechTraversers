import React, { useState } from "react";
import img1 from "../images/section4/section4i1.png";
import img2 from "../images/section4/section4i2.png";
import img3 from "../images/section4/section4i3.png";
import img4 from "../images/section4/section4i4.png";
import img5 from "../images/section4/section4i5.png";
import img6 from "../images/section4/section4i6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Section4 = () => {
  const [card1, setcard1] = useState(false);
  const [card2, setcard2] = useState(false);
  const [card3, setcard3] = useState(false);
  const [card4, setcard4] = useState(false);
  const [card5, setcard5] = useState(false);
  const [card6, setcard6] = useState(false);
  const handlemouseenter1 = () => {
    setcard1(true);
  };
  const handlemouseleave1 = () => {
    setcard1(false);
  };
  const handlemouseenter2 = () => {
    setcard2(true);
  };
  const handlemouseleave2 = () => {
    setcard2(false);
  };
  const handlemouseenter3 = () => {
    setcard3(true);
  };
  const handlemouseleave3 = () => {
    setcard3(false);
  };
  const handlemouseenter4 = () => {
    setcard4(true);
  };
  const handlemouseleave4 = () => {
    setcard4(false);
  };
  const handlemouseenter5 = () => {
    setcard5(true);
  };
  const handlemouseleave5 = () => {
    setcard5(false);
  };
  const handlemouseenter6 = () => {
    setcard6(true);
  };
  const handlemouseleave6 = () => {
    setcard6(false);
  };
  return (
    <div className="tw-bg-[#10375c]">
      <h1 className="container tw-pt-5 tw-text-xl tw-text-white">Portfolio</h1>
      <div className="container tw-py-12 md:tw-flex">
        <div className="left md:tw-w-1/2">
          <h1 className="tw-text-3xl tw-font-semibold tw-text-white">
            Some of the projects we recently worked on
          </h1>
        </div>
        <div className="right md:tw-w-1/2">
          <h1 className="tw-text-gray-500">
            Please check out our portfolio of custom software development, web,
            mobile app & software testing services.
          </h1>
        </div>
      </div>

      {/* cards */}
      <div className="tw-pb-20 tw-mx-3">
        <div className="md:tw-flex">
          <div
            onMouseEnter={handlemouseenter1}
            onMouseLeave={handlemouseleave1}
            className="md:tw-relative container md:tw-w-1/2 tw-my-1 md:tw-mx-2 tw-bg-[#0a9af4] tw-w-full tw-h-72"
          >
            <img
              className={`${
                card1 ? "tw-scale-x-110 tw-scale-y-110" : ""
              } tw-transform tw-origin-center tw-transition-all tw-duration-500 md:tw-absolute sm:tw-bottom-0 md:tw-right-2 md:tw-top-6`}
              src={img1}
              alt=""
            />
            <h1 className="md:tw-absolute md:tw-bottom-28 tw-text-white tw-font-bold tw-text-2xl">
              zentap
            </h1>
            <p className="md:tw-absolute md:tw-bottom-16 tw-text-white tw-text-sm">
              Created a streamlined marketing software tool for Zentap that
              helps their clients in higher lead acquisition and improved
              business outcomes.
            </p>
          </div>
          <div className="md:tw-w-1/2 md:tw-flex">
            <div
              onMouseEnter={handlemouseenter2}
              onMouseLeave={handlemouseleave2}
              className="tw-relative container md:tw-w-1/2 tw-my-1 tw-bg-[#000000] tw-w-full tw-h-72"
            >
              <img
                className={`${
                  card2 ? "tw-scale-x-110 tw-scale-y-110" : ""
                } tw-p-5 tw-transform tw-origin-center tw-transition-all tw-duration-500`}
                src={img2}
                alt=""
              />
              <h1 className="tw-absolute tw-bottom-28 tw-text-white tw-font-bold tw-text-2xl">
                Mosaic.io
              </h1>
              <p className="tw-absolute tw-bottom-12 tw-text-white tw-text-sm">
                Developed a custom API for Mosaic that provides institutions
                with blockchain and research they need
              </p>
            </div>
            <div
              onMouseEnter={handlemouseenter3}
              onMouseLeave={handlemouseleave3}
              className="tw-relative container md:tw-mx-2 md:tw-w-1/2 tw-my-1 tw-bg-gradient-to-r tw-from-[#a33e8f] tw-to-[#e46a1e] tw-w-full tw-h-72"
            >
              <img
                className={` ${
                  card3 ? "tw-scale-x-110 tw-scale-y-110" : ""
                } tw-p-5 tw-transform tw-origin-center tw-transition-all tw-duration-500`}
                src={img3}
                alt=""
              />
              <h1 className="md:tw-absolute md:tw-bottom-28 tw-text-white tw-font-bold tw-text-xl">
                Scholar Raise
              </h1>
              <p className="md:tw-absolute md:tw-bottom-16 tw-text-white tw-text-sm">
                Scholar Raise puts college savings within your reach
              </p>
            </div>
          </div>
        </div>

        <div className="md:tw-flex">
          <div className="md:tw-w-1/2 md:tw-flex">
            <div
              onMouseEnter={handlemouseenter4}
              onMouseLeave={handlemouseleave4}
              className="tw-relative container md:tw-mx-2 md:tw-w-1/2 tw-my-1 tw-bg-[#ffffff] tw-w-full tw-h-72"
            >
              <img
                className={` ${
                  card4 ? "tw-scale-x-110 tw-scale-y-110" : ""
                } tw-p-5 tw-transform tw-origin-center tw-transition-all tw-duration-500`}
                src={img4}
                alt=""
              />
              <h1 className="md:tw-absolute md:tw-bottom-28 tw-text-[#10375c] tw-font-bold tw-text-xl">
                <span className="tw-font-extrabold">My</span>Houseby
              </h1>
              <p className="md:tw-absolute md:tw-bottom-16 tw-text-[#10375c] tw-text-sm">
                Free Shipping & Free Returns. Shopbop Moves: Our High-Style
                Active Edit.
              </p>
            </div>
            <div
              onMouseEnter={handlemouseenter5}
              onMouseLeave={handlemouseleave5}
              className="tw-relative container md:tw-w-1/2 tw-my-1 tw-bg-gradient-to-r tw-from-[#a33e8f] tw-to-[#e46a1e] tw-w-full tw-h-72"
            >
              <img
                className={` ${
                  card5 ? "tw-scale-x-110 tw-scale-y-110" : ""
                } tw-p-5 tw-transform tw-origin-center tw-transition-all tw-duration-500`}
                src={img5}
                alt=""
              />
              <h1 className="md:tw-absolute md:tw-bottom-28 tw-text-white tw-font-bold tw-text-xl">
                Shopbop
              </h1>
              <p className="md:tw-absolute md:tw-bottom-16 tw-text-white tw-text-sm">
                Top designer apparel, shoes, accessories and more
              </p>
            </div>
          </div>
          <div
            onMouseEnter={handlemouseenter6}
            onMouseLeave={handlemouseleave6}
            className="tw-relative container md:tw-mx-2 md:tw-w-1/2 tw-my-1 tw-bg-gradient-to-r tw-from-[#113664] tw-to-[#647bcb] tw-w-full tw-h-72"
          >
            <img
              className={` ${
                card6 ? "tw-scale-x-110 tw-scale-y-110" : ""
              } md:tw-absolute md:tw-right-0 md:tw-top-6 tw-transform tw-origin-center tw-transition-all tw-duration-500`}
              src={img6}
              alt=""
            />
            <h1 className="md:tw-absolute md:tw-bottom-20 tw-text-white tw-font-bold tw-text-xl">
              GreenPal
            </h1>
            <p className="md:tw-absolute md:tw-bottom-8 tw-text-white tw-text-sm">
              Get next day lawn care and Simplify Your Life. GreenPal is an
              online freelancing platform that connects landscapers to clients
              in the United States.
            </p>
          </div>
        </div>
      </div>
      <p type="button" className="hover:tw-text-[#02d463] hover:tw-underline tw-mr-7 tw-pb-5 tw-text-white tw-text-end">
        See More Projects <span> <FontAwesomeIcon icon={faCircleArrowRight} className="tw-mx-2" /></span>
      </p>
    </div>
  );
};

export default Section4;

import React from "react";
import img from "../images/section6/section6img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Section6 = () => {
  return (
    <div className="tw-bg-[#10375c] md:tw-flex">
      <div className="container tw-pt-20 tw-w-full md:tw-w-1/2">
        <div className="tw-text-white tw-my-5">
          <p className="tw-text-xl">Ready to Get Started?</p>
          <p className="tw-text-3xl">
            Secure your free 30-minute call with one of our experts today
          </p>
          <p className="my-2">
            Get the best working experience, a truely stress free working
            experience.
          </p>
        </div>
        <div>
          <button className="tw-transition-all tw-duration-500 tw-px-11 tw-my-12 tw-text-white tw-py-3 tw-bg-[#02d463] hover:tw-bg-transparent hover:tw-text-[#02d463] tw-border tw-border-[#02d463] hover:tw-border hover:tw-border-[#02d463]">
            LET'S TALK <span>
                  <FontAwesomeIcon icon={faArrowRight} className="tw-mx-2" />
                </span>
          </button>
        </div>
      </div>
      <div className="tw-mr-24 md:tw-flex md:tw-justify-end tw-hidden tw-w-full md:tw-w-1/2">
        <img className="tw-mt-12 tw-h-4/5" src={img} alt="" />
      </div>
    </div>
  );
};

export default Section6;

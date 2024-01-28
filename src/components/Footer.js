import React from "react";
import fb from "../images/footerlogos/facebooklogo.png";
import insta from "../images/footerlogos/Instagram-Logo-500x281.png";
import li from "../images/footerlogos/linkedin-icon-logo-png-transparent.png";
// import tech from "../images/tech.png";

const Footer = () => {
  return (
    <>
      <div className="tw-bg-[#0d2c4a]">
        <div className="tw-text-white tw-flex tw-justify-center md:tw-justify-start md:tw-ml-20">
          <h1 className="tw-font-semibold tw-text-2xl tw-mt-11">
            Tech Traversers
          </h1>
          {/* <img src={tech} alt="" /> */}
        </div>
        <div className="md:tw-flex ">
          <div className="md:tw-w-1/2 tw-my-10 tw-text-white">
            <p className="tw-flex tw-justify-center tw-mx-7">
              US Office: 5900 Princess Garden Pkwy #400 Lanham, MD 20706, USA
            </p>
            <p className="tw-flex tw-justify-center">+1410 497 8561</p>
            <p className="tw-flex tw-justify-center">info@visnext.com</p>
          </div>
          <div className="md:tw-w-1/2">
            <div className="tw-text-white tw-underline tw-my-9 md:tw-flex tw-justify-end">
              <h3 className="md:tw-mx-2 tw-my-2 tw-flex tw-justify-center hover:tw-text-[#02d463] tw-cursor-pointer">
                Our Services
              </h3>
              <h3 className="md:tw-mx-2 tw-my-2 tw-flex tw-justify-center hover:tw-text-[#02d463] tw-cursor-pointer">
                Why Choose Us
              </h3>
              <h3 className="md:tw-mx-2 tw-my-2 tw-flex tw-justify-center hover:tw-text-[#02d463] tw-cursor-pointer">
                Work We Did
              </h3>
              <h3 className="md:tw-mx-2 tw-my-2 tw-flex tw-justify-center hover:tw-text-[#02d463] tw-cursor-pointer">
                Resources
              </h3>
              <h3 className="md:tw-mx-2 tw-my-2 tw-flex tw-justify-center hover:tw-text-[#02d463] tw-cursor-pointer">
                Contact Us Now
              </h3>
            </div>
          </div>
        </div>
        <div className="md:tw-flex">
          <div className="md:tw-w-1/2 tw-my-10 tw-text-white tw-flex tw-justify-center">
            <p className="tw-mb-5 tw-mx-7">
              2023 Tech Traversers. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="md:tw-w-1/2 tw-text-white md:tw-mr-10">
            <h1 className="tw-flex tw-justify-center md:tw-justify-end">
              Follow Us.
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-end">
              <div className="tw-flex tw-justify-center md:tw-justify-end">
                <img className="tw-w-16 tw-my-2 tw-cursor-pointer" src={fb} alt="facebook logo" />
              </div>
              <div className="tw-flex tw-justify-center md:tw-justify-end">
                <img className="tw-w-16 tw-my-2 tw-cursor-pointer" src={insta} alt="instagram logo" />
              </div>
              <div className="tw-flex tw-justify-center md:tw-justify-end">
                <img className="tw-w-10 tw-my-2 tw-ml-3 tw-cursor-pointer" src={li} alt="linkedin logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import brainstorming from "../images/section1/brainstrormimg.svg";
import consulting from "../images/section1/consultationimg.svg";
import emerging from "../images/section1/emergingimg.svg";
import mobile from "../images/section1/mobileimg.svg";
import production from "../images/section1/productimg.svg";
import support from "../images/section1/supportimg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Section1 = () => {
  return (
    <>
      <div>
        <div className="container tw-my-10">
          <h1 className="tw-mb-2 tw-text-2xl">
            <b>Experts in every aspect of the product lifecycle</b>
          </h1>
          <p className="tw-text-gray-500">Delivering Experiences that Matter</p>
        </div>
        <div className="tw-flex tw-flex-wrap tw-justify-center">
          <div className="tw-mx-2 tw-w-full sm:tw-w-2/5 md:tw-w-30 tw-rounded tw-my-2 tw-border tw-border-gray-200 tw-p-5  hover:tw-border hover:tw-border-[#02d463]">
            <img src={consulting} alt="" />
            <h2 className="tw-my-3 tw-text-lg tw-text-gray-950">
              Consultation
            </h2>
            <li className="tw-text-gray-500">Digital Transformation</li>
            <li className="tw-text-gray-500">Product Strategy</li>
            <li className="tw-text-gray-500"> Application Re-engineering</li>
            <li className="tw-text-gray-500">Branding</li>
          </div>
          <div className="tw-mx-2 tw-w-full sm:tw-w-2/5 md:tw-w-30 tw-my-2 tw-border tw-border-gray-200 tw-p-5 hover:tw-border hover:tw-border-[#02d463]">
            <img src={brainstorming} alt="" />
            <h2 className="tw-my-3 tw-text-lg tw-text-gray-950">
              Brainstorming and Analysis
            </h2>
            <li className="tw-text-gray-500">UX Review </li>
            <li className="tw-text-gray-500">Research and Development </li>
            <li className="tw-text-gray-500"> Product Validation Sprint</li>
            <li className="tw-text-gray-500">Product Design Sprint/li</li>
          </div>
          <div className="tw-mx-2 tw-w-full sm:tw-w-2/5 md:tw-w-30 tw-my-2 tw-border tw-border-gray-200 tw-p-5 hover:tw-border hover:tw-border-[#02d463]">
            <img src={production} alt="" />
            <h2 className="tw-my-3 tw-text-lg tw-text-gray-950">
              Product Design
            </h2>
            <li className="tw-text-gray-500">UI/UX Design </li>
            <li className="tw-text-gray-500">Custom Software Development </li>
            <li className="tw-text-gray-500">
              {" "}
              Cloud Application Development{" "}
            </li>
            <li className="tw-text-gray-500">DevOps</li>
          </div>
          <div className="tw-mx-2 tw-w-full sm:tw-w-2/5 md:tw-w-30 tw-my-2 tw-border tw-border-gray-200 tw-p-5 hover:tw-border hover:tw-border-[#02d463]">
            <img src={mobile} alt="" />
            <h2 className="tw-my-3 tw-text-lg tw-text-gray-950">
              Mobile and Web Development
            </h2>
            <li className="tw-text-gray-500">IOS</li>
            <li className="tw-text-gray-500">Web Development</li>
            <li className="tw-text-gray-500"> E-commerce and Shopping cart</li>
          </div>
          <div className="tw-mx-2 tw-w-full sm:tw-w-2/5 md:tw-w-30 tw-my-2 tw-border tw-border-gray-200 tw-p-5 hover:tw-border hover:tw-border-[#02d463]">
            <img src={emerging} alt="" />
            <h2 className="tw-my-3 tw-text-lg tw-text-gray-950">
              Emerging Technologies
            </h2>
            <li className="tw-text-gray-500">Data Science and AI </li>
            <li className="tw-text-gray-500">Blockchain </li>
            <li className="tw-text-gray-500"> Salesforce</li>
          </div>
          <div className="tw-mx-2 tw-w-full sm:tw-w-2/5 md:tw-w-30 tw-my-2 tw-border tw-border-gray-200 tw-p-5 hover:tw-border hover:tw-border-[#02d463]">
            <img src={support} alt="" />
            <h2 className="tw-my-3 tw-text-lg tw-text-gray-950">
              Support and Maintenance
            </h2>
            <li className="tw-text-gray-500">Agile Project Management</li>
            <li className="tw-text-gray-500">Product Management </li>
            <li className="tw-text-gray-500">Quality Assurance Testing</li>
            <li className="tw-text-gray-500">Cybersecurity</li>
          </div>
        </div>
        <div className="tw-flex tw-justify-center">
          <button className="tw-transition-all tw-duration-500 tw-font-bold tw-my-12 tw-p-3 tw-border tw-border-[#02d463] hover:tw-border hover:tw-border-[#02d463] hover:tw-text-[#ffffff] hover:tw-bg-[#02d463]">
            VIEW ALL SERVICES{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="tw-mx-2" />
            </span>
          </button>
        </div>

        <div className="tw-text-center md:tw-flex tw-my-11">
          <div className="md:tw-w-1/2">
            <h1 className="tw-text-2xl tw-font-bold">
              Working with visnext is simple
            </h1>
          </div>
          <div className="md:tw-w-1/2">
            <p className="tw-text-gray-500">
              VisNext provides custom software development services to all
              business domains. Here are our Distinguished business models.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;

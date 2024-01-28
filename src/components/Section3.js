import React from "react";
import img from "../images/section3img.png";
import t1 from "../images/section3/section3t1.svg";
import t2 from "../images/section3/section3t2.svg";
import t3 from "../images/section3/section3t3.svg";
import t4 from "../images/section3/section3t4.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

const Section3 = () => {
  return (
    <>
      <div>
        <div className="md:tw-flex">
          <div className="tw-mx-3 md:tw-w-1/2">
            <p className="tw-text-lg tw-my-1 tw-relative">
              Why Tech Traversers
              <span>
                <FontAwesomeIcon icon={faCode} className="tw-mx-2" />
              </span>
            </p>
            <h1 className="tw-font-bold tw-text-2xl my-2">Why choose us ?</h1>
            <p className="tw-my-4 tw-text-gray-500">
              VisNext is the partner of choice for many enterprises, SMEs and
              technology challengers around the world.
            </p>
            {/* display none on small screen */}
            <div className="tw-hidden sm:tw-block">
              <div className="tw-flex tw-my-5">
                <div className="tw-mx-5">
                  <img src={t1} alt="" />
                </div>
                <div>
                  <h1 className="tw-font-bold tw-text-lg">
                    Exceptionally skilled professionals
                  </h1>
                  <p className="tw-text-gray-500">
                    Top-notch engineers and domain experts Expert-level team
                    members.
                  </p>
                </div>
              </div>
              <div className="tw-flex tw-my-5">
                <div className="tw-mx-5">
                  <img src={t2} alt="" />
                </div>
                <div>
                  <h1 className="tw-font-bold tw-text-lg">
                    Agile team management
                  </h1>
                  <p className="tw-text-gray-500">
                    Quick adaptability to project needs Streamlined team
                    scaling.
                  </p>
                </div>
              </div>
              <div className="tw-flex tw-my-5">
                <div className="tw-mx-5">
                  <img src={t3} alt="" />
                </div>
                <div>
                  <h1 className="tw-font-bold tw-text-lg">
                    Rapid talent acquisition
                  </h1>
                  <p className="tw-text-gray-500">
                    Expedite hiring timeline Quick turnaround for talent
                    replacement.
                  </p>
                </div>
              </div>
              <div className="tw-flex tw-my-5">
                <div className="tw-mx-5">
                  <img src={t4} alt="" />
                </div>
                <div>
                  <h1 className="tw-font-bold tw-text-lg">
                    Satisfaction Guaranteed
                  </h1>
                  <p className="tw-text-gray-500">
                    Client-focused approach Talent replacement assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:tw-w-1/2">
            <img className="tw-w-auto" src={img} alt="" />
          </div>
        </div>

        {/* hide on medium screens */}
        <div className="md:tw-hidden">
          <div className="tw-flex tw-my-5">
            <div className="tw-mx-5">
              <img src={t1} alt="" />
            </div>
            <div>
              <h1 className="tw-font-bold tw-text-lg">
                Exceptionally skilled professionals
              </h1>
              <p className="tw-text-gray-500">
                Top-notch engineers and domain experts Expert-level team
                members.
              </p>
            </div>
          </div>
          <div className="tw-flex tw-my-5">
            <div className="tw-mx-5">
              <img src={t2} alt="" />
            </div>
            <div>
              <h1 className="tw-font-bold tw-text-lg">Agile team management</h1>
              <p className="tw-text-gray-500">
                Quick adaptability to project needs Streamlined team scaling.
              </p>
            </div>
          </div>
          <div className="tw-flex tw-my-5">
            <div className="tw-mx-5">
              <img src={t3} alt="" />
            </div>
            <div>
              <h1 className="tw-font-bold tw-text-lg">
                Rapid talent acquisition
              </h1>
              <p className="tw-text-gray-500">
                Expedite hiring timeline Quick turnaround for talent
                replacement.
              </p>
            </div>
          </div>
          <div className="tw-flex tw-my-5">
            <div className="tw-mx-5">
              <img src={t4} alt="" />
            </div>
            <div>
              <h1 className="tw-font-bold tw-text-lg">
                Satisfaction Guaranteed
              </h1>
              <p className="tw-text-gray-500">
                Client-focused approach Talent replacement assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

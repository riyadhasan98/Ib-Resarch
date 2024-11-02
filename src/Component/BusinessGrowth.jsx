import React from "react";
import b1 from "../icons/b1.svg";
import b2 from "../icons/b2.svg";
import b3 from "../icons/b3.svg";
import chart from "../images/chart.png";

function BusinessGrowth() {
  return (
    <>
      <section className="mt-8 md:mt-16 lg:mt-28">
        <div className="cus-container">
          <div className="">
            <div className="space-y-4 lg:space-y-0 lg:flex justify-between items-center">
              <div className="space-y-3 md:space-y-6">
                <h2 className="heading-text text-white leading-8">
                  Business Growth For Using AI
                </h2>
                <p className="para-text text-white">
                  Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                  vel sodales sed nibh ut.
                </p>
              </div>
              <button className="font-inter font-semibold bg-[#00F7FF] py-3 px-5 rounded-full">
                Using AI Tool
              </button>
            </div>

            <div className="mt-6 md:mt-10 lg:mt-14 lg:flex justify-between relative">
              <div className="left cus-bg space-y-4 w-fit h-fit py-6 px-6 mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 w-fit py-5 px-6 text-black rounded-[20px] bg-[#00F7FF]">
                  <img src={b1} alt="" />
                  <p className="font-medium font-inter text-[24px]">
                    Understand Reasons For Contacts
                  </p>
                </div>
                <div className="flex items-center space-x-2 w-fit py-5 px-6 bg-white bg-opacity-[0.02] text-white rounded-[20px]  hover:bg-[#00F7FF] hover:bg-opacity-100 hover:text-black">
                  <img src={b2} alt="" />
                  <p className="font-medium font-inter text-[24px]">
                    Know Which Changes To Prioritise
                  </p>
                </div>
                <div className="flex items-center space-x-2 w-fit py-5 px-6 bg-white bg-opacity-[0.02] text-white rounded-[20px]  hover:bg-[#00F7FF] hover:bg-opacity-100 hover:text-black">
                  <img src={b3} alt="" />
                  <p className="font-medium font-inter text-[24px]">
                    Identify Changing Customer needs
                  </p>
                </div>
              </div>
              <div className="w-fit mt-8 mx-auto lg:mx-0">
                <img src={chart} alt="" />
              </div>
            </div>
            <div className="absolute -bottom-[1500px] left-[900px] hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="193"
                viewBox="0 0 93 193"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M0 96.1649H25.3572C39.1643 96.1649 50.3571 84.972 50.3571 71.1649V26C50.3571 12.1929 61.55 1 75.3571 1H93"
                    stroke="white"
                    stroke-dasharray="4 3"
                  />
                  <path
                    d="M0 96.1649H25.5903C39.3974 96.1649 50.5903 107.358 50.5903 121.165V167C50.5903 180.807 61.7832 192 75.5903 192H93"
                    stroke="white"
                    stroke-dasharray="4 3"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessGrowth;

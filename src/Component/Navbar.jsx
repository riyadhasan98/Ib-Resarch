import React, { useState } from "react";
import { useRef } from "react";
import logo from "../images/logo.png";
import x from "../icons/X.svg";
import menu from "../icons/MenuOutline.svg";

import { Dropdown } from "flowbite-react";

function Navbar() {
  let mobileNav = useRef();
  

  const show = () => {
    mobileNav.current.classList.remove("hidden");
  };
  const hide = () => {
    mobileNav.current.classList.add("hidden");
  };
  return (
    <>
      <section className="py-3 md:py-5">
        <div className="cus-container max-sm:relative">
          <div className="flex justify-between items-center">
            <div>
              <img className="max-sm:w-[100px]" src={logo} alt="" />
            </div>
            <div ref={mobileNav} className="hidden lg:block">
              <ul className="bg-white lg:bg-transparent max-sm:w-fit p-5 max-sm:absolute md:absolute right-0 -top-0 lg:flex lg:text-white lg:space-x-8 space-y-3 z-30 lg:relative ">
                <img
                  onClick={hide}
                  className="lg:hidden relative left-12 bottom-3"
                  src={x}
                  alt=""
                />
                <li className="hover:text-gray-300 font-inter">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-gray-300 font-inter">
                  <a href="#">Movies</a>
                </li>
                <li className="hover:text-gray-300 font-inter">
                  <a href="#">Tv Shows</a>
                </li>
                <li className="hover:text-gray-300 font-inter">
                  <a href="#">Sports</a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <img onClick={show} src={menu} alt="" />
            </div>
            <div className="hidden lg:flex lg:items-center">
              <button className="bg-[#00F7FF] rounded-full py-[12px] px-[25px] text-black font-medium font-inter">
                Get In Touch
              </button>

              <Dropdown className="w-fit" label="EN" dismissOnClick={false}>
                <Dropdown.Item>Germany</Dropdown.Item>
                <Dropdown.Item>France</Dropdown.Item>
                <Dropdown.Item>Chiness</Dropdown.Item>
                
              </Dropdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;

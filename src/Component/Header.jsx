import React from 'react'
import laptop from '../images/Laptop.png'
import b1 from '../images/b1.png'
import b2 from "../images/b2.png";
import b3 from "../images/b3.png";
import b4 from "../images/b4.png";
import b5 from "../images/b5.png";

function Header() {
  return (
    <>
      <section className="mt-8 md:mt-12 lg:mt-20 relative">
        <div className="cus-container">
          <div className="relative z-10">
            <div className="space-y-3 md:space-y-5 lg:mt-32">
              <h1 className="text-[32px] md:text-[48px] lg:text-[76px] font-raleway font-extrabold md:w-[540px] lg:w-[841px] text-center mx-auto leading-10 md:leading-[56px] lg:leading-[92px] text-white">
                <span className="text-[#00F7FF]">Simplified Methods</span> for
                Efficient Workflow
              </h1>
              <p className="text-white text-center font-inter md:text-[18px] lg:w-[684px] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Tempus mauris magna
                fringilla aliquet feugiat ac quam risus.
              </p>
            </div>
            <div className="">
              <img className="mx-auto" src={laptop} alt="" />
            </div>

            <div className="flex items-center space-x-16 w-fit mx-auto mt-10 md:mt-16 lg:mt-20">
              <img src={b1} alt="" />
              <img src={b2} alt="" />
              <img className="max-sm:hidden " src={b3} alt="" />
              <img
                className="max-sm:hidden md:hidden lg:block"
                src={b4}
                alt=""
              />
              <img
                className="max-sm:hidden md:hidden lg:block"
                src={b5}
                alt=""
              />
            </div>
          </div>
          <div className="w-[240px] h-[240px] bg-[#00F7FF] rounded-full blur-[217px] opacity-50  absolute right-[155px] top-20 z-0"></div>
          <div className="max-sm:hidden w-[180px] h-[180px] bg-[#0148FB] rounded-full blur-[152px] opacity-[43px] absolute top-[430px] left-[200px] z-0"></div>
        </div>
      </section>
    </>
  );
}

export default Header

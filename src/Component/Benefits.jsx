import React from "react";
import icon1 from "../icons/icon1.svg";
import icon2 from "../icons/icon2.svg";
import icon3 from "../icons/icon3.svg";
import icon4 from "../icons/icon4.svg";

function Benefits() {
  return (
    <>
      <section className="mt-10 md:mt-20 lg:mt-24">
        <div className="cus-container">
          <div className="lg:w-[990px] mx-auto relative z-10">
            <div>
              <h2 className="heading-text text-center text-white">
                The Benefits of Choosing Kipper
              </h2>
              <p className="para-text text-white md:w-[550px] lg:w-[659px] text-center mx-auto mt-2 md:mt-5">
                Lorem ipsum dolor sit amet consectetur. Dui mi sit ullamcorper
                neque cursus interdum. Mattis nullam ipsum faucibus amet.
              </p>
            </div>

            <div className="grid-res-cols gap-0 mt-8 lg:mt-12">
              {[
                {
                  id: 1,
                  pic: icon1,
                  heading: "Work done 10X Faster",
                  text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.",
                },
                {
                  id: 1,
                  pic: icon2,
                  heading: "Get Better Grades",
                  text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.",
                },
                {
                  id: 1,
                  pic: icon3,
                  heading: "Learning Experience",
                  text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.",
                },
                {
                  id: 1,
                  pic: icon4,
                  heading: "100% Risk Free Trial",
                  text: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.",
                },
              ].map(({ id, pic, heading, text }) => {
                return (
                  <div key={id} className="grid-card-2 mx-auto">
                    <div className="w-fit flex items-start space-x-5 content-center  py-3 px-5 md:py-16 md:px-12 cus-card">
                      <img src={pic} alt="" />
                      <div className="space-y-3">
                        <h3 className="w-[292px] font-raleway text-white text-[20px] md:text-[28px] font-semibold">
                          {heading}
                        </h3>
                        <p className="para-text text-white w-[260px] md:w-[340px]">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-sm:hidden w-[240px] h-[240px] bg-[#12B757] rounded-full blur-[217px] opacity-[43px] z-0 absolute top-[1350px] -left-64"></div>
      </section>
    </>
  );
}

export default Benefits;

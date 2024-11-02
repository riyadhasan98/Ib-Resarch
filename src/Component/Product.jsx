import React, { useState } from 'react'
import product from '../icons/product.svg'
import p1 from '../icons/p1.svg'
import p2 from "../icons/p2.svg";
import p3 from "../icons/p3.svg";
import p4 from "../icons/p4.svg";
import p5 from "../icons/p5.svg";
import p6 from "../icons/p6.svg";
import gradient from '../images/Gradient mask.png'

function Product() {
    const [clickToHide, setClickToHide] = useState(false)
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <div className="space-y-5 lg:space-y-8">
              <button className="flex items-center text-white font-medium font-inter bg-[#3A4C92] bg-opacity-50 py-3 px-4 rounded-[20px] mx-auto">
                <img className="mr-2" src={product} alt="" />
                Product AI
              </button>
              <h2 className="heading-text text-white text-center leading-9 md:leading-10">
                Insights and predictions made easy
              </h2>
              <p className="para-text text-white text-center lg:w-[760px] mx-auto">
                Advanced business intelligence tools enhance efficiency across
                your entire operation. By predicting future revenue and
                dissecting marketing effectiveness.
              </p>
            </div>

            <div className="grid-res-cols mt-8 md:mt-12 lg:mt-16">
              {[
                {
                  id: 1,
                  icon: p1,
                  title: "Predictive Power",
                  text: "Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions",
                  link: "Finance, Retail, E-commerc",
                },
                {
                  id: 2,
                  icon: p2,
                  title: "Connect with Ease",
                  text: "Integrate Neuros with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've g",
                  link: "Tech, Healthcare, Manufacturing",
                },
                {
                  id: 3,
                  icon: p3,
                  title: "Visualize Your Success",
                  text: "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your data",
                  link: "Marketing, Sales, Operations",
                },
                {
                  id: 4,
                  icon: p4,
                  title: "Stay Updated, Always",
                  text: "With Neuros's real-time data processing, you're always in the know. Make decisions based on the latest data and st",
                  link: "E-commerce, Logistics, Supply Chain",
                },
                {
                  id: 5,
                  icon: p5,
                  title: "Your Data's Safe Haven",
                  text: "Rest easy knowing your data is protected with Neuros's top-tier security protocols. From encryption to access controls, we",
                  link: "Finance, Healthcare, Legal",
                },
                {
                  id: 6,
                  icon: p6,
                  title: "Simplicity Meets Power",
                  text: "Neuros offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more tim",
                  link: "All Industries",
                },
              ].map(({ id, icon, title, text, link }) => {
                return (
                  <div key={id} className="grid-card-3">
                    <div className="space-y-4 product-bg p-8">
                      <img src={icon} alt="" />
                      <h3 className="text-[20px] font-semibold font-inter text-white">
                        {title}
                      </h3>
                      <p className="para-text text-white opacity-80">{text}</p>
                      <div>
                        <a
                          className="text-[#00F7FF] underline font-inter"
                          href="#"
                        >
                          {link}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`absolute top-[4630px] hidden lg:block w-[1170px] z-0 ${clickToHide? "lg:hidden":""}`}
            >
              <img src={gradient} alt="" />
            </div>
            <div className="mt-8 lg:mt-[15px] mx-auto w-fit relative z-10">
              <button
                onClick={() => setClickToHide(true)}
                className={`bg-[#00F7FF] py-4 px-6 rounded-full font-inter font-semibold ${
                  clickToHide ? "hidden" : ""
                }`}
              >
                View All Product
              </button>
            </div>

            <div className={`grid-res-cols mt-8 ${clickToHide ? "" : "hidden"}`}>
              {[
                {
                  id: 1,
                  icon: p1,
                  title: "Predictive Power",
                  text: "Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions",
                  link: "Finance, Retail, E-commerc",
                },
                {
                  id: 2,
                  icon: p2,
                  title: "Connect with Ease",
                  text: "Integrate Neuros with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've g",
                  link: "Tech, Healthcare, Manufacturing",
                },
                {
                  id: 3,
                  icon: p3,
                  title: "Visualize Your Success",
                  text: "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your data",
                  link: "Marketing, Sales, Operations",
                },
                {
                  id: 4,
                  icon: p4,
                  title: "Stay Updated, Always",
                  text: "With Neuros's real-time data processing, you're always in the know. Make decisions based on the latest data and st",
                  link: "E-commerce, Logistics, Supply Chain",
                },
                {
                  id: 5,
                  icon: p5,
                  title: "Your Data's Safe Haven",
                  text: "Rest easy knowing your data is protected with Neuros's top-tier security protocols. From encryption to access controls, we",
                  link: "Finance, Healthcare, Legal",
                },
                {
                  id: 6,
                  icon: p6,
                  title: "Simplicity Meets Power",
                  text: "Neuros offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more tim",
                  link: "All Industries",
                },
              ].map(({ id, icon, title, text, link }) => {
                return (
                  <div key={id} className="grid-card-3">
                    <div className="space-y-4 product-bg p-8">
                      <img src={icon} alt="" />
                      <h3 className="text-[20px] font-semibold font-inter text-white">
                        {title}
                      </h3>
                      <p className="para-text text-white opacity-80">{text}</p>
                      <div>
                        <a
                          className="text-[#00F7FF] underline font-inter"
                          href="#"
                        >
                          {link}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product

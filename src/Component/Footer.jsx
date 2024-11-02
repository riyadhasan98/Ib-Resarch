import React from 'react'
import logo from '../images/logo.png'

function Footer() {
  return (
    <>
      <section className="mt-8 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <div className="flex items-center justify-between">
              <img className="footer-bg py-6 px-8" src={logo} alt="" />
              <div className="lg:w-[873px] bg-white opacity-10">
                <hr />
              </div>
            </div>

            <div className="grid-res-cols mt-3 lg:mt-6">
              {[
                {
                  id: 1,
                  title: "About Neuros",
                  list1: "Company Overview",
                  list2: "Careers",
                  list3: "Press & Media",
                  list4: "Testimonials",
                },
                {
                  id: 2,
                  title: "Resources",
                  list1: "Blog",
                  list2: "Help Center",
                  list3: "Webinars & Events",
                  list4: "Case Studies",
                },
                {
                  id: 3,
                  title: "Support & Contact",
                  list1: "Contact Us",
                  list2: "Technical Support",
                  list3: "Feedback",
                  list4: "Community Forum",
                },
                {
                  id: 4,
                  title: "Help Center",
                  list1: "Live Chat",
                  list2: "Terms & Condition",
                  list3: "Privacy Policy",
                  list4: "Service 24/7",
                },
              ].map(({ id, title, list1, list2, list3, list4 }) => {
                return (
                  <div key={id} className="grid-card-footer-4">
                    <div className="">
                      <h3 className="text-[20px] font-inter font-bold text-white mt-8">
                        {title}
                      </h3>
                      <ul className="space-y-4 mt-5">
                        <li className="text-white font-inter opacity-80 hover:opacity-100">
                          {list1}
                        </li>
                        <li className="text-white font-inter opacity-80 hover:opacity-100">
                          {list2}
                        </li>
                        <li className="text-white font-inter opacity-80 hover:opacity-100">
                          {list3}
                        </li>
                        <li className="text-white font-inter opacity-80 hover:opacity-100">
                          {list4}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 md:mt-10">
              <div className="bg-white opacity-10">
                <hr />
              </div>
              <div className='py-8 md:flex justify-between'>
                <span className="text-[14px] text-[#D9D9D9] font-inter">
                  ©2024 Ib Reasarch · All rights reserved.
                </span>
                <div className='space-x-6 mt-3 md:mt-0'>
                  <span className="text-[14px] hover:text-white text-[#D9D9D9] font-inter">
                    Term of use
                  </span>
                  <span className="text-[14px] hover:text-white text-[#D9D9D9] font-inter">
                    Privacy policy
                  </span>
                  <span className="text-[14px] hover:text-white text-[#D9D9D9] font-inter">
                    Security
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer

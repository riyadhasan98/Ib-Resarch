import React from 'react'
import bg from '../images/Container.png'
import trial from '../icons/R icon.png'
import a1 from '../icons/a1.svg'
import a2 from "../icons/a2.svg"
import a3 from "../icons/a3.svg";

function Analytics() {
  return (
    <>
      <section>
        <div className="cus-container mt-8 lg:mt-24">
          <div
            className="lg:flex justify-between p-10 items-center bg-cover bg-no-repeat bg-center rounded-[20px]"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className="space-y-8">
              <h2 className="heading-text text-white lg:w-[617px] leading-8 md:leading-10 lg:leading-[52px]">
                Embark on the Journey of Business Analytics with Neuros
              </h2>
              <button className="font-inter font-semibold py-3 px-6 bg-[#00F7FF] rounded-[16px] flex items-center">
                Start your free trial{" "}
                <img className="ml-2" src={trial} alt="" />
              </button>
            </div>

            <div className='space-y-5 mt-8 lg:mt-0'>
              <div className="card flex items-center space-x-3 card-bg p-2 w-fit md:p-3">
                <div>
                  <img
                    className="bg-[#00F7FF0F] px-[10px] py-[15px] bg-opacity-[0.06] rounded-[12px]"
                    src={a1}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-inter text-white">
                    Instant Access
                  </h3>
                  <p className="para-text text-white md:w-[283px]">
                    Begin exploring Neuros's full suite of features immediately
                  </p>
                </div>
              </div>

              <div className="card flex items-center space-x-3 card-bg p-2 w-fit md:p-3">
                <div>
                  <img
                    className="bg-[#00F7FF0F] px-[10px] py-[15px] bg-opacity-[0.06] rounded-[12px]"
                    src={a2}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-inter text-white">
                    No Commitments
                  </h3>
                  <p className="para-text text-white md:w-[283px]">
                    No credit card required, and you can cancel anytime
                  </p>
                </div>
              </div>

              <div className="card flex items-center space-x-3 card-bg p-2 w-fit md:p-3">
                <div>
                  <img
                    className="bg-[#00F7FF0F] px-[10px] py-[15px] bg-opacity-[0.06] rounded-[12px]"
                    src={a3}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-inter text-white">
                    Dedicated Support
                  </h3>
                  <p className="para-text text-white md:w-[283px]">
                    Our team is here to assist you every step of the way during
                    your trial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Analytics

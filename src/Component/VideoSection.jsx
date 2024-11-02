import React from 'react'

function VideoSection() {

  return (
    <>
      <section className="">
        <div className="cus-container">
          <div className="">
            <div className="space-y-1">
              <h2 className="heading-text text-white text-center mt-10 md:mt-16 lg:mt-24">
                Business One AI Using Process{" "}
              </h2>
              <p className="para-text text-white text-center">
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut.
              </p>
            </div>

            <div className='mt-5 md:mt-10 lg:mt-12'>
                          <iframe

                className="w-[350px] h-[200px] mx-auto md:w-[600px] md:h-[480px] lg:w-[970px] lg:h-[508px] border-[11px] rounded-[33px] border-[#0D3446]"
                src="https://www.youtube.com/embed/1eD7ulSa2f0?si=q08x66c9mJHAfBy7"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; controls"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoSection

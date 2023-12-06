"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="1YyAzVmP9xQ"
        onClose={() => setOpen(false)}
      />

      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pb-24 lg:pt-40">
        <div className="height-work">
          <div className="my-16 grid grid-cols-1 lg:grid-cols-12">
            <div className="arrowTwo"></div>
            <div className="col-span-7">
              <h1 className="md:4px mb-5 text-center text-4xl font-bold text-black dark:text-white md:text-start  lg:text-7xl">
                We Design, <br />
                Build and Deliver Software Products
              </h1>
              <p className="mb-10 text-center font-normal text-black dark:text-white md:text-start  md:text-lg">
                We provide companies and businesses tech talent and product
                <br />
                development expertise to build world-class software
              </p>
              <div className="flex justify-center align-middle md:justify-start">
                <button className="navbutton mr-6 px-6 py-4 text-xl font-semibold text-black dark:text-white lg:px-12">
                  Book A Consultation
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center justify-center bg-transparent text-black dark:text-white"
                >
                  {/* <Image
                    src={"/images/Banner/playbutton.svg"}
                    alt="button-image"
                    className="mr-3"
                    width={47}
                    height={47}
                  /> */}
                  View our core services
                </button>
              </div>
            </div>

            <div className="col-span-5 lg:-m-48">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <Image
                src="/assets/images/About-hero.svg"
                alt="nothing"
                width={1013}
                height={760}
              />
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

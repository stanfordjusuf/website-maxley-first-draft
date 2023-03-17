import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <>
      <div className="flex flex-col">
        <div className="home-carousel carousel w-full">
          <div id="home" className="carousel-item relative w-full">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#promotion2" className="btn btn-circle btn-ghost">
                ❮
              </a>

              <div className="flex flex-col absolute items-center w-full h-full justify-center -z-50">
                <h1
                  className="text-4xl text-center md:text-6xl font-bold"
                  style={{ color: 'white' }}
                >
                  #livingwithmaxley
                </h1>
                <h1 className="text-3xl text-center" style={{ color: 'white' }}>
                  Hotel & Lodging
                </h1>
                <div className="flex flex-row mt-4 flex-wrap">
                  <Link href="/about">
                    <button
                      type="button"
                      className="btn btn-outline"
                      style={{ color: 'white' }}
                    >
                      About Us
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button type="button" className="btn btn-ghost">Contact Us</button>
                  </Link>
                </div>
              </div>

              <a href="#promotion1" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>
          <div
            id="promotion1"
            className="carousel-item relative w-full flex flex-col items-center"
          >
            <video
              autoPlay
              muted
              loop
              className="w-full absolute w-full h-full"
            >
              <source src="https://drive.google.com/uc?id=1iK8BnwXpUoFaU3HxasKab6YFRZpo0PP9&export=download" />
            </video>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#home" className="btn btn-circle btn-ghost">
                ❮
              </a>
              <div className="flex flex-col absolute h-full w-full justify-center items-center -z-50">
                <h1
                  className="text-4xl text-center font-bold md:text-6xl"
                  style={{ color: 'white' }}
                >
                  Group Package Promo!
                  <br />
                  Invite your friends to living at Maxley!
                </h1>
              </div>

              <a href="#promotion2" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>
          <div id="promotion2" className="carousel-item relative w-full">
            <video
              autoPlay
              muted
              loop
              className="w-full absolute w-full h-full"
            >
              <source src="https://drive.google.com/uc?id=1cKceFVj0_DCYB2t6HYv8mMc8lO7T4hhm&export=download" />
            </video>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#promotion1" className="btn btn-circle btn-ghost">
                ❮
              </a>
              <div className="flex flex-col absolute w-full h-full -z-50 justify-center items-center ">
                <h1
                  className="text-4xl text-center font-bold w-3/4 md:text-6xl"
                  style={{ color: 'white' }}
                >
                  Get FREE Merchandise SUGA BTS & Doorprize Lightstick BTS for
                  ARMY!!!
                </h1>
              </div>
              <a href="#home" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="section about-section grid md:grid-cols-1 md:h-screen lg:grid-cols-2 w-full">
            <div className='relative text-center justify-center items-center flex flex-col flex-1 bg-cover bg-[url("https://i.ibb.co/yYZ6rj5/Gym.jpg")] '>
              <div className="min-w-full h-full bg-[#f86c04] opacity-30 absolute" />
              <Link href="/services">
                <a
                  href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
                  className="text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer"
                >
                  Services
                </a>
              </Link>
              <br />
            </div>
            <div className='relative text-center flex-1 flex flex-col justify-center items-center p-6  bg-cover bg-[url("https://i.ibb.co/xmpsYpR/Billiard.jpg")]'>
              <div className="min-w-full h-full bg-[#f86c04] opacity-30 absolute" />
              <Link href="/about">
                <a
                  className="text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer"
                  href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
                >
                  About
                </a>
              </Link>
              <br />
            </div>
          </div>
        </div>
        <div>
          <div className="section news-section text-center flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold text-white">
              You can find the latest information or events about Maxley here!
            </h1>
            <br />
            <Link href="/category/news">
              <button
                type="button"
                className="btn bg-transparent border-white w-32 text-white hover:text-white hover:bg-[#f86c0477]"
                href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
              >
                Go to News
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="section grid lg:grid-cols-3 md:grid-cols-1">
            <div className="col-span-1 bg-gray-800 contact-panel" />
            <div id="contact" className="col-span-2 flex-1 p-3">
              <h1 className="text-6xl font-bold underline decoration-[#f86c04]">
                Contact Us
              </h1>
              <br />
              <p className="text-xl">
                Email:{' '}
                <a
                  href="mailto:maxleysuites@gmail.com"
                  className="hover:underline"
                >
                  maxleysuites@gmail.com
                </a>
              </p>
              <p className="text-xl">
                BSD:{' '}
                <a
                  href="https://wa.me/+6288225924227"
                  className="hover:underline"
                >
                  +6288225924227
                </a>
              </p>
              <p className="text-xl">
                Lippo:{' '}
                <a
                  href="https://wa.me/+6285852293500"
                  className="hover:underline"
                >
                  +6285852293500
                </a>
              </p>
              <p className="text-xl">
                Customer Service and Feedback:{' '}
                <a
                  href="https://wa.me/+6281227762299"
                  className="hover:underline"
                >
                  +6281227762299
                </a>
              </p>
              <p className="text-xl font-bold">
                Operational Hours: 09.00 - 17.00 WIB
              </p>
              <br />
              <a href="https://goo.gl/maps/SAxM51p66Yasbj2L9">
                <button type="button" className="btn btn-warning">
                  Check out our location!
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Hero;

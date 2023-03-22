import React from 'react';

export default function contact() {
  return (
    <div
      className="hero min-h-screen"
      style={{ color: 'white', backgroundColor: 'white' }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/tH6zr8h/Screenshot-2023-03-19-at-14-51-17.png"
          className="lg:max-w-5xl max-w-sm rounded-lg shadow-3xl"
        />
        <div>
          <h1 className="text-5xl font-bold" style={{ color: '#f86c04' }}>
            Contact Us!
          </h1>
          <br />
          <div className="grid grid-cols-3 content-center">
            <img
              src="https://i.ibb.co/7WgCFf1/svg.png"
              alt=""
              style={{ width: '20px', height: 'auto' }}
            />
            <div className="absolute left-55 pl-6">
              <p className="text-xl">
                Operational Hours: 09.00 - 17.00 WIB
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 content-center">
            <img
              src="https://i.ibb.co/ZgDzqQC/3.png"
              alt=""
              style={{ width: '20px', height: 'auto' }}
            />
            <div className="absolute left-55 pl-6">
              <p className="text-xl">
                BSD:{" "}
                <a
                  href="https://linktr.ee/maxleysuites"
                  className="hover:underline"
                >
                  Whatsapp
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 content-center">
            <img
              src="https://i.ibb.co/d2vBPhL/1.png"
              alt=""
              style={{ width: '20px', height: 'auto' }}
            />
            <div className="absolute left-55 pl-6">
              <p className="text-xl">
                <a
                  href="https://www.instagram.com/maxleysuites/"
                  className="hover:underline"
                >
                  IG: @maxleysuites
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 content-center">
            <img
              src="https://i.ibb.co/LvNw1Dv/2.png"
              alt=""
              style={{ width: '20px', height: 'auto' }}
            />
            <div className="absolute left-55 pl-6">
              <p className="text-xl">
                <a
                  href="https://www.tiktok.com/@maxleysuites?_t=8aRWNgJ7DDm&_r=1"
                  className="hover:underline"
                >
                  TikTok: @maxleysuites
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 content-center">
            <img
              src="https://i.ibb.co/ChdTZp1/5.png"
              alt=""
              style={{ width: '20px', height: 'auto' }}
            />
            <div className="absolute left-55 pl-6">
              <p className="text-xl">
                <a
                  href="mailto:maxleysuites@gmail.com"
                  className="hover:underline"
                >
                  Email: maxleysuites@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 content-center">
            <p className="text-xl">
              <a
                href="mailto:maxleysuites@gmail.com"
                className="hover:underline"
              >
                Partnership: maxleysuites@gmail.com
              </a>
            </p>
          </div>
          <br />
          <a href="https://goo.gl/maps/SAxM51p66Yasbj2L9">
            <img
              src="https://i.ibb.co/QXrSr8t/Screenshot-2023-03-19-at-14-40-46.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

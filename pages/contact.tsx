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
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold" style={{ color: '#f86c04' }}>
            Contact Us!
          </h1>
          <br />
          <div className="grid grid-cols-3">
            <img
              src="https://i.ibb.co/ChdTZp1/5.png"
              alt=""
              style={{ width: '20px', height: 'auto' }}
            />
            <p className="text-xl">
              Email:{" "}
              <a
                href="mailto:maxleysuites@gmail.com"
                className="hover:underline"
              >
                maxleysuites@gmail.com
              </a>
            </p>
          </div>
          <p className="text-xl">
            BSD:{" "}
            <a
              href="https://wa.me/+6288225924227"
              className="hover:underline"
            >
              +6288225924227
            </a>
          </p>
          <p className="text-xl">
            Lippo:{" "}
            <a
              href="https://wa.me/+6285852293500"
              className="hover:underline"
            >
              +6285852293500
            </a>
          </p>
          <p className="text-xl">
            Customer Service and Feedback:{" "}
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

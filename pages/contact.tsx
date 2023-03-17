import React from 'react';

export default function contact() {
  return (
    <>
      <div>
        <div className="section about-section flex flex-wrap">
          <div className="basis-1/3 bg-gray-800 flex-1 contact-panel" />
          <div id="contact" className="basis-2/3 flex-1 p-3">
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

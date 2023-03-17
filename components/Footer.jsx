import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer
    className="footer bg-base-200 text-base-content"
    style={{ color: 'white' }}
  >
    <div className="justify-self-center">
      <Link href="/">
        {/* <span className="logo cursor-pointer font-bold text-4xl text-orange">Prodat ⭐️</span> */}
        <img
          className="btn btn-warning hover:cursor-pointer"
          width="200px"
          height="auto"
          src="https://i.ibb.co/3Rvrrkn/Screenshot-2023-03-11-at-13-14-22-removebg-preview-1.png"
          alt="logo-1"
          border="0"
        />
      </Link>
      <Link href="/">
        <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
          Home
        </a>
      </Link>
    </div>
    <div className="justify-self-center">
      <Link href="/contact">
        <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
          Contact
        </a>
      </Link>
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/maxleysuites/">
          <img
            src="https://i.ibb.co/d2vBPhL/1.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
        </a>
        <a href="https://www.tiktok.com/@maxleysuites?_t=8aRWNgJ7DDm&_r=1">
          <img
            src="https://i.ibb.co/LvNw1Dv/2.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=6285852293500&text&type=phone_number&app_absent=0">
          <img
            src="https://i.ibb.co/ZgDzqQC/3.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
          <p>Lippo</p>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=6288225924227&text&type=phone_number&app_absent=0">
          <img
            src="https://i.ibb.co/ZgDzqQC/3.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
          <p>BSD</p>
        </a>
        <a href="https://goo.gl/maps/SAxM51p66Yasbj2L9">
          <img
            src="https://i.ibb.co/fdrPTwD/4.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
        </a>
        <a href="mailto:maxleysuites@gmail.com">
          <img
            src="https://i.ibb.co/ChdTZp1/5.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
        </a>
      </div>
    </div>
    <div className="justify-self-center">
      <Link href="/contact">
        <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
          Feedback
        </a>
      </Link>
      <p className="link link-hover">Customer service: 081227762299</p>
    </div>
  </footer>
);

export default Footer;

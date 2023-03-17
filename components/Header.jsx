import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div
      className="navbar sticky top-0 z-50 shadow"
      style={{ background: '#FFFFFF' }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            type="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <button
            type="button"
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            style={{ background: '#f9f2ed' }}
          >
            <ul>
              <li className="text-black">
                <Link href="/">
                  <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    About
                  </a>
                </Link>
                <Link href="/rooms">
                  <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    Rooms
                  </a>
                </Link>
                <Link href="/services">
                  <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    Services
                  </a>
                </Link>
                <p>Blog</p>
                {categories.map((category, index) => (
                  <Link key={index} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-orange ml-4 font-semibold cursor-pointer">
                      {category.name}
                    </span>
                  </Link>
                ))}
                <Link href="/faq">
                  <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    FAQ
                  </a>
                </Link>
                <Link href="/contact">
                  <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </button>
        </div>
        <Link href="/">
          {/* <span className="logo cursor-pointer font-bold text-4xl text-orange">Prodat ⭐️</span> */}
          <img
            className="hover:cursor-pointer"
            width="200px"
            height="auto"
            src="https://i.ibb.co/3Rvrrkn/Screenshot-2023-03-11-at-13-14-22-removebg-preview-1.png"
            alt="logo-1"
            border="0"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li className="text-black">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </li> */}
          <li className="text-black">
            <Link href="/">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                About
              </a>
            </Link>
            <Link href="/rooms">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                Rooms
              </a>
            </Link>
            <Link href="/services">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                Services
              </a>
            </Link>
            <Link href="/category/news">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                News
              </a>
            </Link>
            <Link href="/category/promotions">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                Promotion
              </a>
            </Link>
            <Link href="/faq">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                FAQ
              </a>
            </Link>
            <Link href="/contact">
              <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://linktr.ee/maxleysuites"
          className="btn glass text-black"
          style={{ background: '#f86c04' }}
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Header;

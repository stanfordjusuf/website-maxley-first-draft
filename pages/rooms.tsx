import React from 'react';
import Link from 'next/link';

export default function services() {
  return (
    <>
      <br />
      <div>
        <h1 className="text-4xl font-bold underline decoration-[#f86c04] text-center">
          Rooms
        </h1>
        <br />
        <div className="grid lg:grid-cols-3 w-screen md:grid-cols-1">
          <div className="flex flex-col items-center">
            <div className="card w-3/4 bg-base-100 shadow-xl">
              <div className="card-body pb-100">
                <div className="carousel w-full">
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/C54L36G/Single-Bed.jpg"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/cg1t9Xj/Screenshot-2023-03-28-at-11-51-09.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/kqcWMM3/Screenshot-2023-03-28-at-11-52-21.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/fxWvRPj/Screenshot-2023-03-27-at-15-22-27.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                </div>
                <h2 className="card-title underline">Single Bed</h2>
                <div style={{ color: "white" }}>
                  <p className="text-lg font-bold" style={{ color: "orange" }}>
                    Description:
                  </p>
                  <ul className="text-lg">
                    <li>Room size 6x3</li>
                    <li>1 Pillow</li>
                    <li>Bed (160 x 200 cm)</li>
                    <li>Table + Chair</li>
                    <li>Wardrobe</li>
                    <li>Rubbish Bin</li>
                    <li>Air Conditioner</li>
                    <li>Bathroom</li>
                    <li>Water Heater</li>
                    <li>Balcony</li>
                    <br />
                    <li>Total Rooms:</li>
                    <li>98 rooms (BSD 1)</li>
                    <li>49 rooms (BSD 2)</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="card w-3/4 bg-base-100 shadow-xl">
              <div className="card-body pb-100">
                <div className="carousel w-full">
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/3WSs9sm/IMG-4634.jpg"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/JxcLZfT/Screenshot-2023-03-28-at-11-56-57.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/zsPy4SB/Screenshot-2023-03-28-at-11-58-36.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/LCwpwYV/Screenshot-2023-03-27-at-15-20-46.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                </div>
                <h2 className="card-title underline">Double Bed</h2>
                <div style={{ color: "white" }}>
                  <p className="text-lg font-bold" style={{ color: "orange" }}>
                    Description:
                  </p>
                  <ul className="text-lg">
                    <li>Room Size 6x3</li>
                    <li>2 Bed (120 x 200 cm)</li>
                    <li>2 Pillow</li>
                    <li>Table + Chair</li>
                    <li>Wardrobe</li>
                    <li>Rubbish Bin</li>
                    <li>Air Conditioner</li>
                    <li>Bathroom</li>
                    <li>Water Heater</li>
                    <li>Balcony</li>
                    <br />
                    <li>Total Rooms:</li>
                    <li>8 rooms (BSD 1)</li>
                    <li>11 rooms (BSD 2)</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="card w-3/4 bg-base-100 shadow-xl">
              <div className="card-body pb-100">
                <div className="carousel w-full">
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/hZw1dq3/Screenshot-2023-03-29-at-16-36-22.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/mXGt8MM/Screenshot-2023-03-29-at-16-37-52.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/v3KgQHp/Screenshot-2023-03-28-at-12-04-10.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                </div>
                <h2 className="card-title underline">Suite Room</h2>
                <div style={{ color: "white" }}>
                  <p className="text-lg font-bold" style={{ color: "orange" }}>
                    Description:
                  </p>
                  <ul className="text-lg">
                    <li>Room Size 7x3</li>
                    <li>Bed (180 x 200 cm)</li>
                    <li>1 Pillow</li>
                    <li>Table + Chair</li>
                    <li>Wardrobe</li>
                    <li>Rubbish Bin</li>
                    <li>Air Conditioner</li>
                    <li>Bathroom</li>
                    <li>Water Heater</li>
                    <li>Balcony</li>
                    <br />
                    <li>Total Rooms:</li>
                    <li>21 rooms (BSD 1)</li>
                    <li> 13 rooms (BSD 2)</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

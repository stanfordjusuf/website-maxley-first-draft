import React from 'react';
import Link from 'next/link';

export default function services() {
  return (
    <>
      <br />
      <div>
        <h1 className="text-4xl font-bold underline decoration-[#f86c04] text-center">
          Services
        </h1>
        <br />
        <div className="grid lg:grid-cols-2 w-screen md:grid-cols-1">
          <div className="flex flex-col items-center">
            <div className="card w-3/4 bg-base-100 shadow-xl h-3/4">
              <div className="card-body">
                <div className="carousel w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pJV6f8T/Screenshot-2023-03-20-at-20-07-34.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">❮</a> 
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/jTGdVT5/Screenshot-2023-03-20-at-20-07-03.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">❮</a> 
                      <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sFQdjjD/Screenshot-2023-03-20-at-20-06-09.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a> 
                      <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/LCwpwYV/Screenshot-2023-03-27-at-15-20-46.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">❮</a> 
                      <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
                <h2 className="card-title underline">Rooms</h2>
                <p style={{ color: 'white' }}>
                  Maxley menyediakan 200 kamar dengan berbagai tipe seperti
                  Single Bed, Double Bed dan Suites Room dengan kapasitas
                  maksimum 2 orang. Maxley merupakan Student Domitory yang
                  dibangun untuk mahasiswa yang membutuhkan tempat tinggal dekat
                  kampus.
                </p>
                <div className="card-actions justify-end">
                  <Link href="/rooms">
                    <button
                      type="button"
                      className="btn bg-[#f86c04]"
                      style={{ color: 'black' }}
                    >
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="card w-3/4 bg-base-100 shadow-xl h-3/4">
              <div className="card-body">
                <div className="w-128 carousel rounded-box">
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/HC58JyX/Screenshot-2023-03-20-at-19-57-30.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/cTDFFRG/Screenshot-2023-03-20-at-19-59-28.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/kBW35Nq/Screenshot-2023-03-20-at-20-00-28.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/27wFW3t/Screenshot-2023-03-20-at-20-01-23.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/6BCCzKQ/Screenshot-2023-03-20-at-20-03-17.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/sFQdjjD/Screenshot-2023-03-20-at-20-06-09.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/jTGdVT5/Screenshot-2023-03-20-at-20-07-03.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="carousel-item w-full">
                    <img
                      src="https://i.ibb.co/pJV6f8T/Screenshot-2023-03-20-at-20-07-34.png"
                      className="w-full"
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                </div>
                <h2 className="card-title underline">Fasilitas</h2>
                <p style={{ color: 'white' }}>
                  Tidak hanya kamar tidur, Maxley juga menyediakan berbagai
                  fasilitas untuk Mahasiswa demi memenuhi kenyamanan dan
                  kebutuhan Mahasiswa selama menjalani kehidupan kampus.
                  Fasilitas: gym, billiard, study room, communal area, free 
                  laundry, free cleaning room, wifi, security 
                  24 hours, dispenser, refrigerator, electricity.
                </p>
                <br />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

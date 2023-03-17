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
              <figure className="h-2/3">
                <img
                  src="https://i.ibb.co/RjqLvsq/DSC-5809-HDR.jpg"
                  alt="rooms"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title underline">Rooms</h2>
                <p style={{ color: 'white' }}>
                  Maxley menyediakan 200 kamar dengan berbagai tipe serpeti
                  Single Bed, Double Bed dan Suites.Room dengan kapasitas
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
              <figure className="h-2/3">
                <img
                  src="https://i.ibb.co/t4qz3SR/Study-Room.jpg"
                  alt="facilities"
                  className=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title underline">Fasilitas</h2>
                <p style={{ color: 'white' }}>
                  Tidak hanya kamar tidur, Maxley juga menyediakan berbagai
                  fasilitas untuk Mahasiswa demi memenuhi kenyamanan dan
                  kebutuhan Mahasiswa selama menjalani kehidupan kampus.
                </p>
                <div className="card-actions justify-end">
                  <button
                    type="button"
                    tabIndex={0}
                    className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-full"
                  >
                    <div
                      className="collapse-title text-xl font-medium"
                      style={{ color: 'white' }}
                    >
                      Fasilitas yang kita menyediakan
                    </div>
                    <div className="collapse-content">
                      <ul className="text-lg">
                        <li>Gym</li>
                        <li>Study Room</li>
                        <li>Communal Area</li>
                        <li>Free Laundry</li>
                        <li>Free Cleaning Room</li>
                        <li>Wifi</li>
                        <li>Security 24 Hours</li>
                        <li>Dispenser</li>
                        <li>Refrigerator</li>
                        <li>Electricity</li>
                      </ul>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

export default function about() {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="bg-black">
          <img
            src="https://i.ibb.co/3CcL9SB/Living-Room.jpg"
            className="h-full"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="border-b-2 border-b-[#f86c04]">
            <h1 className="text-4xl font-bold ">Our Story</h1>
          </div>

          <br />
          <p className="text-md shrink min-w-min">
            Maxley adalah sebuah Student Dormitory yang berdiri sejak tahun 2015,
            terletak di Edutown, seberang Universitas Prasetya Mulya, sudah
            bertahun-tahun Maxley dipercayakan oleh sebagian besar Mahasiswa
            Universitas Prasetya Mulya sebagai tempat tinggal mereka selama
            menjalani kegiatan kampus, kini sampai detik ini kami bangga melayani
            dan akan terus siap menjadi Student Domitory yang dapat dipercayakan
            dan diandalkan oleh Mahasiswa. Selain Student Domitory kami juga
            menerima tamu sewa seperti Karyawan/ Staff dan Daily Rent sesuai
            dengan ketentuan yang berlaku.
          </p>
          <br />
          <a
            href="https://www.tiktok.com/@maxleysuites?_t=8aRWNgJ7DDm&_r=1"
            className="btn bg-[#f86c04]"
            style={{ color: 'black' }}
          >
            Check out our Tiktok
          </a>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

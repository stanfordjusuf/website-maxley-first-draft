import React from 'react';
import { Disclosure } from '@headlessui/react';

export default function faq() {
  return (
    <>
      <div className="w-full px-4 pt-16">
        <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
          <h1>Frequently Asked Questions</h1>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <span>Apakah Maxley menerima sewa harian?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Ya, kami menerima sewa harian selama masih ada kamar yang
                  tersedia.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <span>Berapa maximal kapasitas Penyewa?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Untuk Single & Suites 1 orang dan Double 2 orang
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Ya, kami menerima tamu selain Mahasiswa, tamu wajib
                  berkewanegaraan Indonesia.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <span>Apakah ada batas waktu kunjungan Tamu?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Ya, Tamu/Teman Penghuni dilarang masuk kedalam Maxley BSD
                  diatas pukul 23 00
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <span>
                    Apakah Penyewa diperbolehkan membawa tamu kedalam kamar?
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Boleh, Hanya tamu lawan jenis yang tidak diperbolehkan
                  (kecuali sudah menikah)
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <span>
                    Apakah Penyewa diperbolehkan membawa hewan peliharaan?
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Tidak diperbolehkan.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <br />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-orange-100 rounded-lg">
                  <span>
                    Apakah Penyewa mendapatkan Cleaning Room setiap hari?
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Clean Up Room dilakukan setiap hari hanya pada pukul 10.00 -
                  15.00 WIB.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

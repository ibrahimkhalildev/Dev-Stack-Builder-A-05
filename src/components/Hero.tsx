import React from 'react'
import heroImg from '../assets/hero-image.png'

export default function Hero () {
  return (
    <section className='py-12 md:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div>
            <span className='text-xs font-bold tracking-widest text-[#DB2777] uppercase'>
              Build With Confidence
            </span>

            <h1 className='mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight'>
              Build Your Ideal <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-rose-500 to-purple-600'>
                Development Stack
              </span>
            </h1>

            <p className='mt-5 text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed'>
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <a
                href='#technologies'
                className='px-6 py-3 rounded-xl font-medium text-white shadow-md bg-linear-to-r from-orange-500 via-rose-500 to-purple-600 hover:opacity-95 transition-opacity'
              >
                Explore Technologies
              </a>

              <a
                href='#learn-more'
                className='px-6 py-3 rounded-xl font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors'
              >
                Learn More
              </a>
            </div>
          </div>
          <div className='flex justify-center md:justify-end'>
            <img
              src={heroImg}
              alt='Dev Stack Visual'
              className='w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

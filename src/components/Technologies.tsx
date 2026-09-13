import React from 'react'
import reactLogo from '../assets/react.png'

export default function Technologies () {
  return (
    <section className='py-10 bg-white' id='technologies'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Explore the <span className='text-[#DB2777]'>Technologies</span>
          </h2>
          <p className='mt-2 text-gray-500 text-sm'>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 items-start'>
          <div className='lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between'>
              <div>
                <div className='flex items-center justify-between mb-3'>
                  <div className='w-10 h-10 flex items-center justify-center rounded-lg bg-sky-50'>
                    <img
                      src={reactLogo}
                      alt='React'
                      className='w-7 h-7 object-contain'
                    />
                  </div>
                  <span className='text-xs font-semibold text-sky-500 bg-sky-50 px-2 py-0.5 rounded-full'>
                    Popular
                  </span>
                </div>

                <h3 className='text-lg font-bold text-gray-900'>React</h3>
                <p className='mt-1 text-xs text-gray-500 leading-relaxed min-h-[40px]'>
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>

                <div className='mt-4 flex items-center gap-2 text-xs text-gray-600'>
                  <span className='bg-gray-100 px-2 py-0.5 rounded'>
                    Frontend
                  </span>
                  <span className='bg-gray-100 px-2 py-0.5 rounded'>
                    Beginner-Friendly
                  </span>
                  <span className='ml-auto font-medium text-gray-800'>
                    <span className='text-amber-400'>★</span> 4.9
                  </span>
                </div>
              </div>

              <button className='mt-5 w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-black'>
                Add to Stack
              </button>
            </div>
          </div>

          <div className='sticky top-20 border border-gray-100 rounded-2xl p-5 shadow-sm'>
            <h3 className='font-bold text-gray-900'>Your Stack</h3>
            <p className='text-xs text-gray-400 mb-4'>2 Technology Selected</p>

            <div className='space-y-3'>
              <div className='flex items-center justify-between p-2 border border-gray-100 rounded-xl'>
                <div className='flex items-center gap-2'>
                  <div className='w-7 h-7 rounded bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs'>
                    S
                  </div>
                  <div>
                    <h4 className='text-xs font-bold text-gray-800'>Svelte</h4>
                    <span className='text-[10px] text-gray-400'>Frontend</span>
                  </div>
                </div>
                <button className='text-gray-400 hover:text-gray-600 text-xs px-1'>
                  ✕
                </button>
              </div>

              <div className='flex items-center justify-between p-2 border border-gray-100 rounded-xl'>
                <div className='flex items-center gap-2'>
                  <div className='w-7 h-7 rounded bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs'>
                    R
                  </div>
                  <div>
                    <h4 className='text-xs font-bold text-gray-800'>Redis</h4>
                    <span className='text-[10px] text-gray-400'>Database</span>
                  </div>
                </div>
                <button className='text-gray-400 hover:text-gray-600 text-xs px-1'>
                  ✕
                </button>
              </div>
            </div>

            <button className='mt-5 w-full py-2 text-xs font-semibold text-rose-500 border border-rose-200 rounded-xl hover:bg-rose-50'>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

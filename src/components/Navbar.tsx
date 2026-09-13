import React, { useState } from 'react'
import logo from '../assets/logo.png'
import hamburgerIcon from '../assets/hamburger.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='sticky top-0 bg-white border-b border-gray-100 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-20'>
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-1 hover:opacity-75 transition-opacity focus:outline-none'
              aria-label='Toggle Menu'
            >
              {isOpen ? (
                <span className='text-2xl font-bold text-gray-700 leading-none'>
                  ✕
                </span>
              ) : (
                <img
                  src={hamburgerIcon}
                  alt='Menu'
                  className='w-6 h-6 object-contain'
                />
              )}
            </button>
          </div>

          <div className='flex items-center gap-2'>
            <img
              src={logo}
              alt='Dev Stack Logo'
              className='w-8 h-8 object-contain'
            />
            <span className='font-bold text-lg sm:text-xl text-gray-900'>
              Dev <span className='text-[#DB2777]'>Stack</span>
            </span>
          </div>

          <div className='hidden md:flex items-center gap-8 text-sm font-medium'>
            <a href='#' className='text-[#DB2777] font-semibold'>
              Home
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Technologies
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              About
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Contact
            </a>
          </div>

          <div className='flex items-center gap-2 sm:gap-4'>
            <button className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-1.5 transition-colors'>
              Sign In
            </button>
            <button className='text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 rounded-full bg-linear-to-r from-[#FF5E62] via-[#FF2A6D] to-[#9B51E0] shadow-sm hover:opacity-95 transition-opacity'>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm'>
          <a href='#' className='text-[#DB2777] font-medium'>
            Home
          </a>
          <a href='#' className='text-gray-700 hover:text-gray-900'>
            Technologies
          </a>
          <a href='#' className='text-gray-700 hover:text-gray-900'>
            Projects
          </a>
          <a href='#' className='text-gray-700 hover:text-gray-900'>
            About
          </a>
          <a href='#' className='text-gray-700 hover:text-gray-900'>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar

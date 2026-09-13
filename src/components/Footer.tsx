import React from 'react'
import logo from '../assets/logo.png'

export default function Footer () {
  return (
    <footer className='bg-white border-t border-gray-100 pt-16 pb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12'>
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2'>
              <img
                src={logo}
                alt='Dev Stack'
                className='w-8 h-8 object-contain'
              />
              <span className='font-bold text-lg text-gray-900'>
                Dev <span className='text-[#DB2777]'>Stack</span>
              </span>
            </div>

            <p className='mt-4 text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed'>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className='mt-6 flex items-center gap-5 text-xs sm:text-sm font-medium text-gray-600'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noreferrer'
                className='hover:text-black transition-colors'
              >
                GitHub
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noreferrer'
                className='hover:text-black transition-colors'
              >
                Twitter
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noreferrer'
                className='hover:text-black transition-colors'
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-xs font-bold text-gray-900 uppercase tracking-wider mb-4'>
              Product
            </h4>
            <ul className='space-y-2.5 text-xs sm:text-sm text-gray-500'>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#technologies'
                  className='hover:text-black transition-colors'
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-bold text-gray-900 uppercase tracking-wider mb-4'>
              Company
            </h4>
            <ul className='space-y-2.5 text-xs sm:text-sm text-gray-500'>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-bold text-gray-900 uppercase tracking-wider mb-4'>
              Legal
            </h4>
            <ul className='space-y-2.5 text-xs sm:text-sm text-gray-500'>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-black transition-colors'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400'>
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className='flex items-center gap-6'>
            <a href='#' className='hover:text-gray-600 transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-gray-600 transition-colors'>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

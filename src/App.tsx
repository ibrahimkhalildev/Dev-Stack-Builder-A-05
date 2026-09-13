import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App () {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className='py-20 text-center'>
            <div className='w-8 h-8 mx-auto border-4 border-gray-200 border-t-[#DB2777] rounded-full animate-spin'></div>
            <p className='mt-2 text-sm text-gray-500'>
              Loading technologies...
            </p>
          </div>
        }
      >
        <Technologies></Technologies>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App

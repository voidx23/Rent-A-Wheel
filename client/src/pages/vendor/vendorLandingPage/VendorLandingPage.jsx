import React from 'react'
import Navbar from '../../../components/vendor/navBar/navBar'
import { Link } from 'react-router-dom'

function VendorLandingPage() {
  return (
    <div>
      <div className=''>
        <Navbar />
      </div>
      <div className='flex justify-evenly'>
        <div className=' w-[100rem] h-[25rem]  overflow-hidden border-[8px]  border-custom-orange-border xl:w-[100rem] xl:h-[25rem]  xl:flex xl:items-center lg:w-[100rem] lg:h-[25rem]  lg:flex lg:items-center md:w-[100rem] md:h-[20rem]  md:flex md:items-center sm:w-[100rem] sm:h-[16rem]  sm:flex sm:items-center'>
          <img className=' ' src="../../../../../public/images/vendorlandingpageimg.jpg" alt="" />
        </div>

        <div className="bg-black text-white overflow-hidden border-[8px]  border-custom-orange-border xl:w-[100rem] xl:h-[25rem]  xl:flex xl:items-center lg:w-[100rem] lg:h-[25rem]  lg:flex lg:items-center md:w-[100rem] md:h-[20rem]  md:flex md:items-center sm:w-[100rem] sm:h-[16rem]  sm:flex sm:items-center">
          <h1 className="xl:p-10 xl:font-bold xl:text-5xl lg:font-bold lg:p-10 lg:text-4xl md:text-4xl md:font-bold sm:text-4xl sm:font-bold sm:p-9 ">Start your car-rental business with{' '} <span className='text-orange-600'>RAW.</span> </h1>
        </div>
      </div>
      <div className='bg-custom-orange-bg font-bold xl:h-[102px] lg:h-[90px] md:h-[80px] sm:h-[70px] xl:text-[36px] lg:text-[32px] md:text-[25px] sm:text-[20px] justify-center items-center flex '>WHY SHARE YOUR CAR ON RAW</div>
      <div className='justify-evenly flex p-7'>
        <div className=' w-[480px]  flex flex-col justify-center items-center'>
          <img className='h-[120px] mb-10' src="../../../../../public/images/saving.png" alt="" />
          <h1 className='text-[38px] font-bold mb-10'>Share at no cost</h1>
          <h5 className='text-[25px]'>Any car that is lesser than 10 years old can be shared on TREVO for absolutely no fee. You may contact us if you are interested in sharing your classic car too! :)</h5>
        </div>
        <div className=' w-[480px] flex flex-col justify-center items-center'>
          <img className='h-[120px] mb-10' src="../../../../../public/images/hand.png" alt="" />

          <h1 className='text-[38px] font-bold mb-10'>Share at your convenience</h1>
          <h5 className='text-[25px]'>Set your car's availability, pricing, and requirements for Guests. You still get to drive your car around whenever you <br /> want.</h5>
        </div>
        <div className=' w-[480px] flex flex-col justify-center items-center'>
          <img className='h-[120px] mb-10' src="../../../../../public/images/confidence.png" alt="" />

          <h1 className='text-[38px] font-bold mb-10'>Share with confidence</h1>
          <h5 className='text-[25px]'>Once your car is approved, qualified Guests can reach out. You can message them with any questions before accepting their booking.</h5>
        </div>
      </div>
      <div className='flex justify-center m-10'><Link to="/vendor/login" className='text-white bg-black font-bold text-3xl border-4 h-[80px] w-[500px] rounded-xl flex justify-center items-center'>Become A host</Link> </div>
      <div>Review Section</div>

    </div>
  )
}

export default VendorLandingPage
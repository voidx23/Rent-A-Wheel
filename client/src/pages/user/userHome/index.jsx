import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../../components/user/navBar/navBar'
import AvailabilityCheckingComponent from '../../../components/user/home/AvailabilityCheckingComponent'
import CarouselComponent from '../../../components/user/carListCarousal/CarousalComponent';



function HomePage() {

  const [car, setCar] = useState([])



  return (
    <div className='bg-slate-100'>
      <Navbar />

      <div className='h-[41rem] bg-slate-200 '>

        <div className='flex items-center justify-end '>

          <svg className='mr-[-550px]' xmlns="http://www.w3.org/2000/svg" width="876" height="658" viewBox="0 0 876 658" fill="none">
            <path d="M708.5 0.499996L875.5 0.500007L189.764 654.401L0.473601 657.013L708.5 0.499996Z" fill="#00FF66" />
          </svg>
          <svg className='mr-[-832px]' xmlns="http://www.w3.org/2000/svg" width="689" height="657" viewBox="0 0 689 657" fill="none">
            <path d="M689.5 0.5V117V656.376H0L689.5 0.5Z" fill="url(#paint0_linear_10_17)" />
            <defs>
              <linearGradient id="paint0_linear_10_17" x1="604.473" y1="350.154" x2="861.387" y2="605.47" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FF4D" />
                <stop offset="1" stopColor="#8FFF00" />
              </linearGradient>
            </defs>
          </svg>
          <img className='w-[41rem] h-[25rem] mt-40 mr-44' src="https://s3-alpha-sig.figma.com/img/73bd/afb3/b9c2d496b9d69fe9c6fed90468098676?Expires=1698019200&Signature=BOU-SyFCuq6MN~HblrO3CGqMO592K6PGfblEakvA28V-wTGnu1VQgxZ3v54FSRS61EzXpCEgE~pRg68xD355z~Oz0GACMWyYgOjFgWIPEa5HT5p2n1M87mh9zf3SEyUol23p2QOuwWia0VtrFuhgmqlA9Laswg3q7I9BLLZggt-sVqeeG3oGbcinJW9u5ZSMkX3gbOY7ovAyNQ-fHuFBEhuj5csoNl2Jto7vIKce1X8PcOZOJ~WGnNVvabgIay-PfQn0Pyz1ylO5QumKg7wAFrcxsfVp1ZPgbhROl2YUFiuWLnuJ1iYPecZv2j8BPiajdnA-gs~MQO2yvwkTyi4W5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />


        </div>


      </div>
      <div className='flex justify-center mt-[-100px]'>

        <div className=''><AvailabilityCheckingComponent /></div>
      </div>
      <div className='flex justify-center mt-10'>
        <div className=" w-[411px] h-[103px] top-0 left-0 border border-solid border-black flex justify-center items-center" >
          <div className=" h-[78px]   font-Lalezar-Regular,Helvetica font-extrabold  text-black text-[45px]">
            How It Works
          </div>
        </div>


      </div>
      <div className='flex justify-between items-center h-[550px]  mx-32'>
        <div className="flex justify-center items-center h-screen">
          <div className="w-[411px] h-[382px] text-center">
            <img className="w-[130px] h-[134px] mx-auto mb-7" alt="Register" src="../../../../public/images/register.png" />
            <div className="font-Lalezar-Regular text-4xl font-extrabold mb-7 text-black">Register</div>
            <p className="text-[#585858] text-2xl mb-8">
              Sign up on our platform to create your personal account, making it easy to manage your reservations and access exclusive offers.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="w-[421px] h-[375px] text-center">
            <div className="">
              <img className="w-[130px] h-[130px] mx-auto mb-7" alt="Location pin" src="../../../../public/images/location-pin.png" />
              <div className="font-Lalezar-Regular text-4xl font-extrabold text-black mb-7">Pick Up Location</div>
              <p className="text-[#585858] text-2xl mb-8">
                Choose your desired pickup location from our extensive network of convenient rental hubs, ensuring a seamless start to your journey.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="w-[447px] h-[375px] text-center">
            <div className="relative">
              <img className="w-[130px] h-[130px] mx-auto mb-7" alt="Schedule" src="../../../../public/images/schedule.png" />
              <div className="mx-auto mb-7 font-Lalezar-Regular font-extrabold text-4xl  text-black">
                Book Your Car
              </div>
              <p className="text-[#585858] text-2xl mb-8">
                Select the perfect vehicle to suit your needs, customize your rental details, and confirm your reservation with just a few clicks. Enjoy the road ahead!
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='flex justify-center mt-20'>
        <div className="  top-0 left-0 border border-solid border-black flex justify-center items-center" >
          <div className=" h-[78px] mx-6 my-3  font-Lalezar-Regular,Helvetica font-extrabold  text-black text-[45px]">
            Recommended Car Rental Deals
          </div>
        </div>


      </div>

      <div className='  m-20 '>
        <CarouselComponent />
      </div>



      <div className='flex justify-center mt-20'>
        <div className="  top-0 left-0 border border-solid border-black flex justify-center items-center" >
          <div className=" h-[78px] mx-6 my-3  font-Lalezar-Regular,Helvetica font-extrabold  text-black text-[45px]">
            Why Choose Us
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center h-[550px]  mx-32'>
        <div className="flex justify-center items-center h-screen">
          <div className="w-[411px] h-[382px] text-center">
            <img className="w-[130px] h-[134px] mx-auto mb-7" alt="Register" src="../../../../public/images/booking.png" />
            <div className="font-Lalezar-Regular text-4xl font-extrabold mb-7 text-black">Easy & Fast Booking</div>
            <p className="text-[#585858] text-2xl mb-8">
              Our user-friendly platform ensures a hassle-free booking experience, saving you time and effort, so you can  hit the road sooner.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="w-[421px] h-[375px] text-center">
            <div className="">
              <img className="w-[130px] h-[130px] mx-auto mb-7" alt="Location pin" src="../../../../public/images/location.png" />
              <div className="font-Lalezar-Regular text-4xl font-extrabold text-black mb-7">Many Pickup Location</div>
              <p className="text-[#585858] text-2xl mb-8">
                With a wide network of convenient pickup locations, we make it simple to access our rental services from wherever you are, providing flexibility and convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="w-[447px] h-[375px] text-center">
            <div className="">
              <img className="w-[130px] h-[130px] mx-auto mb-7" alt="Schedule" src="../../../../public/images/customer-experience.png" />
              <div className="mx-auto mb-7 font-Lalezar-Regular font-extrabold text-4xl  text-black">
                Customer Satisfaction
              </div>
              <p className="text-[#585858] text-2xl mb-8">
                We prioritize your satisfaction above all else, offering top-notch service and support to ensure your rental experience exceeds your expectations every time. Your journey, our commitment.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="review bg-gradient-to-r from-cyan-400 to-lime-400  pt-10 h-auto" >
        <div className='flex justify-center mt-'>
          <div className="  top-0 left-0 border border-solid border-black flex justify-center items-center" >
            <div className=" h-[78px] mx-6 my-3  font-Lalezar-Regular,Helvetica font-extrabold  text-black text-[45px]">
              What People say about us?
            </div>
          </div>
        </div>
        <div className="review-cards px-20 py-10 flex  justify-evenly ">
          <div className='review-main-div h-64 w-[500px] p-5 bg-custom-white-transparent rounded-lg content-evenly'>
            <div className='review-sub-1 flex mb-5'>
              <div className="pro-pic mr-5 "><img className='h-20 w-20 rounded-full' src="../../../../public/images/avatar-03.jpg" alt="" /></div>
              <div className="name-rating w-">
                <div className="name text-2xl pt-1 font-semibold">Alie Jones</div>
                <div className="rating mt-2">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className='review-sub2 text-center font-semibold'>
              the service this company provide is very good jsndjhfjn scnedj ddjcndwj cd cd cjeencjndcjnsajc dc sd isd ccjd chd cv
            </div>
          </div>
          {/* <div className='h-36 w-[500px] bg-white'>review-2</div>
          <div className='h-36 w-[500px] bg-white'>review-2</div> */}
        </div>


      </div>


      {/* <footer className="bg-[#101010] text-white">
  <div className="container mx-auto py-8">
    <div className="flex justify-between items-center">
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">ABOUT US</a>
        <a href="#" className="hover:underline">PRIVACY POLICY</a>
        <a href="#" className="hover:underline">DISCLAIMER</a>
        <a href="#" className="hover:underline">CONTACT US</a>
        <a href="#" className="hover:underline">HELP</a>
      </div>
      <div className="flex space-x-4">
        <a href="#"><img className="w-6 h-6" alt="Youtube" src="youtube.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Instagram" src="instagram.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Google plus" src="google-plus.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Linked in" src="linked-in.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Facebook" src="facebook.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Pinterest" src="pinterest.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Rss" src="RSS.svg" /></a>
        <a href="#"><img className="w-6 h-6" alt="Twitter" src="twitter.svg" /></a>
      </div>
    </div>
    <div className="mt-4 opacity-70">
      <p>Copyright © 2018 • Lift Media Inc.</p>
      <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
      <p>(123) 456-7890 <img className="w-6 h-6 inline-block ml-2" alt="Round phone" src="round-phone-24px.png" /></p>
    </div>
  </div>
</footer> */}





    </div>
  )
}

export default HomePage
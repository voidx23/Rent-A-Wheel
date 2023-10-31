import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import Dropdown from '../dropDownMenu/dropdownMenu';

function Navbar() {

  const { user } = useSelector((state) => state.user)
  console.log(user)

  return (

    <nav className="bg-gradient-to-r from-cyan-400 to-lime-400 p-4 h-[100px]">
      <div className=" ">
        <div className="flex items-center justify-between xl:w-">
          <div className="sm md lg xl: xl:mt-5 pl-10">
            <img className=' md lg xl:h-[52px]' src="../../../../public/images/rentawheel-removebg-preview.png" alt="" />
          </div>
          <ul className="space-x-16 ">
            <Link to={"/"}> <li className="text-black font-noto-sans-jp text-lg inline-block">HOME</li></Link>
            <Link><li className="text-black font-noto-sans-jp text-lg inline-block">CONTACTS</li></Link>
            <Link> <li className="text-black font-noto-sans-jp text-lg inline-block">ABOUT US</li></Link>
          </ul>
          <div><Link to="/vendor" className='font-bold text-xl border-2 p-2'>Become a host</Link></div>
          <div>

            {user ? (
              // <button className='rounded-lg p-4 pl-8 pr-8 ml-5 text-green-400 font-bold text-lg bg-black'>ACCOUNT</button>
              <Dropdown />
            ) : (
              <>
                <Link to="/signup" className='rounded-lg p-4 pl-8 pr-8 ml-5 text-green-400 font-bold text-lg bg-black '>SIGN UP</Link>
                <Link to="/login" className='rounded-lg border-4 border-black font-bold text-lg p-4 pl-8 pr-8 ml-5 '>SIGN IN</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>


  );
}

export default Navbar;

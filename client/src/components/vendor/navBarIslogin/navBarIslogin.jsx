// import React from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { dropCredential } from "../../../redux/slices/vendorSlice";


function Navbar() {
  const dispatch = useDispatch();


  return (

    <nav className="bg-AdminNav-white p-4 h-[100px]">
      <div className=" ">
        <div className="flex items-center justify-between xl:w-">
          <div className="sm md lg xl: xl:mt-5">
            <img className='sm md lg xl:h-[52px]' src="../../../../public/images/rentawheel-removebg-preview.png" alt="" />
          </div>

          <div>
            <button onClick={() => dispatch(dropCredential())}>Log Out</button>
          </div>
        </div>
      </div>
    </nav>


  );
}

export default Navbar;

import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { dropCredential } from '../../../redux/slices/userSlice';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="rounded-lg p-4 pl-8 pr-8 ml-5 text-green-400 font-bold text-lg bg-black"
      >
        ACCOUNT
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Settings
            </a>
            <a onClick={() => dispatch(dropCredential())} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// Sidebar.js

import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-auto bg-gray-800 text-gray-500 w-80 py-8 border">
            <div className="h-10">
              
            </div>
            <ul className="text-center">
                <li className="py-2 border-t border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <Link to="/vendor" className="text-gray-400 hover:text-gray-200">Dashboard</Link>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-gray-400  hover:text-gray-200">Message</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-gray-400  hover:text-gray-200">Wallet</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-gray-400  hover:text-gray-200">Bookings</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <Link  to="/vendor/vehicle" className="text-gray-400  hover:text-gray-200">My Vehicles</Link>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-gray-400  hover:text-gray-200">Reviews</a>
                </li>
               
            </ul>
        </div>
    );
};

export default Sidebar;

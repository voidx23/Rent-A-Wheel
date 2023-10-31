// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen bg-white text-black w-80 py-8 border">
            <div className="h-10">
              
            </div>
            <ul className="text-center">
                <li className="py-2 border-t border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <Link to={'/admin'} className="text-black hover:text-gray-800">Dashboard</Link>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-black  hover:text-gray-800">User Management</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-black  hover:text-gray-800">Fleet Management</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-black  hover:text-gray-800">Booking</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <a href="#" className="text-black  hover:text-gray-800">Payments</a>
                </li>
                <li className="py-2  border-b flex justify-center items-center h-20 text-lg font-semibold">
                    <Link to={'/admin/vehicleApproval'} className="text-black  hover:text-gray-800">Approval Management</Link>
                </li>
                {/* Add more sidebar items as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;

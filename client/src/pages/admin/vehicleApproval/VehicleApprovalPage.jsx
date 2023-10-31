import { useState, useEffect } from 'react';
import axios from 'axios';


function vehicleApprovalPage({ cars, setCars }) {

  

    const handleApproveClick = (carId) => {
        const isConfirmed = window.confirm("Are you sure to approve this vehicle?");
      
        if (isConfirmed) {
          axios.put(`http://localhost:8800/auth/admin/approveVehicle/${carId}`, { isApproved: "Approved" })
            .then(response => {
              // Handle the response if needed
              console.log("Vehicle approved successfully:", response.data);
    
              // Update the state with the updated list of cars
              setCars(prevCars => {
                return prevCars.map(car => {
                  if (car._id === carId) {
                    return { ...car, isApproved: "Approved" };
                  }
                  return car;
                });
              });
            })
            .catch(error => {
              // Handle errors if the request fails
              console.error("Error approving vehicle:", error);
            });
        }
      };
      const handleRejectClick = (carId) => {
        const isConfirmed = window.confirm("Are you sure to reject this vehicle?");
      
        if (isConfirmed) {
          axios.put(`http://localhost:8800/auth/admin/approveVehicle/${carId}`, { isApproved: "Rejected" }) 
            .then(response => {
              // Handle the response if needed
              console.log("Vehicle approved successfully:", response.data);
    
              // Update the state with the updated list of cars
              setCars(prevCars => {
                return prevCars.map(car => {
                  if (car._id === carId) {
                    return { ...car, isApproved: "Rejected" };
                  }
                  return car;
                });
              });
            })
            .catch(error => {
              // Handle errors if the request fails
              console.error("Error approving vehicle:", error);
            });
        }
      };



    useEffect(() => {


        axios.get("http://localhost:8800/auth/admin/vehicleList")
            .then(response => {
                // Use response.data directly as it should be JSON
                console.log(response.data, "mahindra")
                setCars(response.data);
            })
            .catch(error => {
                console.error('Error fetching car details:', error);
            });
    }, []);
    return (
        <>
            <div className='font-bold text-[30px] flex justify-center mt-20'>
                Vehicle Approval
            </div>
            <div className="container mx-auto p-8">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Make</th>
                            <th className="py-2 px-4 border-b text-left">Image</th>
                            <th className="py-2 px-4 border-b text-left">Username</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars
                            .filter(car => car.isApproved =="Not approved")
                            .map(car => (

                                <tr key={car._id}>
                                    <td className="py-2 px-4 border-b">{car.make}</td>
                                    <td className="py-2 px-4 border-b">
                                        <img src={car.image} alt="Vehicle 1" className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="py-2 px-4 border-b">{car.vendor_name}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button   onClick={() => handleApproveClick(car._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                                            Approve
                                        </button>
                                        <button  onClick={() => handleRejectClick(car._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        {/* <!-- More rows can be added similarly --> */}
                    </tbody>
                </table>
            </div>

        </>


    )
}

export default vehicleApprovalPage
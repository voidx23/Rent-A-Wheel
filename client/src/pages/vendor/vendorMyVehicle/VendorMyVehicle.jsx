import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CarListingCard from '../../../components/vendor/CarListingCard/CarListingCard';
import axios from 'axios';
import { useSelector } from 'react-redux';



function VendorMyVehicle() {
    const {vendor} = useSelector((state)=>state.vendor)
    const [cars, setCars] = useState([]);

    console.log(vendor,"raman")

    useEffect(() => {

        const vendorId = vendor._id
        

        console.log(vendorId,"displayed")
      



        axios.get(`http://localhost:8800/vendor/vehicleList/${vendorId}`)
        .then(response => {
          // Use response.data directly as it should be JSON
          console.log(response.data,"mahindra")
          setCars(response.data);
        })
        .catch(error => {
          console.error('Error fetching car details:', error);
        });
    }, []);

    return (
        <div className='px-6 py-4'>
            <div className='flex justify-end'><Link to="/vendor/addVehicle" >Add Vehicle</Link></div>

            <div className="flex flex-wrap">

               

                {cars.map(car => (
                    <CarListingCard key={car._id} car={car} />
                ))}
            </div>
        </div>

    );
}

export default VendorMyVehicle
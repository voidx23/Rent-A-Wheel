
import { useNavigate } from 'react-router-dom';
import AddVehicleForm from './vendorAddVehicleForm';
import { useSelector } from 'react-redux';
import axios from 'axios'

function AddVehiclePage() {
  const { vendor } = useSelector((state)=>state.vendor)
  const navigate = useNavigate();

  


  const handleAddVehicle = async (vehicleData) => {

    console.log("vehicle details",vehicleData)

   
    
   
    try{

      const addVehicleUrl ='http://localhost:8800/vendor/addVehicle';

      
      const response =await axios.post(addVehicleUrl,{vehicleData,vendor})

      if(response.status === 201){
       
        navigate('/vendor/vehicle');
      }else {
        
        console.error('vehicle adding failed:', response.statusText);
    }

    }catch(error){

      console.error('An error occurred:', error.message);

    }
   
    
    
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Add Vehicle</h1>
      <AddVehicleForm onAddVehicle={handleAddVehicle} />
    </div>
  );
}

export default AddVehiclePage;

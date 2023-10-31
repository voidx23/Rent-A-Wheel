import { useState } from 'react';

function AddVehicleForm({ onAddVehicle }) {
  const [vehicleData, setVehicleData] = useState({
    name: '',
    body: '',
    make: '',
    transmission: '',
    year: '',
    fuel: '',
    milege: '',
    seating: '',
    brake: '',
    engine: '',
    rate: '',
    registration: '',
    image: '',
    city: '',

    // Add more fields as needed (e.g., make, model, year, etc.)
  });

  const [imageFile, setImageFile] = useState(null)

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageFile) {
      console.log("inside if")
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the image data to the vehicleData state
        setVehicleData({ ...vehicleData, image: reader.result });

        // Call the onAddVehicle function with the updated vehicleData
        onAddVehicle({ ...vehicleData, image: reader.result });
      };
      reader.readAsDataURL(imageFile);
    } else {
      // If there's no image file, just call onAddVehicle with the current vehicleData
      onAddVehicle(vehicleData);
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Vehicle Name</label>
        <input
          type="text"
          name="name"
          value={vehicleData.name}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Body</label>
        <select
  name="body"
  value={vehicleData.body}
  onChange={handleInputChange}
  className="mt-1 p-2 border rounded w-full"
  required
>
  <option value="">Select Body Type</option>
  <option value="Sedan">Sedan</option>
  <option value="SUV">SUV</option>
  <option value="Hatchback">Hatchback</option>
  {/* Add more body type options as needed */}
</select>

      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Make</label>
        <input
          type="text"
          name="make"
          value={vehicleData.make}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Transmission</label>
        <select
          name="transmission"
          value={vehicleData.transmission}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        >
          <option value="">Select Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
          {/* Add more transmission options as needed */}
        </select>

      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Year</label>
        <input
          type="text"
          name="year"
          value={vehicleData.year}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Fuel type</label>
        <select
          name="fuel"
          value={vehicleData.fuel}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          {/* Add more fuel options as needed */}
        </select>

      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Milege</label>
        <input
          type="text"
          name="milege"
          value={vehicleData.milege}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Seating</label>
        <select
          name="seating"
          value={vehicleData.seating}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        >
          <option value="">Select Seating Type</option>
          <option value="5 seater-hatchback">5 seater hatchback</option>
          <option value="5 seater-sedan">5 seater sedan</option>
          <option value="7 seater">7 seater</option>
          {/* Add more seating options as needed */}
        </select>

      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Brake</label>
        <select
  name="brake"
  value={vehicleData.brake}
  onChange={handleInputChange}
  className="mt-1 p-2 border rounded w-full"
  required
>
  <option value="">Select Brake Type</option>
  <option value="ABS">ABS</option>
  <option value="No ABS">No ABS</option>
  {/* Add more brake type options as needed */}
</select>

      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Engine</label>
        <input
          type="text"
          name="engine"
          value={vehicleData.engine}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Rate per day</label>
        <input
          type="number"
          name="rate"
          value={vehicleData.rate}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Registration</label>
        <input
          type="text"
          name="registration"
          value={vehicleData.registration}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
  <label className="block text-sm font-medium text-gray-600">City</label>
  <select
    name="city"
    value={vehicleData.city}
    onChange={handleInputChange}
    className="mt-1 p-2 border rounded w-full"
    required
  >
    <option value="">Select City</option>
    <option value="Cochin">Cochin</option>
    <option value="Calicut">Calicut</option>
    <option value="Thrissur">Thrissur</option>
   
    {/* Add more city options as needed */}
  </select>
</div>


      {/* image upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Upload Image</label>
        <input

          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {

            setImageFile(e.target.files[0]);

          }}
          className="mt-1"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Add Vehicle
      </button>
    </form>
  );
}

export default AddVehicleForm;

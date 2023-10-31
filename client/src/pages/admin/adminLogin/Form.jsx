import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from your routing library
import { useDispatch } from "react-redux"
import { setCredentials } from "../../../redux/slices/adminSlice"




function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      // Define the API endpoint
      const apiUrl = 'http://localhost:8800/auth/admin/login';

      // Prepare the request data
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Assuming formData contains the user's data
      };

      // Send the API request
      const response = await fetch(apiUrl, requestData);

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();

        console.log(responseData)

        dispatch(setCredentials({
          admin: responseData.admin,
          adminToken: responseData.adminToken
        }))

        navigate('/admin')

      } else {


        console.error('Login failed:', response.statusText);
      }
    } catch (error) {

      console.error('An error occurred:', error.message);
    }
    console.log('Signin data submitted:', formData);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <form onSubmit={handleSubmit} className=' shadow-2xl p-4 md:p-8 lg:p-12 rounded-3xl bg-white bg-opacity-20'>
       
        <h1 className='font-extrabold text-3xl font-noto-sans-jp mb-6'>Sign In</h1>
        <div className='mb-6'>
          <label className=' font-bold' htmlFor="email">Email<span className="text-red-500">*</span></label><br />
          <input
            className='w-31rem h-10 rounded-md mb-6 '
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-6'>
          <label className=' font-bold' htmlFor="password">Password<span className="text-red-500">*</span></label><br />
          <input
            className='w-31rem h-10 rounded-md mb-6 '
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='bg-black text-white w-31rem h-12 rounded-md mt-3' >Sign In</button>
        {/* <div className='flex justify-center mt-5'><p>Don't have an Account?<Link to={'/signup'} style={{ color: 'blue' }}>Sign Up</Link></p></div> */}

      </form>
    </div>
  );
}

export default LoginForm;

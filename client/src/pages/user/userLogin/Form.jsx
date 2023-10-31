import React, { useState } from 'react';
import {BeatLoader} from "react-spinners/ClipLoader";
import { Link, useNavigate } from 'react-router-dom'; // Import Link from your routing library
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/slices/userSlice"
import GoogleAuth from '../../../components/user/googleAuth/googleAuth';

function LoginForm() {
  const [loader, setLoader] = useState(false);
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
      const apiUrl = 'http://localhost:8800/auth/login';

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

      console.log(response,"hiihiih")

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();

        console.log(responseData.user)

        dispatch(setCredentials({
          user: responseData.user,
          userToken: responseData.token
        }))

        navigate('/')

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
      {loader && (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/80 z-40">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      <form onSubmit={handleSubmit} className=' shadow-2xl p-4 md:p-8 lg:p-12 rounded-3xl bg-white bg-opacity-20'>
        <Link to="/"> Back To Home</Link>
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
          <div><Link to={'/forgotPassword'} style={{ color: 'red' }}>Forgot Password?</Link></div>
        </div>
        <button type="submit" className='bg-black text-white w-31rem h-12 rounded-md mt-3' >Sign In</button>

        <button><GoogleAuth setLoader={setLoader} /></button>
        <div className='flex justify-center mt-5'><p>Don't have an Account?<Link to={'/signup'} style={{ color: 'blue' }}>Sign Up</Link></p></div>

      </form>
    </div>
  );
}

export default LoginForm;

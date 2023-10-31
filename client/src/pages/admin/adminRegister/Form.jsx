import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from your routing library







function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',

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
            const apiUrl = 'http://localhost:8800/auth/admin/register';

            // Prepare the request data
            const requestData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            };

            // Send the API request
            const response = await fetch(apiUrl, requestData);


            if (response.ok) {
                const responseData = await response.json();
                navigate('/admin/login')

                console.log('Registration successful:', responseData);
            } else {

                console.error('Registration failed:', response.statusText);
            }


        } catch (error) {

            console.error('An error occurred:', error.message);
        }
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="shadow-2xl p-4 md:p-8 lg:p-12 rounded-3xl bg-white bg-opacity-20">


                <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl font-noto-sans-jp mb-6">Sign Up</h1>
                <div className="mb-6">
                    <label className="font-bold" htmlFor="userName">Username<span className="text-red-500">*</span></label><br />
                    <input
                        className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="font-bold" htmlFor="email">Email<span className="text-red-500">*</span></label><br />
                    <input
                        className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                {/* <div className="mb-6">
                    <label className="font-bold" htmlFor="phone">Phone<span className="text-red-500">*</span></label><br />
                    <input
                        className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div> */}
                <div className="mb-6">
                    <label className="font-bold" htmlFor="password">Password<span className="text-red-500">*</span></label><br />
                    <input
                        className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="font-bold" htmlFor="confirmPassword">Confirm Password<span className="text-red-500">*</span></label><br />
                    <input
                        className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>


                <button type="submit" className="bg-black text-white w-full md:w-96 h-12 rounded-md mt-3 lg:w-31rem">Sign Up</button>
                <div className='flex justify-center mt-5'><p>Already have an Account?<Link to={'/login'} style={{ color: 'blue' }}>Sign In</Link></p></div>
            </form>
        </div>


    );
}

export default SignupForm;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from your routing library
import toast, { Toaster } from 'react-hot-toast';






function ForgotPasswordForm() {
  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phone: '',
        otp: '',
        password: '',
        confirmPassword: ''
    });

    const [otpVerified, setOtpVerified] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [countdown, setCountdown] = useState(60);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSendOTP = async (e) => {
        e.preventDefault();

        const { phone } = formData;
        const otpSentUrl = 'http://localhost:8800/auth/sendOtp';

        const otpSendData = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                phone
            })
        };

        const otpSendResponse = await fetch(otpSentUrl, otpSendData);

        if (otpSendResponse.ok) {
            setOtpSent(true);
            setCountdown(60);
            toast.success("OTP send succesfully")
            console.log("OTP send successful")
        } else {
            console.error("OTP send failed")
            toast.error("OTP send failed")
        }
    }

    useEffect(() => {
        let timer;
        if (countdown > 0 && otpSent) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        };
    }, [countdown, otpSent]);



    const handleVerify = async (e) => {
        e.preventDefault();

        try {

            const { phone, otp } = formData;

            const otpVerifcationUrl = 'http://localhost:8800/auth/verifyOtp';

            //request data for OTP verification
            const otpVerificationData = {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone,
                    otp,
                }),
            };

            //OTP verification request to server

            const otpVerificationResponse = await fetch(otpVerifcationUrl, otpVerificationData);

            if (otpVerificationResponse.ok) {



                console.log("OTP verification successful");
                toast.success("OTP verification successful")
                setOtpVerified(true);

            } else if (otpVerificationResponse.status === 400) {

                toast.error("invalid OTP")

            }
            else {
                toast.error("OTP verification failed")
                console.error('OTP verification failed', otpVerificationResponse.statusText);
            }

        } catch (error) {
            // Handle network errors or exceptions
            console.error('An error occurred:', error.message);
        }
        console.log('Form data submitted:', formData);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            const { phone, password } = formData;

            // Validate newPassword if needed

            const resetPasswordUrl = 'http://localhost:8800/auth/resetPassword';

            const resetPasswordData = {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone,
                    password,
                }),
            };

            const resetPasswordResponse = await fetch(resetPasswordUrl, resetPasswordData);

            if (resetPasswordResponse.ok) {
                console.log("Password reset successful");
                navigate('/login')
            } else {
                console.error('Password reset failed', resetPasswordResponse.statusText);
            }
        } catch (error) {
            // Handle network errors or exceptions
            console.error('An error occurred:', error.message);
        }
    };


    return (
       
        <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
            
            {otpVerified ? (
                <form onSubmit={handleResetPassword} className="shadow-2xl p-4 md:p-8 lg:p-12 rounded-3xl bg-white bg-opacity-20">


                    <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl font-noto-sans-jp mb-6">Reset Password</h1>

                    <div className="mb-6">
                        <label className="font-bold" htmlFor="phone">Password<span className="text-red-500">*</span></label><br />
                        <input
                            className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                            type="Password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-6">
                        <div className='flex justify-between'>
                            <label className="font-bold" htmlFor="otp">Confirm password<span className="text-red-500">*</span></label>

                        </div>
                        <br />
                        <input
                            className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />

                    </div>

                    <button type="submit" className="bg-black text-white w-full md:w-96 h-12 rounded-md mt-3 lg:w-31rem">Submit</button>

                </form>
            ) : (
                <form onSubmit={handleVerify} className="shadow-2xl p-4 md:p-8 lg:p-12 rounded-3xl bg-white bg-opacity-20">


                    <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl font-noto-sans-jp mb-6">Forgot Password</h1>

                    <div className="mb-6">
                        <label className="font-bold" htmlFor="phone">Phone<span className="text-red-500">*</span></label><br />
                        <input
                            className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-6">
                        <div className='flex justify-between'>
                            <label className="font-bold" htmlFor="otp">OTP<span className="text-red-500">*</span></label>

                            {otpSent && countdown > 0 ? (
                                <p>Resend OTP in {countdown} seconds</p>
                            ) : (
                                <a
                                    className="font-bold py-2 px-4 rounded  hover:text-blue-700 hover:cursor-pointer"
                                    onClick={handleSendOTP}
                                    disabled={otpSent && countdown > 0}
                                >
                                    Send OTP
                                </a>
                            )}

                        </div>
                        <br />
                        {countdown !== 0 && (<input
                            className="w-full md:w-96 h-10 rounded-md lg:w-31rem"
                            type="text"
                            id="otp"
                            name="otp"
                            value={formData.otp}
                            onChange={handleInputChange}
                        />)




                        }


                    </div>

                    <button type="submit" className="bg-black text-white w-full md:w-96 h-12 rounded-md mt-3 lg:w-31rem">Verify</button>

                </form>



            )
            }
        </div>


    );
}

export default ForgotPasswordForm;

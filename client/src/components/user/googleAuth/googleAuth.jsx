// import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { setCredentials } from '../../../redux/slices/userSlice';
import jwt_decode from 'jwt-decode';


function GoogleAuth() {
   
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const decodedToken = jwt_decode(credentialResponse.credential);
            const googleAuthUrl = "http://localhost:8800/auth/google";
            const requestData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(decodedToken),
            };


            // setLoader(true)
            const response = await fetch(googleAuthUrl, requestData);
            const data = await response.json();

            console.log(data, "ramdev ammavan")
            if (response.ok) {

                dispatch(setCredentials({ user: data.user || data.userExists, userToken: data.token }))
               
                toast.success('Google login successful')

                navigate('/');
                console.log("Google login successful", credentialResponse);
            }
        } catch (error) {
            if (error?.response?.status === 400) {
                const errorData = error.response.data.errors;
                let errorMsg = errorData.map(e => e?.msg || e)
                // setLoader(false)
                errorMsg.forEach(e => addToast(e, { appearance: "error", autoDismiss: true }))
            } else {
                const err = error?.response?.data?.error
                console.error(err)
                // setLoader(false)
                handleGoogleLoginFailure(err)
            }
        } finally {
            // setLoader(false)
        }
    };

    const handleGoogleLoginFailure = (error) => {
        console.error("Google login failed", error);
        toast.error("Google login failed")
    };


    return (
        <div id="signInButton">
             
            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
            />
          
        </div>

    )
}

export default GoogleAuth
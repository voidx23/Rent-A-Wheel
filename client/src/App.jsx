import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import SignUpPage from './pages/user/userRegister';

import '../src/App.css'

import LoginPage from './pages/user/userLogin';
import HomePage from './pages/user/userHome';
import VendorLandingPage from './pages/vendor/vendorLandingPage/VendorLandingPage';
import VendorSignUpPage from './pages/vendor/vendorRegister';
import VendorLoginPage from './pages/vendor/vendorLogin';
import DashBoard from './pages/vendor/vendorHome/VendorDashBoard';
import AdminLoginPage from './pages/admin/adminLogin'
import AdminSignUpPage from './pages/admin/adminRegister'
import AdminHome from './pages/admin/adminHome/AdminHome';
import { useSelector } from "react-redux"
import ForgotPasswordPage from './pages/user/userForgotPassword';
import PrivateVendorRoute from "./components/vendor/privateRoutes/PrivateRoutes"
import PrivateAdminRoute from './components/admin/privateRoutes/PrivateRoutes';
import VendorMyVehicle from './pages/vendor/vendorMyVehicle/VendorMyVehicle';
import AddVehiclePage from './pages/vendor/vendorAddVehicle/AddVehiclePage';
import VehicleApproval from './pages/admin/vehicleApproval/VehicleApprovalPage';
import AutoListingPage from './pages/user/autoListingPage/AutoListingPage';
import AutoDetailedView from './pages/user/autoDetailedView/AutoDetailedView';



function App() {
  const [cars, setCars] = useState([]);
  const { vendor } = useSelector((state) => state.vendor)
  const { admin } = useSelector((state) => state.admin)
  const client_ID = "699588062260-o03snlo4pdp9tlqlg20dj7nsn2d5ub2q.apps.googleusercontent.com"



  return (
    <>

      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Toaster />
          <GoogleOAuthProvider clientId={client_ID}>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />}/>
              <Route path="/autoListing" element={<AutoListingPage/>}/>
              <Route path="/detailed-view" Component={AutoDetailedView}/>

              

              <Route path="/vendor" element={<PrivateVendorRoute />} >
                <Route index element={<DashBoard />} />
                <Route path='vehicle' element={<VendorMyVehicle />} />
                <Route path='addVehicle' element={<AddVehiclePage />}/>
              </Route>

              <Route path="/vendor/landing" element={<VendorLandingPage />} />
              <Route path="/vendor/register" element={<VendorSignUpPage />} />
              <Route path="/vendor/login" element={<VendorLoginPage />} />


              <Route path="/admin" element={<PrivateAdminRoute />}>
                <Route index element={<AdminHome />}></Route>
                <Route path='vehicleApproval' element={<VehicleApproval cars={cars} setCars={setCars} />}></Route>

              </Route>
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin/register" element={<AdminSignUpPage />} />

            </Routes>

          </GoogleOAuthProvider>
        </LocalizationProvider>

      </BrowserRouter>

    </>
  );
}


export default App

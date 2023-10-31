import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../navBarIslogin/navBarIslogin'
import Sidebar from '../sideBar/sideBar'


function PrivateRoutes() {

    const vendor = useSelector((state) => state.vendor)
    console.log(vendor)
    return vendor.vendor ? (
        <div>
            <Navbar />
            <div className='flex gap-2'>
                <Sidebar />
                <div className='flex-grow'>
                    <Outlet />

                </div>

            </div>
        </div>
    ) : <Navigate to="/vendor/landing" />
}

export default PrivateRoutes
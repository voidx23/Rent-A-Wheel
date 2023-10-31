import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../navBar/AdminNavBar'
import Sidebar from '../sideBar/sideBar'


function PrivateRoutes() {

    const admin = useSelector((state) => state.admin)
    console.log(admin)
    return admin.adminToken ? (
        <div>
            <Navbar />
            <div className='flex gap-2'>
                <Sidebar />
                <div className='flex-grow'>
                    <Outlet />

                </div>

            </div>
        </div>
    ) : <Navigate to="/admin/login" />
}

export default PrivateRoutes
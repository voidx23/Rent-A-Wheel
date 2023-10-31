import React from 'react'
import {useDispatch}  from 'react-redux'
import { dropCredential } from '../../../redux/slices/adminSlice'

function AdminNavBar() {

    const dispatch = useDispatch();
  return (
    <nav className='p-4 h-[100px] bg-slate-300'>
  <div className='h-[70px] flex justify-end'>
        <button onClick={()=> dispatch(dropCredential())}> this is the button</button>
    </div>

    </nav>
  
  )
}

export default AdminNavBar
import React from 'react'
import Layouts from "./../../Components/Layouts/layout";
import AdminMenu from '../../Components/Layouts/AdminMenu';
import { useAuth } from '../../context/auth';

const adminDash = () => {
  const [auth] = useAuth()
  return (
    <Layouts>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
          <AdminMenu />
          </div>
          <div className='col-md-9'>
            <div className='card w-75 p-3'>
              <h3>Admin Name: {auth?.user?.name}</h3>
              <h3>Admin Email: {auth?.user?.email}</h3>
              <h3>Admin Phone Number: {auth?.user?.phone}</h3>
              <h3>Admin Address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
      
    </Layouts>
  )
}

export default adminDash

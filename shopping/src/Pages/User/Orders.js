import React from 'react'
import Layouts from '../../Components/Layouts/layout'
import UserMenu from '../../Components/Layouts/UserMenu'

const Orders = () => {
  return (
    <Layouts>
         <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
            <UserMenu />
        </div>
        <div className='col-md-9'>
            <h2>My Orders</h2>
        </div>
      </div>
      </div>
    </Layouts>
  )
}

export default Orders

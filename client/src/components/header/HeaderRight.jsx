import React from 'react'
import { Link } from 'react-router-dom'

function HeaderRight() {
  return (
    <div className='font-roboto flex mx-2 text-fuchsia-50 font-bold'>
        <h2 className='mr-4'>
            <Link to={'/login'}>Login</Link>
        </h2>
        <h2 className=''>
            <Link to={'/register'}>Register</Link>
        </h2>
    </div>
  )
}

export default HeaderRight
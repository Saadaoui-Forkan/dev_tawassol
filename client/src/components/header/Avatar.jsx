import React from 'react'
import avatar from '../../img/avatar.png'

function Avatar() {
  return (
    <div className='w-9 h-9'>
        <img src={avatar} alt={avatar}  className='h-full w-full rounded-full'/>
    </div>
  )
}

export default Avatar
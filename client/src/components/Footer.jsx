import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='font-logo text-sm text-zinc-500 text-center w-full border-t-2 border-zinc-500 py-2'>
        <p>Developers Tawassol &copy; {currentYear}</p>
    </div>
  )
}

export default Footer
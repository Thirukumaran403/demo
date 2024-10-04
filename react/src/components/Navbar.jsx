import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full flex-row font-medium gap-4'>
    <ul className='flex flex-row gap-4 bg-gray-400 justify-start list-none'>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
    </ul>    
    </div>
  )
}

export default Navbar
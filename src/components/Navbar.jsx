import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import * as Scroll from 'react-scroll'
import {Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='flex justify-center bg-gradient'>
      {/* Container */}
      <div className='max-w-[1240px] w-full h-[80px] flex justify-between items-center text-gray-300'>
        <div className='ml-8 flex justify-between items-center'>
          <img src={Logo} />
          <h2 className='p-4 text-2xl font-bold'>Ethereum.</h2>
        </div>
        <ul className='hidden md:flex justify-between'>
          <li className='p-4'>
            <Link to='home' smooth={true} duration={500}>Home</Link>
          </li>
          <li className='p-4'>
            <Link to='marketplace' smooth={true} duration={500}>Marketplace</Link>
          </li>
          <li className='p-4'>
            <Link to='decentralized' smooth={true} duration={500}>Stats</Link>
          </li>
          <li className='p-4'>
            <Link to='built' smooth={true} duration={500}>Built</Link>
          </li>
          <li className='p-4'>
            <Link to='avalanche' smooth={true} duration={500}>Avalanche</Link>
          </li>
        </ul>
        <div className='hidden md:flex justify-between'>
          <p className='p-4 hover:text-blue-600 duration-300 cursor-pointer'>Sign Up</p>
          <p className='p-4 hover:text-blue-600 duration-300 cursor-pointer'>Log In</p>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-20 cursor-pointer mr-8'>
          {!nav ? <FaBars /> : <FaTimes className='fixed' /> }
        </div>

        {/* Mobile dropdown nav */}
        <div className={!nav ? 'hidden' : 'fixed z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-blue-900/90'}>
          <ul className='flex flex-col justify-between '>
            <li className='p-4 text-2xl'>
              <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link onClick={handleClick} to='marketplace' smooth={true} duration={500}>Marketplace</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link onClick={handleClick} to='decentralized' smooth={true} duration={500}>Decentralized</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link onClick={handleClick} to='built' smooth={true} duration={500}>Built</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link onClick={handleClick} to='avalanche' smooth={true} duration={500}>Avalanche</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
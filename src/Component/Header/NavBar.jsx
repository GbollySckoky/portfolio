import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='bg-black fixed w-full z-[9999] text-white'>
      <div className='w-[80%] mx-auto'>
        <nav className='flex justify-between py-4'>
          <div>
            <Link to='hero' spy={true} smooth={true} duration={500} className='font-semibold text-2xl cursor-pointer'>
              COKER
            </Link>
          </div>
          <ul className='flex space-x-8'>
            <li> 
              <Link to='myWork' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                Projects
              </Link>
            </li> 
            <li> 
              <Link to='about' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                About
              </Link>
            </li> 
            <li> 
              <Link to='experience' spy={true} smooth={true} duration={500} className='cursor-pointer'>
               Experience
              </Link>
            </li> 
            <li> 
              <Link to='skills' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                Skills
              </Link>
            </li> 
            <li> 
              <Link to='contact' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                Contact
              </Link>
            </li> 
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

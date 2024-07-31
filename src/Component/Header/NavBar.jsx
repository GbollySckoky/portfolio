import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState(false)
  const handleIcon = () => {
    setActiveIcon((prev) => !prev)
  }
  return (
    <div className='bg-black fixed w-full z-[9999] text-white'>
      <div className='w-[80%] mx-auto'>
        <nav className='lg:flex hidden items-center justify-between py-4'>
          <div>
            <Link to='/' spy={true} smooth={true} duration={500} className='font-semibold text-2xl cursor-pointer'>
              COKER
            </Link>
          </div>
          <ul className='flex space-x-8  '>
            <li> 
              <Link to='/myWork' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                MyWork
              </Link>
            </li> 
            <li> 
              <Link to='/about' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                About
              </Link>
            </li> 
            <li> 
              <Link to='/experience' spy={true} smooth={true} duration={500} className='cursor-pointer'>
               Experience
              </Link>
            </li> 
            <li> 
              <Link to='/skills' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                Skills
              </Link>
            </li> 
            <li> 
              <Link to='/contact' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                Contact
              </Link>
            </li> 
          </ul>
          
        </nav>
        <div>
          <div className='lg:hidden flex items-center justify-between py-4'>
              <Link to='/' spy={true} smooth={true} duration={500} className='font-semibold text-2xl cursor-pointer'>
                COKER
              </Link>
              <div className='cursor-pointer' onClick={handleIcon}>
                {activeIcon ? <IoMdClose size={23} /> : <MdOutlineMenu size={23} />}
              </div>
          </div>
          {activeIcon && (
             <ul className='lg:hidden space-y-6' >
             <li> 
               <Link onClick={handleIcon} to='/myWork' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                 MyWork
               </Link>
             </li> 
             <li> 
               <Link onClick={handleIcon} to='/about' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                 About
               </Link>
             </li> 
             <li> 
               <Link onClick={handleIcon} to='/experience' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                Experience
               </Link>
             </li> 
             <li> 
               <Link onClick={handleIcon} to='/skills' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                 Skills
               </Link>
             </li> 
             <li> 
               <Link onClick={handleIcon} to='/contact' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                 Contact
               </Link>
             </li> 
           </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

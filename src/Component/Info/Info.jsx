import React from 'react'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";


const Info = () => {
  return (
    <div>
        <div className='bg-[#E6E8EA] py-[50px]'>
            <div className='text-center  text-blues'>
                <h1 className='text-2xl font-bold'>Ready to take your web projects to the next  level ?</h1>
                <p className='mt-[25px] text-[15px] w-[500px] mx-auto mb-[40px] leading-6'>
                    Let's join forces to create outstanding user experiences. Get in touch today to discuss 
                    how I can support your digital project needs. Let's build something amazing together!
                </p>
                <button className='bg-white hover:bg-blues hover:text-white text-blues px-6
                    py-3 rounded-lg shadow-lg'>
                    Get In Touch
                </button>
            </div>
        </div>
        <div className='grid place-items-center'>
            <div className='flex justify-center items-center space-x-6 mt-6'>
            <Link to={'mailto:gbolahancoker99@gmail.com'} >
              <CiMail size={20} />
            </Link>
            <Link to={'https://github.com/GbollySckoky'} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={20} />
            </Link>
            <Link to={'https://www.instagram.com/sckokyy'} target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram color='red' size={20} />
            </Link>
            <Link to={'https://www.linkedin.com/in/gbolahan-coker-85ba39241'} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin color='#0866C2' size={20} />
            </Link>
            <Link to={'https://x.com/Sckokyy'} target="_blank" rel="noopener noreferrer">
              <RiTwitterXFill  size={20} />
            </Link>
            </div>
            <div className='flex items-center text-[15px] text-blues my-4'>
                <p className='pr-2'> &copy; 2024 </p>
                <Link to={'mailto:gbolahancoker99@gmail.com'} target='_blank'>
                    gbolahancoker99@gmail.com
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Info
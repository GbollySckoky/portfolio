import React from 'react';
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Cursor } from 'react-simple-typewriter';
import { RiTwitterXFill } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";
import {CiMail} from "react-icons/ci"
const Hero = () => {
  return (
    <div className='w-[80%] mx-auto text-blues'>
      <div className='lg:flex items-center pt-[150px] mb-[120px]'>
        <div className='w-full '>
          <div>
            <p className='mb-[20px] font-normal fade-in'>Hi, my name is</p>
            <h1 className='text-2xl lg:text-3xl font-semibold text-blues fade-in'>
              GBOLAHAN COKER.
            </h1>
            <h1 className='text-2xl lg:text-3xl font-semibold text-Gray my-4 fade-in-delay'>
              FRONT-END DEVELOPER
              <Cursor /> 
            </h1>
            <div className='mt-4 fade-in '>
              <p className='text-[15px] text-blues leading-7'>
                    Hi, I'm Gbolahan, a web developer with 3 years of experience in JavaScript, TypeScript, React,
                    and Next.js. I specialize in building accessible, reusable components and creating responsive,
                    user-friendly websites. My optimized designs have improved performance by 30% and increased 
                    customer retention by 20%. These includes:
              </p>
              <ul className='text-[15px] text-blues list-disc pl-5 mt-2'>
              <li className='py-1'>Implementing Payment Gateway</li>
              <li className='py-1'>Implemennting real-time data communication using Websocket.io</li>
                <li className='py-1'>Developing web applications with mobile responsiveness</li>
                <li className='py-1'>Consuming and manipulating APIs</li>
                <li className='py-1'>Web performance and optimizing</li>
                {/* <li className='py-1'>Creating quality mockups and prototypes</li> */}
              </ul>
            </div>
          </div>
          <div className='flex items-center space-x-6 mt-7 cursor-pointer fade-in-icons'>
            <Link href={'mailto:gbolahancoker99@gmail.com'}  target="_blank">
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
              <RiTwitterXFill size={20} />
            </Link>
            <Link to={'tel:09075437117'} target="_blank" rel="noopener noreferrer">
              <MdLocalPhone size={20} />
            </Link>
          </div>
          {/* <div className='mt-8 '>
                <Link 
                  className='bg-bluess text-white p-3 rounded-lg shadow-md bg-blues'
                  target='_blank'
                  to='https://gbolahanresume.vercel.app/'>
                  View Resume 
                </Link>
          </div> */}
        </div>
            
        <div>
    </div>
      </div>
    </div>
  );
}

export default Hero;

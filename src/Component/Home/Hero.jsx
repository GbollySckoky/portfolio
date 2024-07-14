import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { RiTwitterXFill } from "react-icons/ri";
import image from '../../assets/Frame 2.png'
// import MyWork from '../MyWork/MyWork';
const Hero = () => {


  return (
    <div className='w-[80%] mx-auto text-blues'>
      <div className='flex items-center pt-[150px] mb-[20px]'>
        <div className='w-full'>
          <div>
            <p className='mb-[20px] font-normal'>Hi, my name is</p>
            <h1 className='text-3xl font-semibold text-blues'>
              GBOLAHAN COKER.
            </h1>
            <h1 className='text-3xl font-semibold text-Gray my-4'>
              FRONT-END DEVELOPER
              <Cursor />
            </h1>
            <div className='mt-4'>
              <p className='text-[15px] text-blues  leading-7'>
                I'm a front-end developer with a passion for crafting exceptional digital experiences and one year of 
                experience in designing and building responsive web designs. My expertise lies in creating accessible, 
                human-centered, and SEO-friendly products. I am proficient in CSS and JavaScript frameworks, with 
                extensive knowledge of ReactJS and NextJS. Notable achievements include:
              </p>
              <ul className='text-[15px] text-blues list-disc pl-5 mt-2'>
                <li className='py-1'>Developing web applications with mobile responsiveness</li>
                <li className='py-1'>Consuming and manipulating APIs</li>
                <li className='py-1'>Maintaining and improving websites</li>
                <li className='py-1'>Creating quality mockups and prototypes</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center space-x-6 mt-6'>
            <Link to={'mailto:gbolahancoker99@gmail.com'} target="_blank">
              <CiMail size={20} />
            </Link>
            <Link to={'#'} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={20} />
            </Link>
            <Link to={'https://www.instagram.com/sckokyy'} target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram color='red' size={20} />
            </Link>
            <Link to={'#'} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin color='#0866C2' size={20} />
            </Link>
            <Link to={'https://x.com/Sckokyy'} target="_blank" rel="noopener noreferrer">
              <RiTwitterXFill  size={20} />
            </Link>
          </div>
          <button className='shadow-lg font-medium border-[1px] text-sm  border-gray-600 bg px-5 py-3 mt-5 rounded-lg '>
            Get In Touch
          </button>
        </div>
        <div className='w-full grid place-items-end'>
            <img src={image} alt="" />
        </div>
      </div>
      {/* <MyWork />  */}
    </div>
  );
}

export default Hero;

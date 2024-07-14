import React from 'react'
import image from '../../assets/Screenshot.png'
import { Link } from 'react-router-dom'
import { IoLogoGithub } from "react-icons/io5";

const MyWork = () => {
  return (
    <div className=''>
        <div className='w-[80%] mx-auto'>
            <h1 className='text-2xl font-semibold  bg-black text-white p-5'>
                MY WORK
            </h1>
            <div className='mt-[30px]'>
                <h1>MY WORK</h1>
                <div className='grid grid-cols-3'>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl w-full'/>
                    <div className="overlay rounded-2xl">
                        <Link 
                            className='text underline text-base' 
                            to='https://flexa-livid.vercel.app/' 
                            target='_blank'>
                            Visit Website
                        </Link>
                        <Link 
                            className='icons rounded-xl' 
                            to='https://github.com/GbollySckoky/Flexa-' 
                            target='_blank'>
                            <IoLogoGithub size={24} />
                        </Link>

                    </div>
                </div>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl w-full'/>
                    <div className="overlay rounded-2xl">
                        <Link className='text underline text-base' to='https://flexa-livid.vercel.app/' target='_blank'>
                            Visit Website
                        </Link>
                        <Link className='icons rounded-xl' to='https://github.com/GbollySckoky/Flexa-' target='_blank'>
                            <IoLogoGithub size={24} />
                        </Link>

                    </div>
                </div>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl'/>
                    <div className="overlay rounded-2xl">
                        <Link className='text underline' to='https://flexa-livid.vercel.app/' target='_blank'>
                            Visit Website
                        </Link>
                        <Link className='icons rounded-xl' to='https://github.com/GbollySckoky/Flexa-' target='_blank'>
                            <IoLogoGithub size={24} />
                        </Link>

                    </div>
                </div>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl'/>
                    <div className="overlay rounded-2xl">
                        <Link className='text underline' to='https://flexa-livid.vercel.app/' target='_blank'>
                            Visit Website
                        </Link>
                        <Link className='icons rounded-xl' to='https://github.com/GbollySckoky/Flexa-' target='_blank'>
                            <IoLogoGithub size={24} />
                        </Link>

                    </div>
                </div>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl'/>
                    <div className="overlay rounded-2xl">
                        <Link className='text underline' to='https://flexa-livid.vercel.app/' target='_blank'>
                            Visit Website
                        </Link>
                        <Link className='icons rounded-xl' to='https://github.com/GbollySckoky/Flexa-' target='_blank'>
                            <IoLogoGithub size={24} />
                        </Link>

                    </div>
                </div>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl'/>
                    <div className="overlay rounded-2xl">
                        <Link className='text underline' to='https://flexa-livid.vercel.app/' target='_blank'>
                            Visit Website
                        </Link>
                        <Link className='icons rounded-xl' to='https://github.com/GbollySckoky/Flexa-' target='_blank'>
                            <IoLogoGithub size={24} />
                        </Link>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyWork
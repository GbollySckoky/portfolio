import React from 'react'
import image from '../../assets/Screenshot.png'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import images1 from '../../assets/Screenshot 2024-07-21 at 14.20.03.png';
import img from '../../assets/Screenshot 2024-07-21 at 14.20.31.png'
import imgs from '../../assets/Screenshot 2024-07-21 at 19.47.59.png'


const MyWork = () => {
  return (
    <div className=''>
        <div className='w-[80%] mx-auto mb-[70px]'>
            <h1 className='text-2xl font-semibold bg-black text-white p-5'>
                MY WORK
            </h1>
            <div className='mt-[30px]'>
                <h1 className='text-center text-2xl font-medium my-[40px]'>MY WORK</h1>
                {/* <div className='grid grid-cols-3 mt-[55px]'>
                <div className="container mb-[40px] w-full">
                    <img src={image} alt="Avatar" className='rounded-2xl w-full'/>
                    <div className="overlay  rounded-2xl">
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
                </div> */}
            </div>
        </div>
        <Carousel className='w-[30%] mx-auto'>
            <div>
                <img src={image} alt="Slide 1"/>
                <p className="legend">FLEXA</p>
                <div className='space-x-3'>
                    <Link to="https://finance--psi.vercel.app" 
                        className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Live
                    </Link>
                    <Link to="https://github.com/GbollySckoky/Flexa-"  
                        target='_blank' className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Github
                    </Link>
                </div>
            </div>
            <div>
                <img src={images1} alt="Slide 2"/>
                <p className="legend">POSH PACE</p>
                <div className='space-x-3'>
                    <Link to="https://e-commerce-ruddy-rho.vercel.app" 
                        className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Live
                    </Link>
                    <Link to="https://github.com/GbollySckoky/E-commerce" 
                         target='_blank' className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Github
                    </Link>
                </div>
            </div>
            <div>
                <img src={img} alt="Slide 3"/>
                <p className="legend">NETFLIX</p>
                <div className='space-x-3 mt-[70px]'>
                    <Link to="https://movie-box-seven-psi.vercel.app" 
                        className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Live
                    </Link>
                    <Link to="https://github.com/GbollySckoky/MovieBox"  target='_blank'>
                        Github
                    </Link>
                </div>
            </div>
            <div>
                <img src={imgs} alt="Slide 4"/>
                <p className="legend">HOME-ESTATE</p>
                <div className='space-x-3 mt-[10px]'>
                    <Link to="https://home-estate.vercel.app" 
                        className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Live
                    </Link>
                    <Link 
                        to="https://github.com/GbollySckoky/HomeEstate"  
                        target='_blank' className='bg-blues text-white px-7 py-2 rounded-lg'>
                        Github
                    </Link>
                </div>
                
            </div>
        </Carousel>
        <div>
        </div>
    </div>
  )
}

export default MyWork

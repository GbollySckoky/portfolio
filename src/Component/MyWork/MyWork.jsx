import React from 'react'
import image from '../../assets/Screenshot.png'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoLink } from "react-icons/go";
import images1 from '../../assets/Screenshot 2024-07-21 at 14.20.03.png';
import img from '../../assets/They.png'
import imgs from '../../assets/Screenshot 2024-07-21 at 19.47.59.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { IoLogoGithub } from "react-icons/io";


const MyWork = () => {

    const slideImages = [
        {
        image:image,
        links: 'https://finance--psi.vercel.app',
        git:'https://github.com/GbollySckoky/Flexa-',
        name: 'FLEXA',
        about: 'Flexa, your premier financial companion, is the forefront online savings and investing platform in Nigeria. Over the past 1 years, our community has preserved and invested billions of Naira, redirecting funds that might have been impulsively spent'
        },
       {
        image:img,
        links: 'https://movie-box-seven-psi.vercel.app',
        git:'https://github.com/GbollySckoky/MovieBox',
        name: 'NETFLIX',
        about:'I have developed a Netflix clone website to replicate the functionality and design of the popular streaming platform. This project demonstrates my skills in front-end development and my ability to create a user-friendly, media-rich application.'
       },
       {
        image:images1,
        links: 'https://e-commerce-ruddy-rho.vercel.app',
        git:'https://github.com/GbollySckoky/E-commerce',
        name: 'POSHPACE',
        about:'Posh Pace is an e-commerce platform that offers a wide variety of clothing and accessories for women, men, and kids. The site features an appealing and user-friendly interface.'
       },
       {
        image:imgs,
        links: 'https://home-estate.vercel.app',
        git:'https://github.com/GbollySckoky/HomeEstate',
        name: 'HOME-ESTATE',
        about: 'Real estate is a sector encompassing the buying, selling, and renting of land, buildings, and housing. It serves as a critical component of the economy, providing living spaces, commercial locations, and investment opportunities.'
       },
    ];
  return (
    <div className='mb-[70px]'>
        <div className='w-[80%] mx-auto mb-[50px]'>
            <h1 className='text-xl lg:text-3xl font-semibold bg-black text-white p-5'>
                MY WORK
            </h1>
            <div className='mt-[30px]'>
                <h1 className='text-center text-xl lg:text-2xl font-medium my-[40px]'>MY WORK</h1>
            </div>
        </div>
        <div className="slide-container w-[85vw]  md:w-[50vw] mx-auto">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide lg:w-[30vw] mx-auto" key={index}>
                        <img src={slideImage.image} alt="" />
                        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <h1 className='text-center py-1 cursor-pointer text-xl lg:text-2xl font-medium my-3 hover:bg-blues 
                            hover:text-white rounded-2xl'>
                                {slideImage.name}
                            </h1>
                            <p className='font-light mx-5 text-sm my-3'>{slideImage.about}</p>
                        </div>
                        <div className='space-x-3 flex items-center justify-center my-4'>
                            <Link to="https://finance--psi.vercel.app" 
                                className='underline px-7 flex items-center text-base py-2 rounded-lg' target='_blank'>
                                <span className='mr-3'> < GoLink size={17} /> </span>
                                LiveLink
                            </Link>
                            <Link to="https://github.com/GbollySckoky/Flexa-"  
                                target='_blank' className='flex items-center text-base underline px-7 py-2 rounded-lg'>
                                <span className='mr-3'> < IoLogoGithub size={17}/> </span>
                                Github
                            </Link>
                        </div>
                    </div>
                ))} 
            </Slide>
        </div>
    </div>
  )
}

export default MyWork

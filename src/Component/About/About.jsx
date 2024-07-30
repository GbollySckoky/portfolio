import React from 'react'
import image from '../../assets/WhatsApp Image 2024-07-29 at 11.33.48.jpeg';


const About = () => {
  return (
    <div className='w-[80%] mx-auto mb-[120px] '>
        <div>
            <h1 className=' text-2xl font-semibold bg-black text-white p-5'>
                ABOUT ME
            </h1>
            <h1 className='text-center my-[40px] text-2xl font-semibold'>ABOUT ME</h1>
            <div className='mt-[55px] flex'>           
                <div className='w-full grid place-items-center'>
                    <img className='h-[500px]' src={image} alt="" />
                </div>
                <div className=''>
                    <p className='text-[15px] text-blue leading-7'>
                        Hey there! I'm <b className='underline'>Gbolahan</b>, a passionate web developer with a knack for creating visually stunning 
                        designs that captivate audiences. I believe that great design should be accessible to everyone, 
                        and that's what drives me to craft user-friendly websites that leave a lasting impression.
                    </p>
                    <p className='text-[15px] text-blue leading-7 mt-6'>
                        By day, I'm a dedicated web developer with a year of experience in the field, bringing innovative solutions to life. 
                        I enjoy the dynamic nature of my work, constantly pushing boundaries to deliver seamless experiences and optimize 
                        websites for better search engine visibility.
                    </p>
                    <p className='text-[15px] text-blue leading-7 mt-6'>
                        Beyond the realm of code and design, I find joy in the simple pleasures of life. Music is a passion of mine, 
                        serving as a constant source of inspiration and motivation throughout my creative journey. 
                        When I'm not coding , you can find me listening to some cool music and playing video games.
                    </p>
                    <p className='text-[15px] text-blue leading-7 my-4'>
                        Here are a few technologies i work with:
                    </p>
                    <ul className='grid grid-cols-2 mt-3 ml-3'>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>JAVASCRIPT</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>REACT</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>FIREBASE</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>TYPESCRIPT</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>TAILWIND CSS</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>GITHUB</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>REDUX</p>
                        </li>
                        <li className='list-disc text-[16px] text-blue leading-7 py-1'>
                            <p>FIGMA</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About
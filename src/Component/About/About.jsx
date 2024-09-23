import React from 'react';
import { motion } from 'framer-motion';
import image from '../../assets/WhatsApp Image 2024-09-09 at 09.00.28.jpeg';

const About = () => {
  return (
    <motion.div 
      className='w-[80%] mx-auto mb-[120px]'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
        <motion.div>
            <h1 className='text-xl lg:text-3xl font-semibold bg-black text-white p-5'>
                ABOUT ME
            </h1>
            <h1 className='text-center my-[40px] text-xl lg:text-2xl font-semibold'>
                ABOUT ME
            </h1>
        </motion.div>
        
        <motion.div 
          className='mt-[55px] lg:flex'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >    
            <motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
                <img className='h-[400px] object-contain w-full' src={image} alt="Gbolahan Coker" />
            </motion.div>
            <motion.div 
              className='mt-7 lg:mt-0 lg:ml-5'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
                <p className='text-[15px] text-blue leading-7'>
                    Hey there! I'm <b className='underline'>Gbolahan</b>, a passionate web developer with a keen for creating visually stunning 
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
                    Here are a few technologies I work with:
                </p>
                <ul className='grid grid-cols-2 mt-3 ml-3'>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="javascript"
                    >
                        <p>JAVASCRIPT</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="react"
                    >
                        <p>REACT</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="firebase"
                    >
                        <p>FIREBASE</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="typescript"
                    >
                        <p>TYPESCRIPT</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="tailwind"
                    >
                        <p>TAILWIND CSS</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="github"
                    >
                        <p>GITHUB</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="redux"
                    >
                        <p>REDUX</p>
                    </motion.li>
                    <motion.li
                      className='list-disc text-[16px] text-blue leading-7 py-1'
                      whileHover={{ scale: 1.1 }}
                      key="figma"
                    >
                        <p>FIGMA</p>
                    </motion.li>
                </ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About;

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
        Hi! I'm <b className='underline'>Gbolahan</b>, a web developer who loves bringing ideas to life through 
        beautiful, engaging designs. My mission is to make exceptional digital experiences accessible to all, 
        creating websites that are both intuitive and memorable for every user.
    </p>
    <p className='text-[15px] text-blue leading-7 mt-6'>
        With 3 years of hands-on experience in web development, I specialize in transforming concepts into 
        functional, innovative solutions. I thrive on the ever-evolving challenges of web development, 
        consistently exploring new approaches to enhance user experience and boost search engine performance.
    </p>
    <p className='text-[15px] text-blue leading-7 mt-6'>
        When I step away from my computer, I'm drawn to life's creative outlets. Music fuels my imagination 
        and keeps me motivated during long coding sessions. In my downtime, you'll often catch me discovering 
        new tracks or diving into video games for some well-deserved relaxation.
    </p>
    <p className='text-[15px] text-blue leading-7 my-4'>
        Some of the technologies I'm proficient in include:
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
            <p>TYPESCRIPT</p>
          </motion.li>
          <motion.li
            className='list-disc text-[16px] text-blue leading-7 py-1'
            whileHover={{ scale: 1.1 }}
            key="firebase"
          >
                <p>REACT</p>
          </motion.li>
          <motion.li
            className='list-disc text-[16px] text-blue leading-7 py-1'
            whileHover={{ scale: 1.1 }}
            key="typescript"
          >
              <p>NEXT.JS</p>
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
      </ul>
    </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default About;

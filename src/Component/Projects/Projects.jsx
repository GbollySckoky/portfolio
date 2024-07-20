import React from 'react'
import css from '../../assets/css-alt.png'
import html from '../../assets/html-5.png'
import javascript from '../../assets/javascript.png'
import redux from '../../assets/redux.png'
import vscode from '../../assets/vs-code.png'
import figma from '../../assets/figma.png'
import typeScript from '../../assets/typescript.png'
import firebase from '../../assets/firebase.png'
import github from '../../assets/github.png'
import tailwind from '../../assets/tailwind-css.png'
import react from '../../assets/react.png'
const Projects = () => {
  return (
    <div className='w-[80%] mx-auto mb-[50px]'>
        <div className='mt-[50px]'>
            <h1 className='bg-black text-white text-3xl font-semibold p-5'>
                TECH SKILLS
            </h1>
            <div>
                <h1 className='text-center text-2xl my-[40px] font-semibold p-5'>
                    TECH STACK
                </h1>
                <div className='grid grid-cols-3 w-[30%] mx-auto'>
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={javascript} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[50px]' 
                        src={react} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[50px]' 
                        src={tailwind} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={redux} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={typeScript} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={html} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={css} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[50px]' 
                        src={figma} alt="" 
                    />
                    <img 
                        className='rounded-full py-4 w-[50px]' 
                        src={vscode} alt=""
                    />
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={github} alt=""
                    />
                    <img 
                        className='rounded-full py-4 w-[40px]' 
                        src={firebase} alt=
                        "" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
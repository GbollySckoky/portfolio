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
    <div className='w-[80%] mx-auto mb-[120px]'>
        <div className='mt-[50px]'>
            <h1 className='bg-black text-white text-xl lg:text-3xl font-semibold p-5'>
                TECH SKILLS
            </h1>
            <div>
                <h1 className='text-center lg:text-2xl text-xl my-[40px] font-semibold p-5'>
                    TECH STACK
                </h1>
                <div className='grid place-items-center grid-cols-3 lg:w-[30%] mx-auto'>
                    <div className='grid place-items-center'>
                        <img 
                            className=' py-4 lg:w-[40px]' 
                            src={javascript} alt="" 
                        />
                        <p>JavaScript</p>
                    </div>
                    <div className='grid place-items-center'>
                        <img 
                            className='rounded-full py-3 w-[40px] lg:w-[50px]' 
                            src={react} alt="" 
                        />
                        <p>React</p>
                    </div>
                    <div className='grid place-items-center'>
                        <img 
                            className='rounded-full py-3 w-[40px] lg:w-[50px]' 
                            src={tailwind} alt="" 
                        />
                        <p>Tailwind</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className='rounded-full py-3 w-[40px] lg:w-[50px]' 
                            src={redux} alt="" 
                        />
                        <p>Redux</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-4 lg:w-[50px]' 
                            src={typeScript} alt="" 
                        />
                        <p>Typescript</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-3 w-[40px] lg:w-[50px]' 
                            src={html} alt="" 
                        />
                        <p>Html</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-3 w-[40px] lg:w-[50px]' 
                            src={css} alt="" 
                        />
                        <p>Css</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-2 w-[50px]' 
                            src={figma} alt="" 
                        />
                        <p>Figma</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-3 w-[40px] lg:w-[50px]' 
                            src={vscode} alt="" 
                        />
                        <p>Vscode</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-3 w-[40px] lg:w-[50px]' 
                            src={github} alt="" 
                        />
                        <p>Github</p>
                    </div>
                    <div className='grid place-items-center mt-5'>
                        <img 
                            className=' py-3 w-[40px] lg:w-[50px]' 
                            src={firebase} alt="" 
                        />
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
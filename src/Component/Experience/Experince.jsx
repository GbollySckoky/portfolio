import React from 'react';


const Experience = () => {
  return (
    <div className='w-[80%] mx-auto mb-[120px]'>
      <div className='mt-[50px]'>
        <h1 className='bg-black text-white text-3xl font-semibold p-5'>
          EXPERIENCE
        </h1>
        <div>
          <h1 className='text-center text-2xl font-semibold text-blues mt-[40px]'>
            EXPERIENCE
          </h1>
          <h1 className='text-2xl text-center mt-5'>Frontend Developer @ Intrapair </h1>
          <div class="relative flex flex-col xl:flex-row xl:justify-center xl:items-start mx-2 mb-5 max-w-xs xl:max-w-full mt-[55px]">
            <ul class="flex whitespace-nowrap xl:flex-col xl:justify-start overflow-x-auto xl:overflow-visible mx-2 mb-5 max-w-xs xl:max-w-full">
                <li class="inline-block cursor-pointer px-4 py-2 text-sm xl:text-sm border-b-2 xl:border-b-0 xl:border-l-2 text-slate-800 md:text-xl text-center items-center justify-center hover:bg-gray-200 transition duration-500 ease-in-out relative">
                INTRAPAIR
                <span class="timeline-dot"></span>
                </li>
                <li className='flex text-sm text-blue ml-2 font-light items-center'>
                    <p className='text-sm'>02/2024 </p>
                    -
                    <p className='text-sm'> Till date</p>
                </li>
            </ul>
            <div className="timeline-line ml-8">
                <ul className='mb-[40px]'>
                    <h1 className='text-2xl font-medium mb-5'>Admin Web App Development:</h1>
                    <li className='list-disc my-3 font-light'>
                     <span className='text-base font-semibold'>Role: </span> 
                     Frontend Developer
                    </li>
                    <li className='list-disc my-3 font-light'>
                     <span className='text-base font-semibold'>Project Type: </span> 
                      Static Website
                    </li>
                    <li className='list-disc my-3 text-base font-semibold'>
                      Responsibilities:
                    </li>
                    <li className='list-disc font-light my-3'>
                     <span className='text-base font-semibold'>Team Collaboration:</span>  Worked with a team of four to successfully build the admin web app, fostering a collaborative 
                      environment through regular stand-ups, code reviews, and pair programming sessions.
                    </li>
                    <li className='list-disc font-light my-3'>
                    <span className='text-base font-semibold'>UI/UX Improvement:</span> Collaborated closely with the UI/UX designer to enhance the visual appeal and user-friendliness of 
                      the admin web app, resulting in a notable 15% improvement in user satisfaction based on feedback and 
                      usability testing.
                    </li>
                    <li className='list-disc font-light my-3'>
                    <span className='text-base font-semibold'>API Integration: </span> Worked with the backend team to seamlessly integrate APIs and services, ensuring smooth data 
                      flow and efficient communication between the frontend and backend.
                    </li>
                    <li className='list-disc font-light my-3'>
                    <span className='text-base font-semibold'>Performance Optimization: </span> 
                       Implemented performance optimization techniques such as lazy loading, code splitting, and efficient 
                      state management, which improved the app's load time by 20%.
                    </li>
                    <li className='list-disc font-light my-3'>
                    <span className='text-base font-semibold'>Responsive Design: </span>  
                       Ensured the admin web app was fully
                      responsive and optimized for various devices and screen sizes, improving accessibility and user 
                      experience.
                    </li>
                </ul>
                <div className='my-5'>
                  <h1 className='text-2xl font-medium mb-5'>Stitchvine Development:</h1>
                  <ul>
                    <li className='list-disc my-3 font-light'>
                     <span className='text-base font-semibold'>Role: </span> 
                     Frontend Developer
                    </li>
                    <li className='list-disc my-3 font-light'>
                     <span className='text-base font-semibold'>Project Type: </span> 
                     Static Website
                    </li>
                    <li className='list-disc my-3 text-base font-semibold'>
                    Responsibilities:
                    </li>
                    <li className='list-disc my-3 font-light'>
                    <span className='text-base font-semibold'>Debugging: </span> 
                      Identified and fixed various bugs and issues within the existing codebase, improving the overall 
                      functionality and user experience of the website.
                    </li>
                    <li className='list-disc my-3 font-light'>
                    <span className='text-base font-semibold'>UI Updates: </span>  
                      Implemented updates to the user interface, enhancing the visual appeal and usability of the website. 
                      This included updating styles, improving layout consistency, and ensuring alignment with modern design
                      standards.
                    </li>
                    <li className='list-disc my-3 font-light'>
                    <span className='text-base font-semibold'>Responsive Design: </span> 
                      Ensured the website was fully responsive, adapting seamlessly to different screen sizes and devices 
                      to provide a consistent user experience.
                    </li>
                </ul>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

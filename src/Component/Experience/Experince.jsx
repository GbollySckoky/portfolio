import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='mt-[50px]'>
        <h1 className='bg-black text-white text-3xl font-semibold p-5'>
          EXPERIENCE
        </h1>
        <div>
          <h1 className='text-center my-6 text-2xl font-semibold text-blues'>
            EXPERIENCE
          </h1>
          <div class="relative flex flex-col xl:flex-row xl:justify-center xl:items-start mx-2 mb-5 max-w-xs xl:max-w-full">
            <ul class="flex whitespace-nowrap xl:flex-col xl:justify-start overflow-x-auto xl:overflow-visible mx-2 mb-5 max-w-xs xl:max-w-full">
                <li class="inline-block px-4 py-2 text-sm xl:text-sm border-b-2 xl:border-b-0 xl:border-l-2 text-slate-800 md:text-xl text-center items-center justify-center hover:bg-gray-200 transition duration-500 ease-in-out relative">
                GOMYCODE
                <span class="timeline-dot"></span>
                </li>
                {/* <li class="inline-block px-4 py-2 text-sm xl:text-sm border-b-2 xl:border-b-0 xl:border-l-2 text-slate-800 md:text-xl text-center items-center justify-center hover:bg-gray-200 transition duration-500 ease-in-out relative">
                Sabrioad
                <span class="timeline-dot"></span>
                </li>
                <li class="inline-block px-4 py-2 text-sm xl:text-sm md:text-xl text-center items-center justify-center hover:bg-gray-200 transition duration-500 ease-in-out border-b-2 xl:border-l-2 xl:border-b-0 border-black text-white bg-slate-600 xl:bg-transparent xl:text-slate-800 xl:font-semibold relative">
                First Bank PLC
                <span class="timeline-dot"></span> */}
                {/* </li> */}
            </ul>
            <div class="timeline-line">
                <h1>Frontend Developer <b>@ Intrapair</b> </h1>
                <div className='flex items-center mt-2'>
                    <p className='text-sm'>02/2024</p>
                    -
                    <p className='text-sm'>Till date</p>
                </div>
                <ul>
                    <h1>Admin Web App Development:</h1>
                    <li className='list-disc'>
                        Collaborated with a team of four to successfully build the admin web app.
                    </li>
                    <li className='list-disc'>
                        Collaborated closely with the UI/UX designer to enhance the visual appeal and user-friendliness 
                        of the admin web app, resulting in a notable 15% improvement in user satisfaction.
                    </li>
                    <li className='list-disc'>
                        Worked with the backend team to seamlessly integrate APIs and services, ensuring smooth data 
                        flow and efficient communication between the frontend and backend.
                    </li>
                    <h1>Stitchvine Development:</h1>
                </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import skills from "../assets/data/skillsdata";


function Skills():JSX.Element {
    return (
        <div className="bg-gray-800 h-auto w-auto p-20 flex flex-col space-x-24 items-center justify-center ">
            <span className="bg-gray-300 text-gray-900 text-xs font-medium  px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-gray-300">My Skills</span>
            <h1 className="text-gray-300 py-4 text-xl">The skills, tools and technologies I am really good at:</h1>
            <div className="grid-cols-6 space-x-8 space-y-8 py-4 ">
            

    {/* <span class="w-full">Get started with our  Figma Design System</span>
    <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg> */}

    {skills.map(function(i) {
        return (
            <a href={i.link} className="inline-flex flex-row justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-800 hover:text-gray-900 hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white hover:scale-110">
    
            <img src={i.imageurl} alt="image" className="w-20 h-20 me-0" viewBox="0 0 40 40"/>
            <span>{i.title}</span>

            </a>
        )
    })}

                
                
                </div>
        </div>
    )
}

export default Skills;
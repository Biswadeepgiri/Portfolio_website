// import React from "react";
import IndividualProject from "./individualprojects";





function Projects():JSX.Element {
    return (
        <div className="bg-gray-800 h-auto w-auto px-20 py-10 flex flex-col space-x-6 items-center justify-center" id="projects">
            <span className="bg-gray-300 text-gray-900 text-xs font-medium  px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-gray-300">My Work</span>
            <h1 className="text-gray-300 py-4 text-xl">Some of the projects that I have built:</h1>
            <IndividualProject />

        </div>
    )
}

export default Projects;
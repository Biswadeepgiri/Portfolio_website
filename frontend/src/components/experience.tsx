import React from "react";
import IndividualExperience from "./individualexperience";

function Experience():JSX.Element {
    return (
        <div className="bg-gray-900 h-auto w-auto p-20 flex flex-col space-x-6 items-center justify-center">
            <span className="bg-gray-300 text-gray-900 text-xs font-medium  px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-gray-300">My Experience</span>
            <h1 className="text-gray-300 py-4 text-xl">Here is a quick summary of my most recent experiences:</h1>
            <IndividualExperience />
        </div>
    )
}


export default Experience;
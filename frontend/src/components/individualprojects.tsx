import React from "react";
import project_data from "../assets/data/projectsdata";
import { FiLink } from "react-icons/fi";
import { IconContext } from "react-icons";
import { LuGithub } from "react-icons/lu";

type Projects = {
    project_photo:Object,
    project_title:string,
    project_description:string,
    project_link:string,
    project_tags: string[],
    project_github:string,
}


function AnotherComponent(prop:{project_photo:Object,project_title:string,project_description:string,project_link:string,project_tags:string[],project_github:string}):JSX.Element {
    return (
        <div className="bg-gray-600 w-5/6 h-auto  rounded-2xl  space-x-5  transform-gpu grid grid-cols-2 my-5">
            <div className="p-10">
                <img src={prop.project_photo}  className="h-80 w-102 hover:scale-105 duration-300" alt="project_phto" />
            </div>
            <div className="flex flex-col p-10 bg-gray-700">
                <h1 className="text-white text-2xl">{prop.project_title}</h1>
                <h2 className="text-white py-5">{prop.project_description}</h2>
                <div className="col-auto">
                    {prop.project_tags.map(function(i){
                        return (
                            <>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
{i}
</span>
</button>
                            </>
                        )
                    })}
                </div>
                <div className="flex flex-row py-5 space-x-5">
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <a href={prop.project_link}>
                <FiLink className="hover:scale-110 duration-200"/>
                </a>
                <a href={prop.project_github}>
                <LuGithub className="hover:scale-110 duration-200" />
                </a>
                </IconContext.Provider>
                </div>
            </div>

        </div>

    )
}

function IndividualProject(prop:Projects):JSX.Element {
    return (
        <>
        {project_data.map(function(i){
            return (
                <AnotherComponent project_photo={i.project_photo} project_title={i.project_title} project_description={i.project_description} project_link={i.project_link}  project_tags={i.project_tags} project_github={i.project_github} />
            )
        })}
        </>  
    )
}

export default IndividualProject;
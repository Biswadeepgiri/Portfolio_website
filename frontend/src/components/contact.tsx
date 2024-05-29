import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlineContentCopy } from "react-icons/md";
import { IconContext } from "react-icons";


let profile_email:string = "biswadeepgiri48@gmail.com";
let profile_contact:number = 8368636203;

function Contact():JSX.Element {
    return (
        <div className="bg-gray-950 h-auto w-auto p-20 flex flex-col space-x-12 items-center justify-center ">
<span className="bg-gray-300 text-gray-900 text-xs font-medium  px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-gray-300">Reach Me Here</span>
<h1 className="text-gray-300 py-4 text-xl">What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</h1>

        <div className="flex flex-row">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
            <CiMail  />
            <h1 className="text-white text-xl">{profile_email}</h1>
            <button onClick={() =>  navigator.clipboard.writeText(profile_email)} >
            <MdOutlineContentCopy />
            </button>


            </IconContext.Provider>
        </div>

        </div>
    )
}

export default Contact;
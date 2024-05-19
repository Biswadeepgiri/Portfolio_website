import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import introimg from "../../public/intro/intro_image.jpg";

type introcontent = {
    title:string,
    description:string,
    location:string,
    github:string,
    linkedin:string,

}

let introdata:introcontent = {
    title:"Hi, I am Biswadeep Giri",
    description:"I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
    location:"Ghaziabad, India",
    github:"https://github.com/Biswadeepgiri",
    linkedin:"https://www.linkedin.com/in/biswadeep-giri-498415224/",
}

function Intro():JSX.Element {
    return (
        <div className="bg-gray-950 p-20 py-32 flex flex-row" style={{
            height:"552px",
            width:"100%",
        }}>
            <div className="flex flex-col w-auto">
            <h1 className="text-white text-5xl">{introdata.title}</h1>
            <p className="text-gray-400 text-xl py-5" style={{
                width:"80%"
            }}>{introdata.description}</p>
            <div className="flex flex-row items-center space-x-2">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <IoLocationOutline />
                </IconContext.Provider>
            <span className="text-white">{introdata.location}</span>
            </div>
            <ul className="flex flex-row text-white space-x-3 py-10">
                <li><a href={introdata.github}>Github</a></li>
                <li><a href={introdata.linkedin}>Linkedin</a></li>
            </ul>
            </div>
            <div className="w-200px px-16">
                <img src={introimg} alt="developer image" />
            </div>
            

        </div>
    )
}

export default Intro;
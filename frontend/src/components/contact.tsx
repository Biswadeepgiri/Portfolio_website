// import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
// import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



// interface email_prop {
//     type:"string",
//     value:"biswadeepgiri48@gmail.com",
// }

// interface contact_prop {
//     type:"number",
//     value:8368636203,
// }

// type Props=email_prop | contact_prop;
let profile_email:string = "biswadeepgiri48@gmail.com";
let profile_contact:number = 8368636203;




function CopyDiv(prop:{email:string,contact:number}):JSX.Element {

    if(prop.email != ""){
    return (

        
        <div className="flex flex-row items-center space-x-5">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
            <CiMail style={{width:"30px",height:"30px"}} />
            <h1 className="text-white text-3xl">{prop.email}</h1>
            <button onClick={() =>  navigator.clipboard.writeText(prop.email)} className="hover:bg-gray-700 hover:scale-110 hover:rounded-md p-2" >
            <MdOutlineContentCopy  style={{width:"30px",height:"30px"}} />
            </button>
            </IconContext.Provider>
        </div>
    )
}
else {
    return (
    <div className="flex flex-row items-center space-x-5">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
            <FaPhoneAlt style={{width:"30px",height:"30px"}}  />
            <h1 className="text-white text-3xl">+91 {prop.contact}</h1>
            <button onClick={() =>  navigator.clipboard.writeText(prop.contact.toString())} className="hover:bg-gray-700 hover:scale-110 hover:rounded-md p-2" >
            <MdOutlineContentCopy  style={{width:"30px",height:"30px"}} />
            </button>
            </IconContext.Provider>
        </div>
    )

}

}


function Contact():JSX.Element { 
    return (
        <div className="bg-gray-950 h-auto w-auto p-20 flex flex-col space-x-12 items-center justify-center space-y-6" id="contact">
<span className="bg-gray-300 text-gray-900 text-xs font-medium  px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-gray-300">Reach Me Here</span>
<h1 className="text-gray-300 py-4 text-2xl justify-center items-center align-center" style={{
    width:"700px"
}}>What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</h1>

        {/* <div className="flex flex-row items-center space-x-3">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
            <CiMail style={{width:"40px",height:"40px"}} />
            <h1 className="text-white text-3xl">{profile_email}</h1>
            <button onClick={() =>  navigator.clipboard.writeText(profile_email)} className="hover:bg-gray-700 hover:scale-110" >
            <MdOutlineContentCopy  style={{width:"40px",height:"40px"}} />
            </button>
            </IconContext.Provider>
        </div>

        <div className="flex flex-row items-center space-x-3">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
            <FaPhoneAlt style={{width:"40px",height:"40px"}}  />
            <h1 className="text-white text-3xl">+91 {profile_contact}</h1>
            <button onClick={() =>  navigator.clipboard.writeText(profile_contact.toString())} className="hover:bg-gray-700 hover:scale-110" >
            <MdOutlineContentCopy  style={{width:"40px",height:"40px"}} />
            </button>
            </IconContext.Provider>
        </div> */}

        <CopyDiv email={profile_email} contact={0} />
        <CopyDiv email={""} contact={profile_contact} />

        <h1 className="text-white text-xl">You may also find me on these platforms!</h1>
        <div className="flex flex-row flex-wrap space-x-5">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" 
         }}>
            <a href="https://github.com/Biswadeepgiri" >
            
            <FaGithub className="hover:scale-110 duration-150" />
            
            </a>
            
            <a href="https://www.linkedin.com/in/biswadeep-giri-498415224/" >
            
            <FaLinkedin className="hover:scale-110 duration-150" />
            
            </a>
            <a href="" >
            
            <FaInstagram className="hover:scale-110 duration-150" />
            
            </a>
            </IconContext.Provider>
        
            </div> 

        </div>
    )
}
export default Contact;
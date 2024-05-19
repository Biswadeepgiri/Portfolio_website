import React from "react";
import { useState } from "react";
import profile_image from "../../public/about/profile_img.jpg";
import profiledesc from "../assets/data/profiledata";

function AboutMe():JSX.Element {
    return (
        <div className="bg-gray-800 h-auto w-auto p-20 flex flex-row">
            
            <div>
                <img src={profile_image} alt="profile image" />
            </div>
            <div className="flex flex-col">
                
            </div>
        </div>
    )
}

export default AboutMe;
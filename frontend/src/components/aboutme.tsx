import React from "react";
import { useState } from "react";
import profile_image from "../../public/about/profile_img.jpg";
import profiledesc from "../assets/data/profiledata";
import "../css/aboutme.css";

type ProfileInfo = {
    intro:string,
    whyshouldbeconsidered:string,
    conclusion:string,
    skills: string[]

}

let skillsprofile: string[] = profiledesc.skills;

function AboutMe(prop:ProfileInfo):JSX.Element | undefined {
    return (
        <div className="bg-gray-900 h-auto w-auto p-20 flex flex-row space-x-24">
            
            <div className="profile_image_container">
                <img src={profile_image} alt="profile image" />
            </div>
            <div className="flex flex-col content_container">
                <h1 className="text-gray-50 text-3xl intro-title">Curious about me? Here you have it:</h1>
                
                <p className="text-gray-300 py-2 text-xl">{profiledesc.intro}</p>
                <p className="text-gray-300 py-2 text-xl">{profiledesc.whyshouldbeconsidered}</p>
                <p className="text-gray-300 py-2 text-xl">Finally some quick bits about me:</p>
                <div className="columns-2">
                    {skillsprofile.map(function(i){
                        return (
                            <li className="text-white">{i}</li>
                        )
                    })}
                    </div>
                    <p className="text-gray-300 py-3 text-xl">{profiledesc.conclusion}</p>
                
            </div>
        </div>
    )
}

export default AboutMe;
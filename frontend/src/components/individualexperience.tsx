// import React from "react";


import experiencedata from "../assets/data/experiencedata";

// type experience= {
//     company_logo:object,
//     duration:string,
//     role:string,
//     work:string[],
// }

function AnotherComponent(prop: {company_logo:string,duration:string,role:string,work:string[],workwebsite:string | undefined}):JSX.Element {
    return (
        <div className="bg-gray-600 w-4/5 h-72 m-10 p-10 rounded-2xl space-x-5 flex flex-row hover:scale-[1.03] duration-300 transform-gpu" > 
        <img src={prop.company_logo} className="h-56 w-56" alt="company logo" />
        <div className="flex flex-col">
            <div className="flex flex-row justify-between my-3">
            <h1 className="text-white text-xl">{prop.role}</h1>
            <h1 className="text-white text-xl">{prop.duration}</h1>
            </div>
            <ol className="list-disc mx-3">
                {prop.work.map(function(i){
                    return (
                        <li className="text-white">{i}</li>
                    )
                })}
            </ol>
            { prop.workwebsite!==undefined &&
            <p className="text-white text-xl my-3">
                <a href={prop.workwebsite}>Website</a>
            </p>
}

        </div>
        </div> 
    )
}

function IndividualExperience():JSX.Element {
    return (
        <>
            {experiencedata.map(function(i){
                return (
                    <AnotherComponent company_logo={i.company_logo} duration={i.duration} role={i.role} work={i.work} workwebsite={i.workwebsite}/>
                )
            })}
            </>  
    )
}
export default IndividualExperience;
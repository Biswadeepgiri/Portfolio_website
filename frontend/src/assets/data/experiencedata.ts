import codealpha_logo from "../../../public/experience/codealpha.jpg";
import support_logo from "../../../public/experience/support.png";
import graviti_logo from "../../../public/experience/graviti_logo.png";



type Experience = {
    company_logo:string,
    duration:string,
    role:string,
    work:string[],
    workwebsite:string | undefined,
}


let experiencedata:Experience[] = [
    {
        company_logo:codealpha_logo,
        duration:"Dec 2023 - Jan 2024",
        role:"Web Developer Intern",
        work:[
            "Executed and delivered four distinct web development projects during my internship, showcasing versatility and proficiency in web development skills.",
            "Worked on HTML,CSS, React Js, Node Js, Express Js and MongoDB to create seamless user experience and increase efficiency of the websites by 50%",
        ],
        workwebsite:undefined,
    },
    {
        company_logo:support_logo,
        duration:"Jan 2024 - Mar 2024",
        role:"Full Stack Web Developer Intern",
        work:[
            "Collaborated with the backend team, utilizing Node.js and Express.js to craft 10+ APIs for the different features of the application and to ensure smooth integration and enhanced performance of the application.",
            "Contributed to React Js project for digital internship, digital courses, digital marketing and app/web development services using React.js and Tailwind CSS.",
        ],
        workwebsite:"https://nexus-care-theta.vercel.app/",
    },
    {
        company_logo:graviti_logo,
        duration:"Jul 2024 - Dec 2024",
        role:"Backend Developer Internship",
        work: [
            "Implemented role-based user invitations with hierarchical parent-child assignment and secure token-based access.",
            "Integrated real-time trip tracking for chemical sector clients by pushing location data to Nicer Globe via REST APIs, enabling proactive hazard management.",
            "Integrated Sarthi and Vahan APIs from ULIP (Ministry of Transportation & Logistics) for secure data retrieval, with a weekly cron job ensuring seamless vehicle document updates.",

        ],
        workwebsite: "https://www.graviti.in/"
    },
]


export default experiencedata;



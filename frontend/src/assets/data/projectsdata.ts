import yelpcamp_photo from "../../../public/projects/yelpcamp.jpg";
import studynotion_photo from "../../../public/projects/study_notion.jpg";
import apoorv24_photo from "../../../public/projects/apoorv2024.jpg";
import recipewebsite_photo from "../../../public/projects/Recipewebsite.jpg";

type Projects = {
    project_photo:string,
    project_title:string,
    project_description:string,
    project_link:string,
    project_tags:string[],
    project_github:string,
}


let project_data:Projects[] = [
    {
        project_photo:yelpcamp_photo,
        project_title:"YelpCamp",
        project_description:"Yelp Camp is a web application that allows you to view campgrounds with a short description. Once you login or signup you can begin to create your own campgrounds that includes a title, image, address and short description.",
        project_link:"https://yelpcamp-e313.onrender.com/",
        project_tags: [
            "Html",
            "CSS",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "Git"
        ],
        project_github:"https://github.com/Biswadeepgiri/Yelpcamp",
    },
    {
        project_photo:recipewebsite_photo,
        project_title:"Recipe_website",
        project_description:"Recipe Website made using Node JS and Mongo DB with full CRUD functionality.",
        project_link:"https://github.com/Biswadeepgiri/Recipe_website",
        project_github:"https://github.com/Biswadeepgiri/Recipe_website",
        project_tags:[
            "HTML",
            "CSS",
            "Javascript",
            "EJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Git",
            "Full-Stack",
        ]
    },
    {
        project_photo:studynotion_photo,
        project_title:"StudyNotion",
        project_description:"StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
        project_link:"https://studynotion-frontend.vercel.app/",
        project_tags: [
            "Html",
            "CSS",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "Git",
            "Full-Stack",
        ],
        project_github:"https://github.com/Biswadeepgiri/Study-Notion",
    },
    {
        project_photo:apoorv24_photo,
        project_title:"Apoorv-2024 IIITK",
        project_link:"https://apoorv.iiitkottayam.ac.in/",
        project_description:"The Techno-Cultural Fest website of IIITK.",
        project_github:"https://github.com/mohit-gupta01/apoorv-web",
        project_tags:[
            "Html",
            "CSS",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Git",
            "TailwindCSS",
            "Full-Stack",
        ]
    },
   

    
]


export default project_data;
import yelpcamp_photo from "../../../public/projects/yelpcamp.jpg";



type Projects = {
    project_photo:Object,
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

    
]


export default project_data;
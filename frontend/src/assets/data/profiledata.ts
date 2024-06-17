// type Skills = [
//     "Full-Stack Development",
//     "Frontend Development",
//     "Backend Development",
//     "Data Structures and Algorithms"
// ];


type ProfileInfo= {
    intro:string,
    whyshouldbeconsidered:string,
    conclusion:string,
    skills: string[],
    
    
}


let profiledesc:ProfileInfo = {
    intro:"I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
    
    whyshouldbeconsidered:"I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.When I'm not in full-on developer mode, you can find me hovering around on twitter, witnessing the journey of early startups or enjoying some free time. You can follow me on GitHub and connect with me on LinkedIn.",
    conclusion:"One last thing, I'm available for freelance work, so feel free to reach out and say hello!",
    skills:[
        "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
    "Data Structures and Algorithms"
    ],

}

export default profiledesc;
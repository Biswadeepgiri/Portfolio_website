import html_icon from "../../../public/skills/HTML5_Logo_512.png";
import css_icon from "../../../public/skills/css_logo.png";
import js_logo from "../../../public/skills/icon-javscript.png";
import react_logo from "../../../public/skills/icon-react.png";
import ts_logo from "../../../public/skills/icon-typescript.png";
import next_logo from "../../../public/skills/icon-nextjs.png";
import nodejs_logo from "../../../public/skills/icon-nodejs.png";
import express_logo from "../../../public/skills/icon-express.png";
import mongo_logo from "../../../public/skills/icon-mongodb.png";
import tailwind_logo from "../../../public/skills/icon-tailwindcss.png";
import figma_logo from "../../../public/skills/icon-figma.png";
import git_logo from "../../../public/skills/icon-git.png";


type SkillsData = {
    imageurl:Object,
    link:string,
    title:string,
}



let skills : SkillsData[] = [

    {
        imageurl:html_icon,
        link:"https://html.spec.whatwg.org/",
        title:"HTML",
    },
    {
        imageurl:css_icon,
        link:"https://www.w3.org/TR/CSS/#css",
        title:"CSS",
    },
    {
        imageurl:js_logo,
        link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        title:"JavaScript",

    },
    {
        imageurl:ts_logo,
        link:"https://www.typescriptlang.org/",
        title:"TypeScript",
    },
    {
        imageurl:react_logo,
        link:"https://react.dev/",
        title:"React JS",
    },
    {
        imageurl:next_logo,
        link:"https://nextjs.org/",
        title:"Next JS",
    },
    {
        imageurl:nodejs_logo,
        link:"https://nodejs.org/en",
        title:"Node JS"
    },
    {
        imageurl:express_logo,
        link:"https://expressjs.com/",
        title:"Express JS",
    },
    {
        imageurl:mongo_logo,
        link:"https://www.mongodb.com/",
        title:"MongoDB",
    },
    {
        imageurl:tailwind_logo,
        link:"https://tailwindcss.com/",
        title:"Tailwind",
    },
    {
        imageurl:figma_logo,
        link:"https://figma.com/",
        title:"Figma",
    },
    {
        imageurl:git_logo,
        link:"https://git-scm.com/",
        title:"Git",
    },
]





export default skills;







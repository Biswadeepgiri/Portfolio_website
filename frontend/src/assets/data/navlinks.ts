type Navlink = {
    id:number,
    title:string,
    url:string,
}

const navlinks: Navlink[] = [
    {   id:1,
        title:"About",
        url:"/",
    },
    {
        id:2,
        title:"Work",
        url:"/work",
    },
    {
        id:3,
        title:"Testimonials",
        url:"/testimonials",
    },
    {
        id:4,
        title:"Contact",
        url:"/contact",
    }
];

export default navlinks;
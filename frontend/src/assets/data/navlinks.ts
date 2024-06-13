interface Navlink {
    id:number,
    title:string,
    url:string,
}

const navlinks: Navlink[] = [
    {   id:1,
        title:"About",
        url:"#about",
    },
    {
        id:5,
        title:"Skills",
        url:"#skills",
    },
    {
        id:2,
        title:"Work",
        url:"#work",
    },
    {
        id:3,
        title:"Projects",
        url:"#projects",
    },
    {
        id:4,
        title:"Contact",
        url:"#contact",
    }
];

export default navlinks;
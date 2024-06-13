// import React from "react";
import { useState} from "react";
// import { useEffect } from "react";
import "../css/navbar.css";
import navlinks from "../assets/data/navlinks";
import { BrowserRouter as Router} from 'react-router-dom';
import current_cv from "../assets/downloadable/biswadeep_resume_latest_april.pdf";


function Navbar():JSX.Element|undefined {
    const[isopen,Setisopen] = useState<boolean>(false);
  //   const [isscrolled,Setisscrolled] = useState<boolean>(false);

  //   const handleScroll=() => {
  //     const offset=window.scrollY;
  //     if(offset > 100 ){
  //       Setisscrolled(true);
  //     }
  //     else{
  //       Setisscrolled(false);
  //     }
  //   }
  
  //   useEffect(() => {
  //     window.addEventListener('scroll',handleScroll)
  //   })
  // let navbarClasses=['navbar'];
  //   if(isscrolled){
  //     navbarClasses.push('scrolled');
  //   }
  
    

if(isopen===false){
    return (
      
        <div className="bg-gray-950 mx-auto h-13 p-2 px-10 flex flex-row flex-wrap sm:flex items-center">
            <h1 className="text-3xl text-white">Biswadeep Giri</h1>
           
            <ul className="text-white sm:flex flex-grow flex-row  px-10 justify-end">
            {navlinks.map(function(i) {
                return ( 
                  <Router>

                <li key={i.id} className="px-10"><a href={i.url} className=" hover:bg-gray-300 hover:text-black hover:rounded-md px-4 py-1" >{i.title}</a></li>
                </Router>
                )
            })}
            </ul>
            <button className="bg-gray-50 text-gray-900 rounded-md px-3 py-1 inline-flex items-center justify-end flex-wrap" >
              <a  href={current_cv} download="Biswadeep_giri_resume" >Download CV</a>

              </button>
   
        </div>
        
    )
}
else{
   HamburgerMenu({isopen,Setisopen});
}
}

function HamburgerMenu(prop:{
    isopen:boolean,
    Setisopen:Function,
}):JSX.Element {
    return (
        <div className="block lg:hidden">
        <button
          onClick={() =>  prop.Setisopen(!prop.isopen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${prop.isopen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${prop.isopen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
</div>
    )
}

export default Navbar;
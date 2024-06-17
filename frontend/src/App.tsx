// import {useEffect } from 'react';
// import{ useState } from 'react';
import './App.css'
import Navbar from './components/navbar';
import Intro from './components/intro';
import AboutMe from './components/aboutme';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

// import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


// import {AnimatedOnScroll} from "react-animated-css-onscroll";
// type Message= {
//   message: string
// };

function App(): JSX.Element {
  // const [data, setData] = useState<string | null>(null);
  // const url:string = "http://localhost:3001";

  // useEffect(()=>{
  //   fetch(`${url}/api`)
  //   .then((res) => res.json())
  //   .then((data:Message) => setData(data.message));
  // },[]);

  return (
    <>
    <Navbar />
    <Intro />
    {/* <AnimatedOnScroll animationIn="bounceInRight"> */}
   <AboutMe  />
   {/* </AnimatedOnScroll> */}
   {/* <AnimatedOnScroll animationIn="bounceInLeft"> */}
    <Skills />
    {/* </AnimatedOnScroll> */}
    {/* <AnimatedOnScroll animationIn="bounceInRight"> */}
    <Experience />
    {/* </AnimatedOnScroll> */}
    {/* <AnimatedOnScroll animationIn="bounceInLeft"> */}
    <Projects />
    {/* </AnimatedOnScroll> */}
    {/* <AnimatedOnScroll animationIn="bounceInRight"> */}
    <Contact />
    {/* </AnimatedOnScroll> */}
    {/* <AnimatedOnScroll animationIn=""> */}
    <Footer />
    {/* </AnimatedOnScroll> */}
     {/* <h1>Vite+React</h1>
     <div className='card'>
      <p>{!data ? "loading..." : data}</p>
     </div> */}
    </>
  );
}

export default App;

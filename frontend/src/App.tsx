import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Intro from './components/intro';
import AboutMe from './components/aboutme';
import Experience from './components/experience';
import Skills from './components/skills';
type Message= {
  message: string
};

function App(): JSX.Element {
  const [data, setData] = useState<string | null>(null);
  const url:string = "http://localhost:3001";

  useEffect(()=>{
    fetch(`${url}/api`)
    .then((res) => res.json())
    .then((data:Message) => setData(data.message));
  },[]);

  return (
    <>
    <Navbar />
    <Intro />
    <AboutMe />
    <Skills />
    <Experience />
     <h1>Vite+React</h1>
     <div className='card'>
      <p>{!data ? "loading..." : data}</p>
     </div>
    </>
  );
}

export default App;

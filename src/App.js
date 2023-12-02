import React from "react";
import { useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages nav
import Home from "./pages/nav/Home";
import Blogs from "./pages/nav/Blogs";
import Works from "./pages/nav/Works";
import Projects from "./pages/nav/Projects";

// Project Component
import Wordpress from "./components/project/wordpress";
import Html from "./components/project/Html";
import MernStack from './components/project/MernStack';
import Javascript from "./components/project/Javascript";

// Pages
import BlogDetails from "./pages/BlogDetails";

// Layouts
import HeaderLayout from "./components/Layouts/HeaderLayout";
import ProjectLayout from "./components/Layouts/ProjectLayout";

// data/blog Data
import blogData from "./data/blogData";
import Certificates from "./pages/nav/Certificates";

export default function App() {

  // State in changing the mode(darkmode and lightmode)
  const [lightMode, setLightMode] = useState(false);

  function toggleMode(){
      setLightMode(!lightMode);
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${lightMode ? 'bg-white' : 'bg-black'}`}>
    <BrowserRouter basename="/christianbensoncapon">
        <Routes>

          <Route path="/" element={<HeaderLayout toggleMode={toggleMode} lightMode={lightMode}/>}>

            <Route index element={<Home lightMode={lightMode} loading={loading}/>} />  
            <Route path="blogs" element={<Blogs lightMode={lightMode} blogData={blogData}/>} />
            <Route path="works-experience" element={<Works lightMode={lightMode} blogData={blogData}/>} />
            <Route path="blogs/:id" element={<BlogDetails lightMode={lightMode} blogData={blogData}/>} />
            <Route path="certificates" element={<Certificates lightMode={lightMode} loading={loading}/>} />

            <Route path="projects" element={<ProjectLayout lightMode={lightMode}/>} >
              <Route index element={<Projects lightMode={lightMode}/>} />
              <Route path="wordpress" element={<Wordpress lightMode={lightMode} />} />
              <Route path="html" element={<Html lightMode={lightMode} />} />
              <Route path="javascript" element={<Javascript lightMode={lightMode} />} />
              <Route path="mern" element={<MernStack lightMode={lightMode} />} />
            </Route>
            
          </Route>
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}



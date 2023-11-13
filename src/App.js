import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/nav/Home";
import Blogs from "./pages/nav/Blogs";
import Works from "./pages/nav/Works";

// Project Component
import All from "./components/project/All";
import Wordpress from "./components/project/wordpress";
import Html from "./components/project/Html";
import MernStack from './components/project/MernStack';
import Javascript from "./components/project/Javascript";

import BlogDetails from "./pages/BlogDetails";

// Layouts
import HeaderLayout from "./components/Layouts/HeaderLayout";
import ProjectLayout from "./components/Layouts/ProjectLayout";

import imgCardProfile from './assets/images/Christian Profile.jpg';
import imgCardBanner from './assets/images/card-laptop-1.webp';
import imgCardBanner1 from './assets/images/card-laptop-2.webp';
// import Projects from "./pages/nav/Projects";

import Projects from "./pages/nav/Projects";

const blogData = [
  {
      id: 1,
      profile: imgCardProfile,
      month: 'March 21',
      time: '1 min',
      title: 'PLAYING THE CODES',
      description: 'Welcome to Playing with Codes, a journey into the world of programming where every line of code is...continue reading..',
      descriptionIntro: "Welcome to Playing with Codes, a journey into the world of programming where every line of code is a brushstroke on the canvas of logic. In this blog, we'll explore the daily adventures of deciphering syntax, unraveling algorithms, and embracing the beauty of coding. Whether you're a seasoned developer or a curious beginner, join me in this exploration of the proper way to code.",
      descriptionOne: "Coding is an art, and every artist needs a playground. I'll take you through the concept of coding as a form of play. Discover how to turn your code editor into a canvas where you can experiment, make mistakes, and refine your skills. We'll discuss the importance of understanding syntax and how playful experimentation can deepen your understanding.",
      descriptionTwo: "Theory is essential, but the real magic happens when you start typing. I'll share my experiences of learning by doing – tackling real-world problems, building small projects, and honing your skills through practical application. We'll discuss how hands-on experience is crucial for truly mastering the art of coding.",
      descriptionThree: "Bugs are like puzzles waiting to be solved. I'll walk you through my daily debugging adventures, sharing tips and tricks on how to approach and solve coding challenges. Learn the art of effective debugging and turn those frustrating moments into valuable learning experiences.",
      descriptionFour: "Coding is not just about syntax; it's about composing algorithms. We'll explore the beauty of algorithms and how they form the backbone of efficient code. Dive into discussions on algorithmic thinking, optimization, and how to elegantly solve problems with the right algorithmic approach.",
      descriptionFive: "Playing with codes is more enjoyable when it's a team effort. I'll share insights into the world of collaborative coding, emphasizing the importance of code reviews, constructive feedback, and working together to create a harmonious codebase. Discover how collaboration can elevate your coding skills to new heights.",
      descriptionSix: "The world of technology is ever-evolving, and curiosity is your compass. I'll discuss the importance of staying curious in the world of coding, exploring new languages, frameworks, and tools. Embrace the mindset of a lifelong learner and discover how curiosity can fuel your coding journey.",
      conclusion: "Playing with Codes is not just a blog; it's an invitation to embark on a journey of continuous learning and discovery. Whether you're a beginner eager to understand the basics or an experienced developer seeking new challenges, join me in the playroom of codes, where every line is an opportunity to create something extraordinary.",
      titleOne: '1. The Playground of Syntax',
      titleTwo: '2. Learning by Doing',
      titleThree: '3. Debugging Adventures',
      titleFour: '4. The Symphony of Algorithms',
      titleFive: '5. Code Reviews and Collaborative Play',
      titleSix: '6. Staying Curious',
      titleConclusion: 'Conclusion',
      views: '16',
      comments: '4',
      likes: 16,
      imgLike: false,
      imgBanner: imgCardBanner
  },
  {
      id: 2,
      profile: imgCardProfile,
      month: 'March 21',
      time: '2 min',
      title: "A DAY IN MY LIFE TO BE A POOR DEVELOPER",
      description: "Welcome to a glimpse into my world – the world of a developer named Christian Benson Capon...continue reading..",
      descriptionIntro: "Welcome to a glimpse into my world – the world of a developer named Christian Benson Capon. In the face of financial constraints, my journey unfolds as a testament to the power of resilience, passion, and positive transformation in the coding realm.",
      descriptionOne: "My creativity thrives within limitations. Despite my modest setup, every line of code becomes a stroke of innovation, proving that true genius isn't confined to the extravagance of tools. Each keystroke is a triumph against the odds, a testament to the belief that adversity can fuel creativity.",
      descriptionTwo: "My daily routine serves as a guiding light through the financial darkness. It's not just about coding; it's a commitment to self-improvement, showcasing the transformative power of discipline and dedication in the face of challenges.",
      descriptionThree: "Step into my mindset, where positivity reigns supreme. I craft success from within, fostering a mindset that turns obstacles into opportunities. My story becomes an illustration of the strength derived from maintaining a positive outlook amidst adversity.",
      descriptionFour: "Navigating the job market, I turn limitations into opportunities. My journey unfolds as proof that passion, coupled with a strong work ethic, can open doors and create opportunities, irrespective of financial constraints.",
      descriptionFive: "In the vast landscape of the internet, I find solace in a supportive community. I leverage online platforms to connect with fellow developers, highlighting the transformative power of community in overcoming challenges.",
      descriptionSix: "Beyond my current circumstances, my dreams shine like stars in the night sky. My story encourages not just myself but everyone to envision a future unbounded by limitations, inspiring us to dream big, persist in the face of adversity, and believe in extraordinary possibilities.",
      conclusion: "'A Day in My Life as a Poor Developer' is more than a story; it's an invitation for you to glimpse into my world and find inspiration in the resilience, passion, and positive transformation that defines my coding journey. As you navigate your own path, let my story be a source of motivation – a reminder that the journey is as significant as the destination, and every step forward is a victory in itself.",
      titleConclusion: 'Conclusion',
      views: '41',
      comments: '10',
      likes: 24,
      imgLike: false,
      imgBanner: imgCardBanner1
  }
];

export default function App() {

  // State in changing the mode(darkmode and lightmode)
  const [lightMode, setLightMode] = useState(false);

  function toggleMode(){
      setLightMode(!lightMode);
  }

  return (
    <BrowserRouter>
      <div className={`${lightMode ? 'bg-white' : 'bg-black'}`}>
        <Routes>

          <Route path="/" element={<HeaderLayout toggleMode={toggleMode} lightMode={lightMode}/>}>

            <Route index element={<Home lightMode={lightMode}/>} />  
            <Route path="blogs" element={<Blogs lightMode={lightMode} blogData={blogData}/>} />
            <Route path="works-experience" element={<Works lightMode={lightMode}/>} />
            <Route path="blogs/:id" element={<BlogDetails lightMode={lightMode} blogData={blogData}/>} />

            <Route path="projects" element={<ProjectLayout lightMode={lightMode}/>} >
              <Route index element={<Projects />} />
              <Route path="all" element={<All lightMode={lightMode} />} />
              <Route path="wordpress" element={<Wordpress lightMode={lightMode} />} />
              <Route path="html" element={<Html lightMode={lightMode} />} />
              <Route path="javascript" element={<Javascript lightMode={lightMode} />} />
              <Route path="mern" element={<MernStack lightMode={lightMode} />} />
            </Route>
            
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}



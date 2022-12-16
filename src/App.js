import './App.css';
// import useState from 'react';
import Nav from './Commponent/Nav';
import HomeComponent from './Commponent/HomeComponent';
import SkillComponent from './Commponent/SkillComponent';
import ProjectComponent from './Commponent/ProjectComponent';
import AccordionComponent from './Commponent/AccordionComponent';
import ContactComponent from './Commponent/ContactComponent';
import FooterComponent from './Commponent/FooterComponent';
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  const [mode, setMode] = useState('light');
  
  const changemMode=()=>{
    if(mode=='light'){
      setMode('dark');
    }else{
      setMode('light');
    }

  let body = document.querySelector(".body");
  if (mode == 'light') {
      console.log("light from home");
      body.classList.remove("body_light");
      body.classList.add("body_dark");
  } else {
      console.log("dark from home");
      body.classList.remove("body_dark");
      body.classList.add("body_light");
  }



  let skills = document.querySelector(".Skills").querySelectorAll("div");
  console.log(skills);
  skills.forEach(element => {
    if (mode == 'light') {
      console.log("light from home");
      element.classList.remove("skill_light");
      element.classList.add("skill_dark");
  } else {
      console.log("dark from home");
      element.classList.remove("skill_dark");
      element.classList.add("skill_light");
  }
    })
    

  // if (mode == 'light') {
  //     console.log("light from home");
  //     skills.classList.remove("skill_light");
  //     skills.classList.add("skill_dark");
  // } else {
  //     console.log("dark from home");
  //     skills.classList.remove("skill_dark");
  //     skills.classList.add("skill_light");
  // }
    // return 0;
  }
  // chengemode();
  
  


  return (
    <>
    <Nav Fun_mode={changemMode} mode={mode} />
    <HomeComponent mode={mode}/>
    <SkillComponent mode={mode} />
    <ProjectComponent mode={mode}/>
    <ContactComponent mode={mode}/>
    <AccordionComponent mode={mode}/>
    <FooterComponent mode={mode}/>

    
  
    </>
  );
}

export default App;

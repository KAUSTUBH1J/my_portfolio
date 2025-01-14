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
import 'aos/dist/aos.css';

function App() {
  
  const [mode, setMode] = useState('light');
  
  const changemMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }else{
      setMode('light');
    }

  let body = document.querySelector(".body");
  if (mode === 'light') {
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
    if (mode === 'light') {
      console.log("light from home");
      element.classList.remove("skill_light");
      element.classList.add("skill_dark");
    } else {
      console.log("dark from home");
      element.classList.remove("skill_dark");
      element.classList.add("skill_light");
    }
  })
    

  // if (mode === 'light') {
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
  
  const Skills = [
    {
        skill: 'React JS',
        percentage: '90%',
        color: '#F9BC2F'
    },
    {
        skill: 'Node JS',
        percentage: '65%',
        color: '#3A8DEF'
    }, 
    {
        skill: 'Java Script',
        percentage: '95%',
        color: '#FD8D30'
    },
    {
        skill: 'Jqurey',
        percentage: '80%',
        color: '#ACD68B'
    },
    {
        skill: 'Three js',
        percentage: '50%',
        color: '#6DB56D'
    }, 
    {
        skill: 'Php',
        percentage: '85%',
        color: '#FF5E5E'
    },
    {
        skill: 'codeigniter',
        percentage: '95%',
        color: '#15ABAB'
    },
    {
        skill: 'Laravel',
        percentage: '80%',
        color: '#E13F79'
    },
    
    {
        skill: 'MySql',
        percentage: '95%',
        color: '#881540'
    },
    {
        skill: 'Python',
        percentage: '60%',
        color: '#9554C8'
    },  
    
    // #9554C8  #ACD68B  #6DB56D #15ABAB #87CEFA #3A8DEF #5B7FC5 
  ];


  return (
    <>
    <Nav Fun_mode={changemMode} mode={mode} />
    <HomeComponent mode={mode}/>
    <SkillComponent mode={mode} Skills={Skills} />
    <ProjectComponent mode={mode}/>
    <ContactComponent mode={mode}/>
    <AccordionComponent mode={mode}/>
    <FooterComponent mode={mode} Skills={Skills} />

    
  
    </>
  );
}

export default App;

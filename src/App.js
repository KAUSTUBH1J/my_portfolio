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
    // return 0;
  }
  // chengemode();
  console.log(mode);
  


  return (
    <>
    <Nav mode={changemMode} />
    <HomeComponent/>
    <SkillComponent/>
    <ProjectComponent/>
    <AccordionComponent/>
    <ContactComponent/>
    <FooterComponent/>

    
  
    </>
  );
}

export default App;

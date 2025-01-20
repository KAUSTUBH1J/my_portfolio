//this is skill component
import React,{useEffect} from 'react';
import Skill from './Skills Component/Skill'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function SkillComponent(props) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger
    
        // GSAP animation for the circle
        gsap.to(".circle", {
          x: "05vw", // Move the circle across the screen
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".circle", // Watch the `.circle` element
            // start: "bottom", // Start animation when `.circle` enters the viewport
            // end: "bottom center", // End animation when `.circle` exits the viewport
            scrub: 1, // Enable smooth scrolling animation
          },
        });

        // Continuous up-and-down animation
    gsap.to(".circle", {
        y: 15, // Move 50px down
        duration: 2, // Duration of the animation
        repeat: -1, // Infinite repetition
        yoyo: true, // Reverse the animation (up and down)
        ease: "power1.inOut", // Smooth easing
      });
      }, []);
    return (
        <>
        <div className='circle'></div>
        <section id='Skills' data-aos="fade-in"  >
            <div className='SkillContainer container' >
                <div className='headLineSkill my-3'>
                    <h1>Skill Component</h1>
                </div>
                <div className='Skills'>
                    {
                        props.Skills.map((item, index)=>{
                            return (
                                <React.Fragment key={index}>
                                    <Skill skill={item.skill} per={item.percentage} BgColor={item.color} mode={props.mode}/>
                                
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
            </section>
        </>
    )
}

export default SkillComponent
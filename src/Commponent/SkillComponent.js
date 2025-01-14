//this is skill component
import React from 'react';
import Skill from './Skills Component/Skill'

function SkillComponent(props) {
    
    
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
                        props.Skills.map((item)=>{
                            return (
                                <Skill skill={item.skill} per={item.percentage} BgColor={item.color} mode={props.mode}/>
                            )
                        })
                    }
                    {/* <Skill skill="React" per="95%" BgColor='rgb(255, 131, 7)'  mode={props.mode}/>
                    <Skill skill="Laravel" per="90%" BgColor='rgb(43, 7, 255)'  mode={props.mode}/>
                    <Skill skill="HTML" per="95%" BgColor='rgb(255, 7, 7)'  mode={props.mode}/>
                    <Skill skill="CSS" per="90%" BgColor='rgb(255, 160, 7)' mode={props.mode}/>
                    <Skill skill="JavaScript" per="85%" BgColor='rgb(216, 0, 255)'mode={props.mode}/>
                    <Skill skill="Java" per="95%" BgColor='rgb(216, 0, 255)' mode={props.mode}/>
                    <Skill skill="PHP" per="80%" BgColor='rgb(0, 214, 255)' mode={props.mode}/>
                    <Skill skill="BootStrap" per="70%" BgColor='rgb(124, 7, 255)' mode={props.mode}/>
                    <Skill skill="SQL" per="80%" BgColor='rgb(60, 255, 0)' mode={props.mode}/>
                    <Skill skill="Python" per="50%" BgColor='rgb(7, 175, 255)' mode={props.mode}/>
                    <Skill skill="MongoDB" per="55%" BgColor='rgb(216, 0, 255)' mode={props.mode}/>
                    <Skill skill="Scala" per="45%" BgColor='rgb(255, 0, 0)' mode={props.mode}/>
                    <Skill skill="Figma" per="70%" BgColor='rgb(0, 141, 255)' mode={props.mode}/> */}


                </div>
            </div>
            </section>
        </>
    )
}

export default SkillComponent
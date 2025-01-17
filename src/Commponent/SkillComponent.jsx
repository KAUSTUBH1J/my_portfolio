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
//this is skill component
import React from 'react';
import Skill from './Skills Component/Skill'

function SkillComponent() {
    return (
        <>
            <div className='SkillContainer container'>
                <div className='headLineSkill my-3'>
                    <h1>Skill Component</h1>
                </div>
                <div className='Skills'>

                    <Skill skill="react" per="85%" BgColor='rgb(255, 131, 7)' />
                    <Skill skill="Laravel" per="90%" BgColor='rgb(43, 7, 255)' />
                    <Skill skill="HTML" per="95%" BgColor='rgb(255, 7, 7)' />
                    <Skill skill="CSS" per="90%" BgColor='rgb(255, 160, 7)' />
                    <Skill skill="JavaScript" per="85%" BgColor='rgb(216, 0, 255)' />
                    <Skill skill="PHP" per="80%" BgColor='rgb(0, 214, 255)' />
                    <Skill skill="BootStrap" per="70%" BgColor='rgb(124, 7, 255)' />
                    <Skill skill="SQL" per="80%" BgColor='rgb(60, 255, 0)' />
                    <Skill skill="Python" per="50%" BgColor='rgb(7, 175, 255)' />
                    <Skill skill="MongoDB" per="55%" BgColor='rgb(216, 0, 255)' />
                    <Skill skill="Scala" per="45%" BgColor='rgb(255, 0, 0)' />
                    <Skill skill="Figma" per="70%" BgColor='rgb(0, 141, 255)' />


                </div>
            </div>

        </>
    )
}

export default SkillComponent
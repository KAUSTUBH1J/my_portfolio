//this is skill component
import React from 'react';  

function Skill(props) {
    return (
        <>
            <div className='s_card' >
                <div className='s_card_l' Style={`width: ${props.per}; `} >
                    <div  className='s_card_l_in' Style={` background-color: ${props.BgColor};`}  >
                        <div className='s_card_name' Style={'background-color: #fff0'} >
                            <p>{props.skill}</p>
                        </div>
                        <div className='s_card_per' Style={`color: ${props.BgColor}; background-color: ${props.mode==='light'?'':'#fff'};`}>
                            <p Style={`color: ${props.BgColor}  `}  >{props.per}</p>  
                            {/* color white backgroud same as s_card_l  textshadow 0 0 5px rgb(134,134,134,0.53)*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
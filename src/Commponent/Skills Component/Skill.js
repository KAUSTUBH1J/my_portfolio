//this is skill component
import React from 'react';
import PropTypes from 'prop-types';


function Skill(props) {
    return (
        <>
            <div className='s_card' >
                <div className='s_card_l' Style={`width: ${props.per}; `} >
                    <div  className='s_card_l_in' Style={` background-color: ${props.BgColor};`}  >
                        <div className='s_card_name' >
                            <p>{props.skill}</p>
                        </div>
                        <div className='s_card_per' Style={`color: ${props.BgColor};`}>
                            <p>{props.per}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
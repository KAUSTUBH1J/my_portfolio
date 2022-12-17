// this is accordion component
import React, { useState } from 'react'
import { AccordionData } from '../Assets/Data/AccordionData';
import '../Assets/StyleSheets/AccordionStyle.css';

function AccordionComponent(props) {
    const [clicked, setClicked] = useState(false);
    const toggle = (key) => {
        if (clicked === key) {
            setClicked(null)
        }
        else {
            setClicked(key)
        }
    }
    return (

        <>
        <section id='FQA'>

            <div className="accordion-section container accordionBox">
                <div className="accordionHeading">
                    <h3>FAQ's</h3>
                </div>
                <div className="accordion-container" Style={`border: 1px solid ${props.mode=='light'?'#000':'#fff'}`}>
                    {AccordionData.map((item, key) => {
                        return (
                            <>
                                <div className="question-box" onClick={() => toggle(key)}>
                                    <p>Q. {item.question}</p>
                                    <span>{clicked !== key ? <ion-icon name="caret-forward-outline"></ion-icon>: <ion-icon name="caret-down-outline"></ion-icon>}</span>
                                </div>

                                {clicked === key ?
                                    (<p className="dropdown accordion-answer">-->{item.answer}</p>)
                                    : null
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </section>

        </>

    )
}

export default AccordionComponent
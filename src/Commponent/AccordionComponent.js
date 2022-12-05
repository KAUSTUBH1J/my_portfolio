// this is accordion component
import React, { useState } from 'react'
import { AccordionData } from '../Assets/Data/AccordionData';
import '../Assets/StyleSheets/AccordionStyle.css';

function AccordionComponent() {
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
            <div className="accordion-section container">
                <div className="accordion-container">
                    {AccordionData.map((item, key) => {
                        return (
                            <>
                                <div className="question" onClick={() => toggle(key)}>
                                    <h3>{item.question}</h3>
                                    <span>{clicked !== key ? <ion-icon name="caret-forward-outline"></ion-icon>: <ion-icon name="caret-down-outline"></ion-icon>}</span>
                                </div>

                                {clicked === key ?
                                    (<p className="dropdown">{item.answer}</p>)
                                    : null
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default AccordionComponent
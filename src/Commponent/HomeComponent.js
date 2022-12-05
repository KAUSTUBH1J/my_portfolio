//this is home component

import React, { useRef, useEffect } from 'react';
import Svg from '../SVG files/Pattern.svg';
import '../Assets/StyleSheets/ArrowStyle.css';
function HomeComponent() {
    const ref = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current.classList.contains('lift')) {
                
                ref.current.classList.remove('lift')
            }
            else {
                
                ref.current.classList.add('lift')
            }
        }, 600);
        return () => clearInterval(interval);
    })
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 d-flex flex-column justify-content-center my-3'>
                        <div className='fs-4 '>
                            <p>Kaustubh Dinesh Jadhav</p>
                        </div>
                        <div className='my-2'>
                            <h2 className='fs-1 fw-bold main_text'>Full Stack Developer.</h2>
                        </div>
                        <div>
                            <p>To work with reputed organization and secure a challenging position in this organization and learning more
                                and more things and want to make significant contribution to success of the company
                            </p>
                        </div>
                        <div>
                            <button className='btn btn-primary'>Show More</button>
                        </div>
                    </div>
                    <div className='col-sm-6 position-relative svg_container' >
                        <img className='position-absolute top-50 start-50 translate-middle svg_img' src={Svg} />
                    </div>
                </div>

                <a href="#" id="arrow">
                    <i ref={ref} className="fa fa-angle-down arrow "></i>
                </a>
            </div>
        </>
    )
}

export default HomeComponent

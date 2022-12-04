//this is project component
import React, { useRef, useEffect, useState } from 'react';
import '../style.css';
import '../script.js';
import ToursLogo from '../SVG files/Tours-Logo.svg';
import LogoMaker from '../SVG files/Logo-Maker.svg';


function ProjectComponent() {
    const ref = useRef(null);
    // const [arrowUp,arrowDown] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current.classList.contains('lift')) {
                console.log("yes")
                ref.current.classList.remove('lift')
            }
            else {
                console.log("no")
                ref.current.classList.add('lift')
            }
        },800);
        return () => clearInterval(interval);
    })
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-column">
                        <div className="col text-center pb-3">
                            <h1>PROJECTS</h1>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column">
                                <div className="row" Style={'flex-wrap:wrap'}>
                                    <div className="col-lg-6 col-md-6 logo-box">
                                        <img src={LogoMaker} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 text-start">
                                        <h3>LOGO MAKER</h3>
                                        <p>The project was to create a logo and a user has so many options to choose their logo categories. A user can able to edit the logo like to change the color, moving elements, changing font style, styling elements and so more thinks. And finally download the high-resolution logo in the jpg, pdf, SVG, and PNG types.
                                        </p>
                                        <p>
                                            Languages : HTML, CSS, javascript, Php, Mysql, etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column">
                                <div className="row" Style={'flex-wrap:wrap-reverse'}>
                                    <div className="col-lg-6 col-md-6 text-start">
                                        <h3>TOURS & TRAVELS</h3>
                                        <p>In this project, The user can see the tour package and its details like root, place image, package price, and so more. And the admin can easily access it and modify it. The user can also compare the two tours. It helps to choose the best tour package and book it easily
                                        </p>
                                        <p>
                                            Languages : HTML, CSS, javascript, Php, Mysql, etc.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 logo-box">
                                        <img src={ToursLogo}  alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" id="arrow">
                        <i ref={ref} className="fa fa-angle-down arrow "></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectComponent
//this is home component

// import React, { useRef, useEffect } from 'react';
import Svg from '../SVG files/Pattern.svg';
import '../Assets/StyleSheets/ArrowStyle.css';
function HomeComponent() {

    document.addEventListener("DOMContentLoaded", function () {
        // Your code goes here
        let textContainer = document.querySelector("#textContainer").querySelectorAll("span");
        console.log("hii");
        textContainer.forEach(element => {
            element.addEventListener("mouseenter", function () {
                this.classList.add("rubberBand");
            })
            element.addEventListener("mouseleave", function () {
                // this.classList.remove("rubberBand");
                setTimeout(function () { element.classList.remove("rubberBand"); }, 1000);
            })
        })
    });



    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 d-flex flex-column justify-content-center my-3'>
                        <div className='fs-4 '>
                            <p>Kaustubh Dinesh Jadhav</p>
                        </div>
                        <div className='my-2'>
                            {/* <h2 className='fs-1 fw-bold main_text'>Full Stack Developer.</h2> */}
                            <h2 className="container" id="textContainer">

                                <p className="text shadowCh" Style={'color: #000;'}>F </p>
                                <span className="text">u</span>
                                <span className="text">l</span>
                                <span className="text">l</span>
                                <span className="text">&nbsp;</span>
                                <span className="text">S</span>
                                <span className="text">t</span>
                                <span className="text" >a</span>
                                <span className="text">c</span>
                                <span className="text">k</span>
                                <span className="text">&nbsp;</span>
                                <span className="text">D</span>
                                <span className="text">e</span>
                                <span className="text">v</span>
                                <span className="text">e</span>
                                <span className="text">l</span>

                                <span className="text">o</span>
                                <span className="text">p</span>
                                <span className="text">e</span>
                                <span className="text">r</span>
                                <script>

                                </script>
                            </h2>
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

                <a href="#Skills" id="arrow">
                    {/* <i ref={ref} className="fa fa-angle-down arrow "></i> */}
                    <i className="fa fa-angle-down arrow "></i>

                </a>
            </div>

        </>
    )
}

export default HomeComponent

//this is home component

// import React, { useRef, useEffect } from 'react';
import Light_svg from '../SVG files/Light Pattern.svg';
import Dark_svg from '../SVG files/Dark Pattern.svg';
import '../Assets/StyleSheets/ArrowStyle.css';
function HomeComponent(props) {

    document.addEventListener("DOMContentLoaded", function () {
        // Your code goes here
        let textContainer = document.querySelector(".textContainer").querySelectorAll("span");
        textContainer.forEach(element => {
            element.addEventListener("mouseenter", function () {
                this.classList.add("rubberBand");
            })
            element.addEventListener("mouseleave", function () {
                // this.classList.remove("rubberBand");
                setTimeout(function () { element.classList.remove("rubberBand"); }, 1000);
            })
        })
        let textContainer2 = document.querySelector(".textContainer2").querySelectorAll("span");
        textContainer2.forEach(element => {
            element.addEventListener("mouseenter", function () {
                this.classList.add("rubberBand");
            })
            element.addEventListener("mouseleave", function () {
                // this.classList.remove("rubberBand");
                setTimeout(function () { element.classList.remove("rubberBand"); }, 1000);
            })
        })
        let textContainer3 = document.querySelector(".textContainer3").querySelectorAll("span");
        textContainer3.forEach(element => {
            element.addEventListener("mouseenter", function () {
                this.classList.add("rubberBand");
            })
            element.addEventListener("mouseleave", function () {
                // this.classList.remove("rubberBand");
                setTimeout(function () { element.classList.remove("rubberBand"); }, 1000);
            })
        })

        let body = document.querySelector(".body");
        console.log(body);
        if (props.mode == 'light') {
            console.log("light from home");
            body.classList.remove("light");
            body.classList.add("dark");
        } else {
            console.log("dark from home");
            body.classList.remove("dark");
            body.classList.add("light");

        }
        // body.addEventListener("mouseenter", function () {
        //     this.classList.add("rubberBand");
        // })
        // body.addEventListener("mouseleave", function () {
        //     // this.classList.remove("rubberBand");
        //     setTimeout(function () { element.classList.remove("rubberBand"); }, 1000);
        // })


    });



    return (
        <>
            <div className='container' >
                <div className='row'>
                    <div className='col-sm-6 d-flex flex-column justify-content-center my-3'>
                        <div className='fs-4 '>
                            <p>Kaustubh Dinesh Jadhav</p>
                        </div>
                        <div className='my-2 mainHeadline'>
                            {/* <h2 className='fs-1 fw-bold main_text'>Full Stack Developer.</h2> */}
                            <h2 className=" textContainer main_text">
                                <p className={`text shadowCh  ${props.mode=='light'?'text-body':'text-white'}`} >F </p>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>u</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>l</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>l</span>

                            </h2>
                            <h2 className="textContainer2 main_text">
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>S</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>t</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>a</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>c</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>k</span>

                            </h2>
                            <h2 className="textContainer3 main_text">
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>D</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>e</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>v</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>e</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>l</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>o</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>p</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>e</span>
                                <span className={`text  ${props.mode=='light'?'text-body':'text-white'}`}>r</span>
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
                    <div className='col-sm-6 position-relative svg_container' data-aos="zoom-out">
                        {/* <img className='position-absolute top-50 start-50 translate-middle svg_img' src={Light_svg} /> */}
                        {props.mode=='light'?<img className="position-absolute top-50 start-50 translate-middle svg_img" src={Light_svg}/>:<img className="position-absolute top-50 start-50 translate-middle svg_img" src={Dark_svg}/>}

                    </div>
                </div>

                <a href="#Skills" id="arrow">
                    {/* <i ref={ref} className="fa fa-angle-down arrow "></i> */}
                    <i className={`fa fa-angle-down arrow ${props.mode=='light'?'text-body':'text-white'}`}></i>

                </a>
            </div>

        </>
    )
}

export default HomeComponent

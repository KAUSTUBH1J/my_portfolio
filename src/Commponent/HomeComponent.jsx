//this is home component

import React, { useRef, useEffect, useState } from 'react';
import Light_svg from '../SVG files/Light Pattern.svg';
import Dark_svg from '../SVG files/Dark Pattern.svg';
import '../Assets/StyleSheets/ArrowStyle.css';
import HeadLineCharater from './HeadLineCharater';

function HomeComponent(props) {
    const [HeadTitle, setHeadTitle] = useState('');
    const [Loading, setLoading] = useState(false);
    const textRef = useRef();
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

    });

    useEffect(()=>{        
        const Title = 'Full Stack Developer';
        const head = Title.split('');
        setHeadTitle(head);
        console.log('1');
        setLoading(true)
    },[]);

    // const HeadTitle = 'test ';
    const addClass = () =>{
        textRef.current.classList.add('rubberBand');
    }
    function remove(){
        setTimeout(function () { textRef.current.classList.remove('rubberBand'); }, 1000);
        
    }
    return (
        
        <>
        <section id='home'>
            <div className='container' >
                <div className='row'>
                    <div className='col-sm-6 d-flex flex-column justify-content-center my-3'>
                        <div className='fs-4 '>
                            <p>Kaustubh Dinesh Jadhav</p>
                        </div>
                        <div className='my-2 mainHeadline'>
                            {/* <h2 className='fs-1 fw-bold main_text'>Full Stack Developer.</h2> */}
                            <h2 className="  main_text">
                                <p className={`text shadowCh  ${props.mode==='light'?'text-body':'text-white'}`} >F </p>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`} onMouseOver={addClass} ref={textRef} onMouseLeave={remove}>u</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}onMouseOver={addClass} ref={textRef} onMouseLeave={remove}>l</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>l</span>
                                <HeadLineCharater charater='l' mode={props.mode} />
                            </h2>
                            <h2 className=" main_text">
                                <HeadLineCharater charater='s' mode={props.mode}/>
                                <HeadLineCharater charater='k' mode={props.mode}/>
                                <HeadLineCharater charater='i' mode={props.mode}/>
                                <HeadLineCharater charater='l' mode={props.mode}/>
                                <HeadLineCharater charater='l' mode={props.mode}/>
                            </h2>
                            <h2 className="textContainer3 main_text">
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>D</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>e</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>v</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>e</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>l</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>o</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>p</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>e</span>
                                <span className={`text  ${props.mode==='light'?'text-body':'text-white'}`}>r</span>
                            </h2>
                            {console.log('2')}
                            {/* {Loading ?
                            HeadTitle.map((item,index)=>{
                                if(item === ' '){       
                                    return `<h1>`;
                                }else{
                                    return `<span >${item}</span>`;
                                }
                            }):null} */}
                        </div>
                        <div>
                            <p>I am a software professional with experience in building and maintaining web applications using technologies like React JS, Node.js, and PHP. My goal is to create fast, easy-to-use, and scalable solutions that help businesses succeed and improve user experiences.</p>

                            <p>I really love learning, problem solving, and collaboration. Focus is on technical as well as strategic parts of the projects that result in outcome-driven deliverables, helping drive business objectives.</p>

                            <p>Let's get connected and explore how we can work together towards some great solutions!</p>
                         
                        </div>
                        <div>
                            <button className='btn btn-primary'>Show More</button>
                        </div>
                    </div>
                    <div className='col-sm-6 position-relative svg_container' data-aos="zoom-out">
                        <img className='position-absolute top-50 start-50 translate-middle svg_img' src={props.mode==='light'?Light_svg:Dark_svg} alt='' />


                    </div>
                </div>

                <a aria-current="page" href="#Skills" id="arrow">
                    {/* <i ref={ref} className="fa fa-angle-down arrow "></i> */}
                    <i className={`fa fa-angle-down arrow ${props.mode==='light'?'text-body':'text-white'}`}></i>

                </a>
            </div>
            </section>
        </>
    )
}

export default HomeComponent

//this is footer component
import React from 'react';

function FooterComponent() {
    return (
        <>
            <section id="footer">
                <div className='upFooter'>
                    <div className='container'>
                        <div className='headline'>
                            <h1>Contact Me</h1>
                        </div>
                        <div className='contant'>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur amet harum, repellendus odio illum, tempora eaque perspiciatis quisquam accusantium praesentium ullam esse obcaecati! Ipsa nam nostrum ullam sapiente fugit! </p>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='headline'>
                            <h1>Section</h1>
                        </div>
                        <div className='contant'>
                            <ul>
                                <li>Home</li>
                                <li>My Skills</li>
                                <li>Project</li>
                                <li>Contact me</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='headline'>
                            <h1>Projects</h1>
                        </div>
                        <div className='contant'>
                            <ul>
                                <li>logo maker</li>
                                <li>Tour and Travels</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='headline'>
                            <h1>Skills</h1>
                        </div>
                        <div className='contant'>
                            <div className='container'>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='downFooter'>
                    <div>
                        @CopyRight2022 kaustubh jadhav
                    </div>
                    <div>
                        <div className="d-flex flex-row">
                            <p><i className="fa-brands fa-linkedin social-icons"></i></p>
                            <p><i className="fa-brands fa-square-facebook social-icons"></i></p>
                            <p><i className="fa-brands fa-square-twitter social-icons"></i></p>
                            <p><i className="fa-brands fa-square-instagram social-icons"></i></p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default FooterComponent
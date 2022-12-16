//this is footer component
import React from 'react';
import F_Skills from './Skills Component/FooterSkills';
function FooterComponent(props) {
    return (
        <>
            <section id="footer" Style={`background-color: ${props.mode == 'light' ? 'rgb(169 219 251)' : 'rgb(71 123 153)'}`}>
                <div className='upFooter'>
                    <div className='container FContact'>
                        <div className='headline'>
                            <h1>Contact Me</h1>
                        </div>
                        <div className='contant'>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur amet harum, repellendus odio illum, tempora eaque perspiciatis quisquam accusantium praesentium ullam esse obcaecati! Ipsa nam nostrum ullam sapiente fugit! </p>
                        </div>
                    </div>
                    <div className='container FSection'>
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
                    <div className='container FProjects'>
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
                    <div className='container FSkills'>
                        <div className='headline'>
                            <h1>Skills</h1>
                        </div>
                        <div className='contant'>
                            <div className='container '>
                                <F_Skills name="html" />
                                <F_Skills name="css" />
                                <F_Skills name="javaScript" />
                                <F_Skills name="php" />
                                <F_Skills name="SQL" />
                                <F_Skills name=" c " />
                                <F_Skills name=" python " />
                                <F_Skills name="java" />
                                <F_Skills name="scala" />
                                <F_Skills name="mongoDB" />


                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='downFooter'>
                    <div className='container copyright'>
                        @CopyRight2022 kaustubh jadhav
                    </div>

                    <div className="d-flex flex-row">
                        <p><i className="fa-brands fa-linkedin social-icons"></i></p>
                        <p><i className="fa-brands fa-square-facebook social-icons"></i></p>
                        <p><i className="fa-brands fa-square-twitter social-icons"></i></p>
                        <p><i className="fa-brands fa-square-instagram social-icons"></i></p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default FooterComponent
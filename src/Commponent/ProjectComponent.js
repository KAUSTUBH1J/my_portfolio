//this is project component
import React from 'react';
import ToursLogo from '../SVG files/Tours-Logo.svg';
import LogoMaker from '../SVG files/Logo-Maker.svg';
import '../Assets/StyleSheets/ProjectStyle.css';
function ProjectComponent() {
    return (
        <>
        <section id='project' className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-column" >
                        <div className="col text-center pb-3">
                            <h1>PROJECTS</h1>
                        </div>
                        <div className="col my-2">
                            <div className="d-flex flex-column">
                                <div className="row" Style={'flex-wrap:wrap !important'}>
                                    <div className="col-lg-6 col-md-6 logo-box" data-aos="fade-right">
                                        <img src={LogoMaker} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 text-start" data-aos="fade-left" >
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
                        <div className="col my-2">
                            <div className="d-flex flex-column">
                                <div className="row" Style={'flex-wrap:wrap-reverse'}>
                                    <div className="col-lg-6 col-md-6 text-start" data-aos="fade-right">
                                        <h3 className='left_Text_site'>TOURS & TRAVELS</h3>
                                        <p className='left_Text_site'>In this project, The user can see the tour package and its details like root, place image, package price, and so more. And the admin can easily access it and modify it. The user can also compare the two tours. It helps to choose the best tour package and book it easily
                                        </p>
                                        <p className='left_Text_site'>
                                            Languages : HTML, CSS, javascript, Php, Mysql, etc.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 logo-box"  data-aos="fade-left">
                                        <img src={ToursLogo}  alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
        </>
    )
}

export default ProjectComponent
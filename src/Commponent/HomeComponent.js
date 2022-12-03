//this is home component
import React from 'react';
import Svg from '../SVG files/Pattern.svg';
function HomeComponent() {
    return (
        <>
            <div className='container '>
                <div className='row border'>
                <div className='col-sm-6 border d-flex flex-column justify-content-center'>
                    <div className='fs-4 '>
                        <p>Kaustubh Dinesh Jadhav</p>
                    </div>
                    <div className='my-4'>
                        <h2  className='fs-1 fw-bold' Style={'font-size: 5.5rem !important'}>Full Stack Developer.</h2>
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
                <div className='col-sm-6 position-relative' Style='height: 40rem' >
                    <img className='position-absolute top-50 start-50 translate-middle ' Style='height: 42rem; z-index: -10' src={Svg} />
                </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent

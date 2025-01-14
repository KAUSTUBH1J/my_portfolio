//this is contact component
import React from 'react';
import '../Assets/StyleSheets/ContactStyle.css';
function ContactComponent(props) {
    return (
        <>
            <section id='ContactMe'>

            <div className="container container-sm contact-box p-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 contact-section ">
                        <div className='d-flex flex-column ms-4'>
                            <div className="col">
                                <h3 className="contact-heading">Contact me!</h3>
                            </div>
                            <div className="col">
                                <p>Pimpalgaon Baswant, Nashik, Maharastra-422209</p>
                            </div>
                            <div className="col">
                                <p>Mob. No: 9325594967</p>
                            </div>
                            <div className="col">
                                <p>Email: Kaustubh1j@gmail.com</p>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-row">
                                    <p><i className="fa-brands fa-linkedin social-icons"></i></p>
                                    <p><i className="fa-brands fa-square-facebook social-icons"></i></p>
                                    <p><i className="fa-brands fa-square-twitter social-icons"></i></p>
                                    <p><i className="fa-brands fa-square-instagram social-icons"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 text-center ">

                        <form className="pt-2">
                            <div className="inputBox mb-3">
                                <input type="text" name="name" required="required" id="name" Style={`background-color: ${props.mode==='light' ? '#fff' : 'rgb(34 70 89 / 74%)'} `} />
                                <span className={` ${props.mode==='light' ? 'text-body' : 'text-white'}`}>Name</span>
                                
                            </div>

                            <div className="inputBox mb-3">
                                <input type="text" name="email" required="required" id="email" Style={`background-color: ${props.mode==='light' ? '#fff' : 'rgb(34 70 89 / 74%)'} `} />
                                <span className={` ${props.mode==='light' ? 'text-body' : 'text-white'}`}>Email</span>
                            </div>

                            <div className="inputBox ">
                                <textarea type="text" name="message" required="required" id="message" Style={`background-color: ${props.mode==='light' ? '#fff' : 'rgb(34 70 89 / 74%)'} `} />
                                <span className={` ${props.mode==='light' ? 'text-body' : 'text-white'}`}>Message</span>
                            </div>

                            <div className="text-center">
                                <div className=" mt-1 ">
                                    <button className={`submitBtn btn ${props.mode==='light' ? 'btn-primary' : 'btn-dark'} btn-sm`} >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            </section>


        </>
    )
}

export default ContactComponent
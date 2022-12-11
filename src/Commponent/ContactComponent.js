//this is contact component
import React from 'react';
import '../Assets/StyleSheets/ContactStyle.css';
function ContactComponent() {
    return (
        <>

            <div className="container container-sm contact-box p-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className='d-flex flex-column'>
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

                    <div className="col-md-6 ">

                        <form className="pt-2">
                            <div className="inputBox mb-3">
                                <input type="text" name="name" required="required" id="name" className=""/>
                                <span>Name</span>
                            </div>

                            <div className="inputBox mb-3">
                                <input type="text" name="email" required="required" id="email" className="" />
                                <span>Email</span>
                            </div>

                            <div className="inputBox ">
                                <textarea type="text" name="message" required="required" id="message" className=""/>
                                <span>Message</span>
                            </div>

                            <div className="submitBtn d-grid mt-1">
                                <button className="btn btn-primary btn-sm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>



        </>
    )
}

export default ContactComponent
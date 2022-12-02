//this is contact component
import React from 'react';
import '../style.css'
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
                                    <p><i className="fa-brands fa-linkedin m-2 social-icons"></i></p>
                                    <p><i className="fa-brands fa-square-facebook m-2 social-icons"></i></p>
                                    <p><i className="fa-brands fa-square-twitter m-2 social-icons"></i></p>
                                    <p><i className="fa-brands fa-square-instagram m-2 social-icons"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <form className="pt-2">
                            <div class="field-group">
                                <input type="text" name="name" id="name" className="input-field" placeholder="Enter Name" autocomplete="off" />
                                <label for="name" class="input-label">Name</label>
                            </div>

                            <div class="field-group">
                                <input type="text" name="name" id="name" className="input-field" placeholder="Enter Name" autocomplete="off" />
                                <label for="name" class="input-label">Email</label>
                            </div>

                            <div class="field-group">
                                <textarea type="text" name="name" id="name" className="input-field" placeholder="Enter Name" autocomplete="off" />
                                <label for="name" class="input-label">Message</label>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactComponent
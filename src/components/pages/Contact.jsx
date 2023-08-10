import React from 'react';


const Contact = () => {
    return (
        <div className="container-fluid">
           <div className="row">
            <div className="col-6">
                <form action="">
                    <div className="row g-3 d-flex mt-5">
                        <div className="col-6">
                            <label className="form-label topper">Name:</label>
                            <input type="text" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row g-3 d-flex">
                        <div className="col-6">
                            <label className="form-label topper">Email:</label>
                            <input type="email" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row g-3 d-flex">
                        <div className="col-6">
                            <label className="form-label topper">Phone Number:</label>
                            <input type="tel" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row g-3 d-flex">
                        <div className="col-6">
                            <label className="form-label topper">Message:</label>
                          <textarea name="message" className="width d-flex"></textarea>
                          <input type="submit" className="send" value="Send" required/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-6">
                
            </div>
           </div>
        </div>
    );
}

export default Contact;

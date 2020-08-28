import React, { useState } from 'react';

const Contact = () => {
    const[data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '' 
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}. ${data.phone}. ${data.email}. ${data.message}`)
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container conatct-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label>Phone no.</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
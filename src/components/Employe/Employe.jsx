import React from 'react';
import './employe.css';

const Employe = (props) => {
    // Distructuring Object of single Employe.
    const { name, email, picture, phone, sallary, location, dob } = props.employeInfo
    return (
        <>
            <div className="grid-employe">
                <div className="half-4" style={{ backgroundImage: `url(${picture.large})` }}>
                </div>
                <div className="half-6">
                    {/* Employe Parsonal Information Loading on UI */}
                    <h4>Name: {name.title} {name.first} {name.last}</h4>
                    <p><small>Email: {email}</small></p>
                    <p><small>Phone: {phone}</small></p>
                    <p>Age: {dob.age}</p>
                    <p>Country: {location.country}</p>
                    <h4>Salary: ${sallary}</h4>
                    <div className='flexbox'>
                        <button className='payButton' onClick={() => props.handleClick(props.employeInfo)}>Pay Salary</button>
                        <div className="social">
                            {/* Social Media Icons for Employe */}
                            <a href="htttp://www.facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="htttp://www.google.com"><i className="fab fa-google"></i></a>
                            <a href="htttp://www.twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="htttp://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employe;
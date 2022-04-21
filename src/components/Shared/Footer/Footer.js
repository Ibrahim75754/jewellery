import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className="py-3"
            style={{ backgroundColor: "#653DF5" }}>
            <div className="container title-color">
                
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="text-start">
                        <h1 className='custom-font mb-3'>Jewellery</h1>
                            <p><span className="fas fa-map-marker-alt"></span> G5 Technology JSC, Room 1101, Glory Palace <br/> Apartment, Truong Thi Ward, Vinh City, <br/> Nghe An Province, VietNam(42000).</p>
                            <p><i className="fas fa-phone-alt"></i> (+84) 388-969-888</p>
                            <p><i className="fas fa-envelope-open-text"></i> g5plus@outlook.com</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-start">
                            <h4>CONTACT US</h4>
                            <p>About Us</p>
                            <p>See More</p>
                            <p>Connect with us</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-start">
                        <h4>ASK A QUESTION</h4>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="Description" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='text-center'>Made by : <a style={{ textDecoration: "none", color :"white" }} href="https://www.facebook.com/ih75754/">Md. Ibrahim Hossaim</a> </p>
            </div>
        </div>
    )
};

export default Footer;
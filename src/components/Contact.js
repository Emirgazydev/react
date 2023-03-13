import React from 'react';
import img from '../img/Group 1317.svg'
const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact-title">
                        <img src={img} alt=""/>
                        <h5>PT Dwidasa Samsara Indonesia</h5>
                        <p>Ruko Jalur Sutera 29A No. 53 <br/>
                            Alam Sutera Serpong, Tangerang 15323
                        </p>
                    </div>
                    <div className="contact-title2">
                            <h4>Contact</h4>
                        <p>Phone : +62.21.5314.1135 <br/>
                            Fax : +62.21.5314.1135 <br/>
                            Email : community@dwidasa.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React from 'react';
import aboutlog from "../img/pana.png"
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <img src={aboutlog} alt=""/>
                    <div className="about-title">
                        <h1>Welcome to <span>Dwidasa Samsara <br/>
                        Indonesia (DSI)</span> </h1>
                        <p>Dwidasa Samsara Indonesia <span>(DSI)</span>  was firstly established in 2010 <br/>
                            by the founders, who each of them has a common end objective <br/>
                            to innovate new creations by making the most of the <br/>
                            ever-growing information technology through DSI’s distinct <br/>
                            front-end based application concept.
                            <br/>
                            <br/>
                            Managed by a team of professional experts with extensive <br/>
                            experience and impressive track records, <span>DSI</span>  believes that <br/>
                            continuous improvements and innovations assure your business <br/>
                            to run effectively and efficiently.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
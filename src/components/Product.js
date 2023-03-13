import React from 'react';
import productlog1 from '../img/product1.svg'
import out from '../img/out2.png'
import out2 from '../img/out3.png'

const Product = () => {
    return (
        <section id="product">
            <div className="container">
                <h1 className="font">Product and Service</h1>
                <div className="product">
                    <div className="product-out1">
                        <img src={productlog1} alt=""/>
                        <h2>Our Product</h2>
                        <p>Our product is made on the base of our <br/>
                            team’s careful research and analyses, <br/>
                            ranging from internet based <br/>
                            application.</p>
                        <button>Read More</button>
                    </div>
                    <div className="product-out1">
                        <img src={out} alt=""/>
                        <h2>Our Product</h2>
                        <p>Our product is made on the base of our <br/>
                            team’s careful research and analyses, <br/>
                            ranging from internet based <br/>
                            application.</p>
                        <button>Read More</button>
                    </div>
                    <div className="product-out1">
                        <img src={out2} alt=""/>
                        <h2>Our Product</h2>
                        <p>Our product is made on the base of our <br/>
                            team’s careful research and analyses, <br/>
                            ranging from internet based <br/>
                            application.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;

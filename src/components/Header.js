import React from 'react';
import Headerlog from '../img/Group 1317.svg'
import {HiOutlineHome,HiOutlineMail} from "react-icons/hi"
import {MdOutlineShuffle} from "react-icons/md"

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src={Headerlog} alt=""/>
                    <div className="header-nav">
                        <a href="#">Services</a>
                        <a href="#">Product</a>
                        <a href="#">Technology</a>
                        <select>
                            <option>About</option>
                            <option>About</option>
                            <option>About</option>
                        </select>
                        <select>
                            <option>Client</option>
                            <option>Client</option>
                            <option>Client</option>
                        </select>
                        <a href="#">Partner</a>
                    </div>
                    <div className="header-icons">
                        <a href="#">
                            <HiOutlineHome/>
                        </a>
                        <a href="#">
                            <HiOutlineMail/>
                        </a>
                        <a href="#">
                            <MdOutlineShuffle/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
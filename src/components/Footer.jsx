import React from 'react';
import '../style.css'
import { FaRegMeh } from 'react-icons/fa';
import { FaCheckDouble } from 'react-icons/fa';
import { FaRegWindowMaximize } from 'react-icons/fa';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-container_card">
                <div className="footer-container_card-background">
                    <div className="card-icon">
                        <div className="card-icon_icon">
                            <FaRegMeh/>
                        </div>
                    </div>
                    <div className="footer-container_card-title">
                        <h6>training Courses</h6>
                    </div>
                    <hr/>
                    <div className="footer-container_card-subtitle">
                        <p>
                            The gradual accumulation of information about atomic and small-scale behaviour
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-container_card">
                <div className="footer-container_card-background">
                    <div className="card-icon">
                        <div className="card-icon_icon1">
                            <FaCheckDouble/>
                        </div>
                    </div>
                    <div className="footer-container_card-title">
                        <h6>2.769 online courses</h6>
                    </div>
                    <hr/>
                    <div className="footer-container_card-subtitle">
                        <p>
                            The gradual accumulation of information about atomic and small-scale behaviour
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-container_card">
                <div className="footer-container_card-background">
                    <div className="card-icon">
                            <div className="card-icon_icon2">
                                <FaRegWindowMaximize/>
                            </div>
                        </div>
                        <div className="footer-container_card-title">
                            <h6>training Courses</h6>
                        </div>
                        <hr className="hr1" />
                        <div className="footer-container_card-subtitle">
                            <p>
                                The gradual accumulation of information about atomic and small-scale behaviour
                            </p>
                        </div>     
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import '../style.css'

const Header = () => {
    return(
        <div className="header-container">
            <div className="header-container_welcome">
                <h5>Welcome</h5>
            </div>

            <div className="header-container_message">
                <h1>
                    Selling on the internet like a pro 
                </h1>
            </div>

            <div className="header-container_submessage">
                We know how large objects will act, but things on a small scale just do not act that way.
            </div>

            <div className="header-container_buttons">
                <button type="button" class="btn btn-primary">
                    Get Quote Now
                </button>

                <button type="button" class="btn btn-outline-primary">
                    Learn More
                </button>

            </div>
        </div>
    )
}

export default Header;
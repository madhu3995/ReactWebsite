import React from "react";
import './css/Services.css';
const Services=()=>{
    return(
        <div className="services">
            <h1 className="heading">Services</h1>
            <p className="sub-heading">We provides many awsome and secured services and some of them are given here:</p>
            <div className="services-cards">
                <div className="card">
                    <i className="fa fa-youtube-play"></i>
                    <h1>Video Tutorial</h1>
                    <p>If you’re building your own website, opting for a static or a dynamic website is one of the first major decisions                        
                         you’ll need to make, since it will determine how your web pages are stored and delivered to visitors in their browsers.
                        </p>
                </div>
                <div className="card">
                    <i className="fa fa-youtube-play"></i>
                    <h1>Video Tutorial</h1>
                    <p>
                        To help you understand the difference, let’s break down what it means for a website to be static or dynamic, 
                        and discuss the pros and cons of each approach. Finally, we’ll share some examples of popular dynamic websites 
                        to give you a better sense of what they can do.</p>
                </div>
                <div className="card">
                    <i className="fa fa-youtube-play"></i>
                    <h1>Video Tutorial</h1>
                    <p>Finally, we’ll share some examples of popular dynamic websites 
                        to give you a better sense of what they can do.</p>
                </div>
            </div>
        </div>
    );
}
export default Services;
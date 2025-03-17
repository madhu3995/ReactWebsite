import React from "react";
import img1 from './Images/image1.jpeg';
import img2 from './Images/image2.jpg';
import img3 from './Images/image3.png';
import img4 from './Images/image4.jpeg';
import './css/About.css'
function About(){
    return(
        <div>
            <h1>About Us</h1>
            
            <img src={img1} height={200} width={200}/>
            <img src={img2} height={200} width={200}/>
            <img src={img3} height={200} width={200}/>
            <img src={img4} height={200} width={200}/>
        </div>
    )
}
export default About;
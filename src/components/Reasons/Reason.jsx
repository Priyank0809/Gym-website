import React from 'react'
import './Reasons.css'
import image1 from "../../assests/image1.png"
import image2 from "../../assests/image2.png"
import image3 from "../../assests/image3.png"
import image4 from "../../assests/image4.png"
import nb from "../../assests/nb.png"
import adidas from "../../assests/adidas.png"
import nike from "../../assests/nike.png"
import tick from "../../assests/tick.png"


const Reason = () => {
    return (
        <div className='Reasons' id="reasons">
            <div className='left-r'>
                <img src={image1} alt=" " />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className='right-r'>
                <span>Some reasons</span>
                <div>
                    <span className='stroke-text '>why </span>
                    <span>choose us?</span>
                </div>
                <div className='details-r'>
                    <div> <img src={tick} alt="alt1"/><span>over 140+ expert coaches</span></div>
                    <div> <img src={tick} alt="alt1"/><span>train smarter and faster than before</span></div>
                    <div> <img src={tick} alt="alt1"/><span>1 free program for new member</span></div>
                    <div> <img src={tick} alt="alt1"/><span>reliable partners</span></div>
                </div>


                <span 
                style = { {
                    color:"var(--gray)",
                    fontWeight:"normal"
                }}
                >our partners</span>
                <div className='partners'>
                <img src = {nb} alt = "alt1" />
                <img src = {adidas} alt = "alt1" />
                <img src = {nike} alt = "alt1" />

                </div>
            </div>
        </div>
    )
}



export default Reason
import React, { useRef } from 'react'
import './Join.css'
import emailjs from "emailjs-com"
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_01ylw7o', 'template_skduouk', form.current, 'ANCXif8Xxd-idHnrC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id="join-us">
        <div className='left-j'>
        <hr /> 
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP </span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US ? </span>
            </div>
        </div>
        <div className='right-j'>
            <form className='email-container' action="" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user-email" placeholder="Enter your Email address"></input>
            <button className='btn btn-join'>Join Now </button>

            </form>
        </div>
    </div>
  )
}

export default Join
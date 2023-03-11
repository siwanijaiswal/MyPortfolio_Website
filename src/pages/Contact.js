import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_q0gih01', 'template_b9vro65', form.current, 'ChsIuPTLqYAc2jF0t')
        e.target.reset();
    };
  
    return(
        <div className = "contact_section" id="contact">
            <h2 className="section_title">Get In Touch</h2>
            <h3 className="section_title">Contact Me</h3>
               <div className="contact_content">

             <form  ref={form} onSubmit={sendEmail} className="contact-form">
                <div className=" contact_form-div">
                    <label className=" contact_form-tag">Name</label>
                    <input type="text" name="name" className=" contact_form-input" placeholder="Your Name"/>
                </div>
                <div className=" contact_form-div">
                    <label className=" contact_form-tag">Email-id</label>
                    <input type="email" name="email" className=" contact_form-input" placeholder="Your email"/>
                </div>

                <div className=" contact_form-div contact_form-area">
                    <label className=" contact_form-tag">Message</label>
                    <textarea type="text" name="message" placeholder="Type your message" cols="30" rows="10" className=" contact_form-input"></textarea>
                </div>
                <button class="leave">SEND</button>

             </form>

               </div>
        </div>


    );
};
export default Contact;
import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
    const[contact,setContact]=useState({
        username:"",
        email:"",
        message:"",
    });
    const {user} = useAuth();

    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message:"",
        });

        setUserData(false);
    }

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }));

        setContact({
            ...contact,
            [name]:value,
        });
    };
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(contact);
    };

    return(
        <>
        <section className="section-contact">
        <div className="contact-content container">
        <h1 className="main-heading">Contact Us</h1>
        </div>
            <div className="container grid grid-two-cols">
                <div className="contact-img">
                            <img src="/images/support.png"/>
                            </div>
                            <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                type="text"
                                name="username"
                                id="username" required
                                autoComplete="off"
                                value={contact.username}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                type="email"
                                name="email"
                                placeholder=""
                                id="email" required
                                autoComplete="off"
                                value={contact.email}
                                onChange={handleInput}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                name="message"
                                id="message" 
                                value={contact.message}
                                onChange={handleInput}
                                cols="30" 
                                rows="6"
                                ></textarea>
                            </div>
                            
                            <div>
                            <button type="submit">Submit</button>
                            </div>
                        </form>
                        </section>
                </div>
                <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.6964009853937!2d77.0619081746843!3d28.398236394683313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2379c501125f%3A0x90a250676194ce00!2sNathu&#39;s%20Sweets%20(%20Since%201939)%20-%20Gurugram%20Sector%20-65!5e0!3m2!1sen!2sin!4v1716020153577!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        </section>
    </>
    );
};
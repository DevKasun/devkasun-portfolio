import React from 'react';
import Image from 'next/image';

function Contact() {
    return (
        <div className="card-content">
            <div className="card-subtitle">Contact</div>
            <div className="card-desc">
                <div className="contact-details-wrap">
                    <div className="contact-item">
                        <div className="icon">
                            <Image src="/location.svg" alt="location" width="24" height="24" />
                        </div>
                        <div className="text">Hunuwila, Daraluwa.(NW) Sri Lanka</div>
                    </div>
                    <div className="contact-item">
                        <div className="icon">
                            <Image src="/email.svg" alt="email" width="24" height="24" />
                        </div>
                        <div className="text">
                            <a href="mailto:devkasunlakshitha@gmail.com?subject=Message from portfolio">devkasunlakshitha@gmail.com</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon">
                            <Image src="/phone.svg" alt="phone number" width="24" height="24" />
                        </div>
                        <div className="text"><a href="tel:+94775859642">+94775859642</a> / <a href="tel:+94710649244">+94710649244</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
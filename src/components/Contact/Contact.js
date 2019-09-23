import React, { Component } from 'react'
import './Contact.css'
export default class Contact extends Component {
    renderLocation(img){
        return    <div className="contact-location">
                            <div className="contact-img-container">
                                <img src={`/img/flag/contact_icon${img}.jpg`}></img>
                            </div>
                            <div>
                                <div>
                                    <i className="fa fa-pencil-square"/> 620 OLSON VALLEY JORDYNVILLE, H9P 3K5
                                </div>
                                <div>
                                    <i className="fa fa-phone-square"/> 369-814-4589 (159) 362-1278
                                </div>
                                <div><i className="fa fa-envelope-square"/>CONTACT.POWERWORKING@GMAIL.COM</div>
                            </div>
                        </div>
    }
    render() {
        return (
            <div className="contact-container">
                <div className="contact-page">
                  
                     <div className="contact-info">
                        <h1>Contact info</h1>
                        <p>We have worked hard to make this great theme which has infinite possibilities, which mean infinite layout combinations</p>
                        {this.renderLocation(1)}
                          {this.renderLocation(2)}  
                       {this.renderLocation(3)}
                     </div>
                     <div className="contact-form">
                        <h1>Get in touch</h1>
                        <div className="contact-form-grid">
                            <div>
                                <input type="text" placeholder="Name"></input>
                            </div>
                            <div>
                                <input type="email" placeholder="Email"></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number"></input>
                            </div>
                            <div className="message">
                                <textarea type="text" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="add-to-cart">Send</div>
                     </div>
                </div>
           
            </div>
        )
    }
}

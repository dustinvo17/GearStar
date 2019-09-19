import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
export default class Footer extends Component {
    renderAddressItem(icon,p){
          return <div className="address-item">
                         <i className={`fa fa-${icon}`}></i>
                         <p>{p}</p>
                    </div>
    }

    renderLinkBox(route,text){
        return <div className="link-box">
                            <p><span>> </span><Link to={`/${route}`} className="footer-route-link">{text}</Link></p>
                        </div>
    }
    render() {
           
         
        return (
            <div className="footer">
            <div className="footer-section">
                  <div className="footer-info">
                    <div className="footer-address">
                         
                    {this.renderAddressItem('envelope','support@gearm.com')}
                    {this.renderAddressItem('map-marker','1728 Dorchester Ave, Boston, MA 02122')}
                    {this.renderAddressItem('phone','1900-798-55-2351')}
                    {this.renderAddressItem('clock-o','Mon-Sat: 8AM-5PM')}
                   
                    </div>
                </div>
                  <div className="footer-link">
                        
                        {this.renderLinkBox('about','About us')}
                        
                        {this.renderLinkBox('login','Your account')}
                     
                        {this.renderLinkBox('contact','Contact us')}
                       
                        {this.renderLinkBox('','Shipping policy')}
                       
                        {this.renderLinkBox('','Terms of use')}
        
                        {this.renderLinkBox('','FAQs')}
                     
                    </div>
                                  
            </div>
              
            <div className="payment">
                <p>    Copyright © 2019 <Link to="/" className="footer-route-link">GearM</Link>. All rights reserved</p>
                <img src="/img/payment.png"/>
            </div>
            
            </div>
        )
    }
}

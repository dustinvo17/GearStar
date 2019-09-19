import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Header.css'
 class Header extends Component {
    state ={
        currentSlide:1,
        animation:true,
    }
 
   handleSlideSlick(id){

        this.setState({currentSlide:id,animation:true})
    
   }

   handleArrLeft =()=>{
       let id = this.state.currentSlide;
        if(id === 1){
            return this.handleSlideSlick(3)
        }
        this.handleSlideSlick(id-1)
   }
   handleArrRight =()=>{
        let id = this.state.currentSlide;
        if(id === 3){
            return this.handleSlideSlick(1)
        }
        this.handleSlideSlick(id+1)
   }
   renderContactItem(imgURL,h4,p){
        return   <div className="header-contact-item">
                                   <img alt={`${imgURL}`} className="headphone-img" src={`/img/header-icon/${imgURL}.png`}></img>
                                   <div className="contact-item-info">
                                        <h4 className="contact-icon-title">{h4}</h4>
                                        <div className="contact-subtext">
                                            <p>{p}</p>
                                        </div>
                                   </div>
                                </div>
   }
 
   renderURLpath(){
       if(this.props.location.pathname.length > 8){
           const [ ,productType,id] = this.props.location.pathname.slice(8).split('/')
          
               if(this.props.store[productType]){
                    
                    let {title} = this.props.store[productType].find(item =>item.id === parseInt(id))
                      return <div className="details-slide-route">
               <span className="arrow-to">></span>
               <span>{productType}</span>
               <span className="arrow-to">></span>
               <span>{title}</span>
           </div>
                    
               } 
             
    
         
       }

   }

    render() {
       
        return (
            <div className="header"> 
                <div className="topbar">
                    <div className="topbar-item">
                        <div >Welcome to </div>
                        <div className="logo-text margin-text-topbar">GEARM</div>
                    </div>
                    <div className="topbar-item topbar-item2">
                        <div className="login-text">
                            <div className="logo-text">LOGIN</div>
                            <div className="margin-text-topbar">OR</div>
                            <div className="logo-text">REGISTER</div>
                        </div>
                    </div>
                </div>
                <div className="header-top">
                    <div className="header-top-left">
                     
                            <Link to="/"><img  alt="logo" className="gearm-logo"src="/img/header-icon/gearm-logo.png"></img></Link>
                      
                    </div>
                    <div className="header-top-right">
                        <div className="header-search-bar">
                            <div className="search-bar-input">
                                <input className="search-input" placeholder="Search entire store here..."></input>
                                 <img  alt="search"className="search-icon"src="/img/header-icon/search-icon.png"/>
                            </div>
                            <div className="header-contact-bar">
                                {this.renderContactItem('headphone','customer support','1900-798-55-2351')}
                                 {this.renderContactItem('mail','contact us','support@gearm.com')}
                                {this.renderContactItem('cart','my cart 0 items','$0.00')}
                            </div>
                        </div>
                        <div className="header-nav-bar">
                           <div className="nav-bar">
                                <Link to="/" className="nav-item">
                                    <span>Home</span>
                                </Link>
                                 <Link to="/product" className="nav-item">
                                    <span>Product</span>
                                </Link>
                                 <Link to="/about" className="nav-item">
                                    <span>About</span>
                                </Link>
                                 <Link to="/contact" className="nav-item">
                                    <span>Contact</span>
                                </Link>
                           </div>
                           <div className="social-network">
                            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                            <a href="https://twitter.com/" className="fa fa-twitter"></a>
                            <a href="https://www.pinterest.com/" className="fa fa-pinterest"></a>
                           </div>
                        </div>
                    </div>

                </div>
                {this.props.location.pathname.length === 1 ?  <div className="slide-show-image"   onAnimationEnd={() => this.setState({ animation: false })} style={{backgroundImage:`url(/img/header-icon/header-slide${this.state.currentSlide}.jpg)`}}>
                    <div className="slide-show-content">
                        <ul className={`slide-content-list ${this.state.animation ? 'list-animation':''}`} >
                            <li className="slide-content_sub">
                                <span >LAYSTORERIM</span>
                            </li>
                            <li className="slide-content_sub">
                                <h2>COSTUME RIM</h2>
                            </li>
                             <li className="slide-content_sub">
                                <h3>BATTLE QUEST</h3>
                            </li>
                              <li className="slide-content-button">
                                <div className="shop-button">SHOP NOW</div>
                            </li>
                           
                        </ul>
                         <div className="slide-slick-dots">
                                <div onClick={()=>this.handleSlideSlick(1)} className={`slick-dot ${this.state.currentSlide === 1 ?'active' :''}`}  ></div>
                                <div onClick={()=>this.handleSlideSlick(2)} className={`slick-dot ${this.state.currentSlide === 2 ?'active' :''}`} ></div>
                                <div onClick={()=>this.handleSlideSlick(3)} className={`slick-dot ${this.state.currentSlide === 3 ?'active' :''}`}></div>
                            </div>
          
                            
                                <i onClick={this.handleArrLeft}className="fa fa-chevron-left fa-arr"></i>
                
                                <i onClick={this.handleArrRight}className="fa fa-chevron-right fa-arr"></i>
                            
                    </div>
                </div> :
                   <div className="slide-route">
                        <span>Home</span>
                        <span className="arrow-to">></span>
                        <span>{this.props.location.pathname.split('/')[1]}</span>
                        {this.renderURLpath()}
                </div>
             }
              
             
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        store:state.store
    }
}
export default connect(mapStateToProps,{})(Header)


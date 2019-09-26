import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../Actions/index'
import ReactDOM from 'react-dom'
import './ProductDetail.css'
 class ProductDetails extends Component {
     state = {currentimg:0}
       componentDidMount = () => { 

         ReactDOM.findDOMNode(this).scrollIntoView();
        
        }
        
     renderImgList(imgList){
        return imgList.map((imgUrl,index) =>{
     
            return  <div key={index} onClick={()=>this.setState({currentimg:index})}className={`image-small-item ${this.state.currentimg === index ? 'onSlide':''}` } ><img alt={imgUrl} src={'/'+imgUrl}></img></div>
        })
     }
    render() {
        let {company,img,price,title} = this.props.detail
      
        return (
            
            this.props.detail ?
            
            <div className="detail-page">
                <div className="product-detail">
                    <h1 className="product-single-title">
                    {title}
                    </h1>
                    <div className="details-container">
                        <div className="details-images">
                            <div className="img-big-container">
                                <div>
                                    <img  alt="img-detail"className="slide-img-detail"src={'/'+img[this.state.currentimg]}></img>
                                </div>
                                <div className="image-small-list" >
                                    {this.renderImgList(img)}
                                </div>
                            </div>
                        </div>
                        <div className="details-info">
                            
                                <h1 className="detail-item-price">${price}</h1>
                            
                             <div className="item-card-star">
                            &#9734; &#9734; &#9734; &#9734; &#9734;
                            </div>
                            <div className="company">
                                Company: {company}
                            </div>
                            <div className="status">
                                Status: 100% - Fullbox
                            </div>
                            <div className="warranty">
                              Warranty: 24 Months
                            </div>
                            {this.props.detail.switch ? <div className="switch">Switch: {this.props.detail.switch}</div> : ''}
                            
                           

                            <div className="cart-button-box">
                                <div className="cart-button-container">
                                    <div className="add-to-cart" onClick={()=>this.props.addToCart(this.props.detail,this.props.type)}><i className="fa fa-cart-plus cart-icon" ></i> Add to cart</div>
                                </div>
                                <div className="wishlist">
                                    <i className="fa fa-heart-o"></i>
                                </div>

                            </div>
                       
                        </div>
                      
                    </div>
                  
                  {this.props.detail.video ?   <div className="video-review">
                        
                        <div>
                               <iframe  width="100%"
                            height="800"
                            frameBorder="0"
                            border="0"
                            cellSpacing="0" src={this.props.detail.video}>
                            Review
                        </iframe>
                        </div>
                     
                    </div>:''}
                </div>
            </div> :<div></div>
        )
    }
}
const mapStateToProps = (state,{match:{params:{productType,id}}}) => {
   
    
    
        
         
                  return {
                     
                detail:state.store[productType] ? state.store[productType].find(item=> item.id === parseInt(id)) : '',
                type:productType,
               
            
            }   
          
        
    
   
}
export default connect(mapStateToProps, actions)(ProductDetails)

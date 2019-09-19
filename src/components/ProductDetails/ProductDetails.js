import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import './ProductDetail.css'
 class ProductDetails extends Component {
     state = {currentimg:0}
       componentDidMount = () => { 

         ReactDOM.findDOMNode(this).scrollIntoView();
        
        }
        
     renderImgList(imgList){
        return imgList.map((imgUrl,index) =>{
     
            return  <div key={index} onClick={()=>this.setState({currentimg:index})}className={`image-small-item ${this.state.currentimg === index ? 'onSlide':''}` } ><img src={'/'+imgUrl}></img></div>
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
                                    <img  className="slide-img-detail"src={'/'+img[this.state.currentimg]}></img>
                                </div>
                                <div className="image-small-list" style={{display:'grid',gridTemplateColumns:`repeat(5,10rem)`}}>
                                    {this.renderImgList(img)}
                                </div>
                            </div>
                        </div>
                        <div className="details-info"></div>
                    </div>
                </div>
            </div> :<div></div>
        )
    }
}
const mapStateToProps = (state,{match:{params:{productType,id}}}) => {
   
    
    
        
         
                  return {
                     
                detail:state.store[productType] ? 
                state.store[productType].find(item=> item.id === parseInt(id)) :
                ''
            
            }   
          
        
    
   
}
export default connect(mapStateToProps, {})(ProductDetails)

import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {removeCart} from '../../Actions/index'
import {Link} from 'react-router-dom'
import Payment from './Payment'
import './Cart.css'
    class Cart extends Component {
    renderCart(cart){
        return cart.map(({title,price,count,total,img})=>{
            return <div key={title}className="grid-cart-item">
                    <div className="product-cart-item">
                        <div className="cart-img-container">
                           <img className="img-cart" src={img[0]}></img>
                        </div>
                        
                        <div className="product-cart-info">
                            <h2>{title}</h2>
                            <div className="btn-remove" onClick={()=>this.props.removeCart(title)}>Remove</div>
                        </div>
                        
                    </div>
                    <div>
                        ${price}
                    </div>
                      <div>
                        {count}
                    </div>
                      <div>
                        ${total}
                    </div>
            </div>
        })
    }
    calculateTotal(cart){
      return cart.reduce((acc,item)=>{
            return acc += item.total

       },0)
  
   
    }
    
    render() {
       console.log(this.props)
        return (
            
            <div className="cart-page">
                 <div className="product-heading">
                    <h1>Your cart</h1>
                </div>
                <div className="backhome-button">
                    <Link to="/product">Continue shopping</Link>
                </div>
               
                {this.props.cart.length ?    <div className="product-cart-container">
                    <div className="grid-cart-item grid-cart-label">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                    {this.renderCart(this.props.cart)}
                    <div className="cart-total">
                        <p>Subtotal</p> <p>${this.calculateTotal(this.props.cart)}</p>
                    </div>
                    <div className="cart-total tax">Tax included and shipping calculated at checkout</div>
                    <div  className="payment">
                         <Payment/>
                    </div>
                   
                </div> : <div>
                    <p className="empty">Your cart is currently empty</p>
                </div>}
                <div>

                </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        cart:state.cart
    }
}
export default connect(mapStateToProps,{removeCart})(Cart)

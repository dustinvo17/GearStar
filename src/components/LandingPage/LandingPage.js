import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actions from '../../Actions/index'
import './LandingPage.css'
class LandingPage extends Component {
    renderFutureList(imgUrl, h2, p) {
        return <div className="feature-item">

            <img alt={imgUrl}
                className="feature-img"
                src={`/img/landing-page-icon/icon-feature-${imgUrl}.png`}></img>

            <div className="content-box">
                <h2>{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    }
    renderHeading(h3, h2) {
        return <div className="section-header">
            <h3 className="sub-heading">
                {h3}
            </h3>
            <h2 className="heading">{h2}</h2>
        </div>
    }
  
   
    static renderItemGrid(product, itemType,fc) {

        const {img, title, price, id} = product
       
        return <div className="grid-item" key={id*price}>
            <div className="item-card">
               <Link to={`/product/${itemType}/${id}`}className="item-link-card"><img className="item-card-img" src={img[0]} atl={title}></img></Link> 
                <div className="item-card-content">
                    <div className="item-card-type">
                        {itemType}
                    </div>
                 
                         <h3 className="item-card-name">
                       {title}
                      
                    </h3>
                 
                   
                    <div className="item-card-star">
                        &#9734; &#9734; &#9734; &#9734; &#9734;
                    </div>
                    <div className="item-card-price">
                        <h3 >${price}</h3>
                        <i onClick={()=>fc(product,itemType)}className="fa fa-cart-plus cart-icon"></i>

                    </div>

                </div>
            </div>

        </div>

    }
    renderBannerItem(banner) {
        return <div className="banner-item">
            <img
                className="banner-img"
                src={`/img/landing-page-icon/${banner === 1
                ? 'banner-1.jpg'
                : 'banner-2.jpg'}`}
                alt={`banner${banner}`}/>
            <div className="banner-content">
                <h2 className="banner-title">SALE OFF {banner === 1
                        ? '50%'
                        : ''}</h2>
                {banner === 1
                    ? <p>Get 50% off when buy
                            <br></br>Razer gears</p>
                    : <h1 className="banner-title">35% OFF</h1>}

                <Link to="/product" className="slide-content-button banner-button">SHOP NOW</Link>

            </div>
        </div>
    }
    render() {
      
        let item1
        let item2
        let item3
        let item4
        let item5

        let bestSell1
        let bestSell2
        let bestSell3
        let bestSell4

        let headphone1
        let keyboard1
        let mouse1

        let headphone2
        let monitor2a
        let monitor2b

        let monitor3
        let keyboard3
        let mouse3
        if (this.props.store.headphone) {
            let store = this.props.store
            
            item1 = store.headphone[1]
            item2 = store.headphone[8]
            item3 = store.keyboard[28]
            item4 = store.monitor[6]
            item5 = store.mouse[18]

            // BEST SELLER ITEM
            bestSell1 = store.headphone[3]
            bestSell2 = store.keyboard[9]
            bestSell3 = store.monitor[13]
            bestSell4 = store.mouse[14]

            // COMBO ITEM
            headphone1 = store.headphone[2]
            keyboard1 = store.keyboard[3]
            mouse1 = store.mouse[9]

            headphone2 = store.headphone[0]
            monitor2a = store.monitor[8]
            monitor2b = store.monitor[0]

            monitor3 = store.monitor[1]
            keyboard3 = store.keyboard[4]
            mouse3 = store.mouse[0]

        }
        return (this.props.store.headphone
            ? <div>
                    <div className="feature-list">
                        {this.renderFutureList(1, 'Free Pickup in store', 'Save time and money when you buy online and pick up in store.')}
                        {this.renderFutureList(2, 'Free Shipping', 'On most orders of $25 or more')}
                        {this.renderFutureList(3, 'Bonus Points Offers', 'Earn loyaty points every time you shop in-store')}
                    </div>

                    <div className="feature-products">
                        {this.renderHeading('BEST PLACES TO UPGRADE YOUR GEARS', 'FEATURED PRODUCTS')}
                        <div className="product-card-grid">
                            {this.constructor.renderItemGrid(item1, 'headphone',this.props.addToCart)}
                            {this.constructor.renderItemGrid(item2, 'headphone',this.props.addToCart)}
                            {this.constructor.renderItemGrid(item3, 'keyboard',this.props.addToCart)}
                            {this.constructor.renderItemGrid(item4, 'monitor',this.props.addToCart)}
                            {this.constructor.renderItemGrid(item5, 'mouse',this.props.addToCart)}

                        </div>
                    </div>

                    <div className="banner">
                        <div className="product-card-grid banner-container">
                            {this.renderBannerItem(1)}
                            {this.renderBannerItem(2)}
                        </div>

                    </div>
                    <div className="best-seller-list">

                        {this.renderHeading('MULTIPLE TYPES OF POPULAR BRANDS', 'BEST SELLER')}
                        <div className="product-card-grid">

                            {this.constructor.renderItemGrid(bestSell1, 'headphone',this.props.addToCart)}
                            {this.constructor.renderItemGrid(bestSell2, 'keyboard',this.props.addToCart)}
                            {this.constructor.renderItemGrid(bestSell3, 'monitor',this.props.addToCart)}
                            {this.constructor.renderItemGrid(bestSell4, 'mouse',this.props.addToCart)}
                        </div>
                    </div>

                    <div className="combo-list">

                        <div className="product-card-grid combo-list-grid">
                            <div className="combo-item">
                                <h2 className="heading">Gaming</h2>
                                {this.constructor.renderItemGrid(headphone1, 'headphone',this.props.addToCart)}
                                {this.constructor.renderItemGrid(keyboard1, 'keyboard',this.props.addToCart)}

                                {this.constructor.renderItemGrid(mouse1, 'mouse',this.props.addToCart)}
                            </div>
                            <div className="combo-item">
                                <h2 className="heading">Art</h2>
                                {this.constructor.renderItemGrid(headphone2, 'headphone',this.props.addToCart)}
                                {this.constructor.renderItemGrid(monitor2a, 'monitor',this.props.addToCart)}

                                {this.constructor.renderItemGrid(monitor2b, 'monitor',this.props.addToCart)}
                            </div>
                            <div className="combo-item">
                                <h2 className="heading">Office</h2>
                                {this.constructor.renderItemGrid(monitor3, 'monitor',this.props.addToCart)}
                                {this.constructor.renderItemGrid(keyboard3, 'keyboard',this.props.addToCart)}

                                {this.constructor.renderItemGrid(mouse3, 'mouse',this.props.addToCart)}
                            </div>

                        </div>

                    </div>
                   
                </div>
                
            : <div></div>)
    }
}

const mapStateToProps = (state) => {
    return {store: state.store,
        modal:state.modal
    }
}
export default connect(mapStateToProps, actions)(LandingPage)

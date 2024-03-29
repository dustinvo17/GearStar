import React from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Product from './Product/Product'
import Contact from './Contact/Contact'
import About from './About/About'
import LandingPage from './LandingPage/LandingPage'
import ProductDetails from './ProductDetails/ProductDetails'
import Cart from './Cart/Cart'
import history from './history/history'
import Modal from './Modal/Modal'
import {Router, Route} from 'react-router-dom'
import { withRouter } from "react-router";
import {connect} from 'react-redux'
import {uploadData} from '../Actions/index.js'
class App extends React.Component {
    componentDidMount(){
        this.props.uploadData()
    }

    render() {
      
        const WrapperHeader = withRouter(Header)
        return (
            <div className="section-template">
                <div className="container">
              
                    <Router  history={history} >
                       
                        <WrapperHeader/>
                        <main className="main-section">
                            <Route path="/" exact component={LandingPage}/>
                            <Route path="/about" exact component={About}/>
                            <Route path="/contact" exact component={Contact}/>
                            <Route path="/product" exact component={Product}/>
                            <Route path="/cart" exact component={Cart}/>
                            <Route path="/product/:productType/:id" exact component={ProductDetails}/>
                            <Route path="/added" exact component={Modal}/>
                        </main> 
                          <Footer/>
                    </Router>
                  
                </div>

            </div>
        )
    }
}

export default connect(null,{uploadData})(App)

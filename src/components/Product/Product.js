import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import LandingPage from '../LandingPage/LandingPage';
import * as actions from '../../Actions'
import './Product.css'
class Product extends React.Component {
    state = {currentPage : 1}
    
     componentDidMount() { 

         ReactDOM.findDOMNode(this).scrollIntoView();
           this.props.filterGear('general')
 
        }
    
    renderProduct(store){
        if(store.length){
           
             let products = store.slice(10*(this.state.currentPage-1),10*(this.state.currentPage))
             
             if(this.state.currentPage === this.props.totalPages){
                products = store.slice(10*(this.state.currentPage-1))
               
             }
            
            
             return products.map(product =>{
                 return LandingPage.renderItemGrid(product,product.type,this.props.addToCart)
             })
        }
       
    }
    handleLeftBtn =()=>{
        if(this.state.currentPage === 1){
            return
        }
        this.setState({currentPage:this.state.currentPage-1})
    }
    handleRightBtn =()=>{
        if(this.state.currentPage === this.props.totalFilters ){
            return
        }
        this.setState({currentPage:this.state.currentPage+1})
    }
    handleOptionChange =(value)=>{
     
        
     
           this.props.filterGear(value.toLowerCase())
        
        
       
        this.setState({currentPage:1})
        
        
       
    }
    renderFilterItem(label,listValue){
        return (
                    
                <div className="filter-container">
                    <label htmlFor="type">{label} : </label>
                      <select id="type" className="select-css" onChange={(e)=>this.handleOptionChange(e.target.value)} >
                {listValue.map(value =>{
                    return <option key={value} value={value.toLowerCase()}>{value}</option>
                })}
      
        </select>
                </div>
        )
    }
    render() {
       console.log(this.props.store.headphone)
   
        return (
            this.props.storeFilter ?
            <div>
                <div className="product-heading">
                    <h1>Products</h1>
                </div>
                <div className="bar-container" >
                      <div className="filter-bar">
                {this.renderFilterItem('gear type',['All','Mouse','Monitor','Keyboard','Headphone'])}
              
                     <div className="numberProduct">
                    {this.props.storeFilter.length } Products
                </div>
                
                  
                </div>
               
                </div>
              
                  <div className="product-page">
                <div className="product-container">
                      <div className="product-card-grid product-route-grid">
                        {this.renderProduct(this.props.storeFilter)}
                      </div>
                    
                </div>
               

          
            </div>
            <div className="buttons-product">
                <p  className={`${this.state.currentPage === 1 ? 'disable-btn' :''}`}onClick={this.handleLeftBtn}><i className="product-fa -fa fa fa-long-arrow-left"></i></p>
                <p className="page-button"> Page {this.state.currentPage} of { this.props.totalFilters }</p>
                <p className={`${this.state.currentPage === this.props.totalFilters ? 'disable-btn' :''}`} onClick={this.handleRightBtn}><i className="product-fa fa fa-long-arrow-right"></i></p>
           
            </div>
            </div>
          :<div></div>
        )
    }
}
const mapStateToProps =(state)=>{
   
  
    let numberOfFilter = Math.floor(state.filterStore.length / 10) 
    return {
        // HAS SEPERATED STORES TO FILTER 
     
       totalFilters:numberOfFilter,
       storeFilter:state.filterStore,
       store:state.store
    }
}
export default connect(mapStateToProps,actions)(Product)

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import LandingPage from '../LandingPage/LandingPage';
import * as actions from '../../Actions'
import './Product.css'
class Product extends React.Component {
    state = {currentPage : 1,filer:false}
    
     componentDidMount= () => { 

         ReactDOM.findDOMNode(this).scrollIntoView();
        
        }
    
    renderProduct(store){
        if(store){
           
             let products = store.slice(10*(this.state.currentPage-1),10*(this.state.currentPage))
             
             if(this.state.currentPage === this.props.totalPages){
                products = store.slice(10*(this.state.currentPage-1))
               
             }
            
            
             return products.map(product =>{
                 return LandingPage.renderItemGrid(product,product.type)
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
        if(this.state.currentPage === (this.state.filter ? this.props.totalFilters : this.props.totalPages)){
            return
        }
        this.setState({currentPage:this.state.currentPage+1})
    }
    handleOptionChange =(value)=>{
        this.props.filterGear(value.toLowerCase())
        this.setState({filter:true,currentPage:1})
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
       console.log(this.props)
      
        return (
            <div>
                <div className="product-heading">
                    <h1>Products</h1>
                </div>
                <div className="bar-container" >
                      <div className="filter-bar">
                {this.renderFilterItem('gear type',['All','Mouse','Monitor','Keyboard','Headphone'])}
                  {this.renderFilterItem('price',['All','< 50','50 - 150','150 - 200', '> 200'])}
                  {this.renderFilterItem('Popular brand',['MSI','Asus','Logitech','Razer','Other'])}
                     <div className="numberProduct">
                    {this.state.filter ? this.props.storeFilter.length : this.props.store.length} Products
                </div>
                
                  
                </div>
               
                </div>
              
                  <div className="product-page">
                <div className="product-container">
                      <div className="product-card-grid product-route-grid">
                        {this.renderProduct(this.state.filter ?this.props.storeFilter:this.props.store)}
                      </div>
                    
                </div>
               

          
            </div>
            <div className="buttons-product">
                <p  className={`${this.state.currentPage === 1 ? 'disable-btn' :''}`}onClick={this.handleLeftBtn}><i className="product-fa -fa fa fa-long-arrow-left"></i></p>
                <p className="page-button"> Page {this.state.currentPage} of {this.state.filter ? this.props.totalFilters :this.props.totalPages}</p>
                <p className={`${this.state.currentPage === (this.state.filter ? this.props.totalFilters : this.props.totalPages) ? 'disable-btn' :''}`} onClick={this.handleRightBtn}><i className="product-fa fa fa-long-arrow-right"></i></p>
           
            </div>
            </div>
          
        )
    }
}
const mapStateToProps =(state)=>{
   
    let totalProducts = []

    // ADD ITEM TYPE 
    let totalItemsWithKey = Object.keys(state.store).map(key =>{
        return state.store[key].map(item =>{
            return item = {...item,type:key}
        })
        
    })
    totalItemsWithKey.map(item =>{
             totalProducts = [...totalProducts,...item]

    })
  
    let numberOfPages = Math.floor(totalProducts.length / 10) 
    let numberOfFilter = Math.floor(state.filterGear.length / 10) 
    return {
        // HAS SEPERATED STORES TO FILTER 
       store:totalProducts,
       totalPages:numberOfPages,
       totalFilters:numberOfFilter,
       storeFilter:state.filterGear
    }
}
export default connect(mapStateToProps,actions)(Product)

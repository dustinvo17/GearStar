import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import {Link} from 'react-router-dom'
import history from '../history/history'
import {connect} from 'react-redux'
function Modal(props) {
      
       return ReactDOM.createPortal(
        <div className="modal-wrapper" onClick={() => history.goBack()}>
           
            <div className="modal-content" onClick={e => e.stopPropagation()}>
            <i className="fa fa-close" onClick={() => history.goBack()}></i>
             <div className="modal-line">
                <i className="fa fa-check"></i>
                Added to cart! <Link to="/cart">View cart</Link> or <Link to="/product">continue shopping</Link>
             </div>
            </div>
        </div>
    ,document.querySelector('#modal'))
}

const mapStateToProps =(state)=>{
    return {
        modal:state.modal,
         
        
    }
}
export default connect(mapStateToProps,{})(Modal)




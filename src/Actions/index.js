import {headphone,keyboard,monitor,mouse} from '../components/data'
import history from '../components/history/history'
const store = {
     headphone,
     keyboard,
     monitor,
       mouse
}
export const uploadData = () =>{
    return {
        type:"UPLOAD",
        payload:store
           
        
    }
}
  let headphoneAdd = headphone.map(item => {
       return {...item,type:'headphone'}
    })
     let keyboardAdd = keyboard.map(item => {
         return {...item,type:'keyboard'}
    })
     let monitorAdd = monitor.map(item => {
         return {...item,type:'monitor'}
    })
     let mouseAdd = mouse.map(item => {
        return  {...item,type:'mouse'}
    })

export const filterGear =(type)=>{
  
 
    let returnData;

    switch(type){
        case 'headphone':
          returnData = headphoneAdd
          break;
         case 'monitor':
            returnData = monitorAdd
             break;
         case 'mouse':
            returnData = mouseAdd
             break;
         case 'keyboard':
            returnData = keyboardAdd
             break;
         default:
            returnData = [...keyboardAdd,...mouseAdd,...headphoneAdd,...monitorAdd]
             break;
        
        }

      
        return {
            type:"FILTERGEAR",
            payload:returnData
        }
       
       

       
       
    }
export const searchGear = (keyword) =>(dispatch) =>{
    let returnData = [...keyboardAdd,...mouseAdd,...headphoneAdd,...monitorAdd]
    let result = returnData.filter(item =>{
        return (item.title.toLowerCase().includes(keyword.toLowerCase()) || item.company.toLowerCase()=== keyword.toLowerCase())
    })
    console.log(result)
    dispatch( {type:"FILTERGEAR",payload:result})
     history.push('/product')
}
let cart = []
export const addToCart =(item,itemType)=>(dispatch) =>{
  
    let itemToAdd = store[itemType].find(el =>el.id === item.id)
    itemToAdd.count++
    itemToAdd.total = +(itemToAdd.count * itemToAdd.price).toFixed(2)
    itemToAdd["type"] = itemType
  
    if(itemToAdd.inCart === false){
         itemToAdd.inCart = true
         
            cart.push(itemToAdd)
    }

    
    dispatch({type:"CART",payload:[...cart]})
   
    history.push('/added')
 
 }

export const removeCart =(itemName,type) =>{
    
    cart = cart.filter(el => el.title !== itemName)
    let itemToRemove = store[type].find(el => el.title === itemName)
    console.log(itemToRemove)
    
        itemToRemove.count = 0
         itemToRemove.total = +(itemToRemove.count * itemToRemove.price).toFixed(2)
        itemToRemove.inCart = false
    

    return {type:"CART",payload:[...cart]}
}
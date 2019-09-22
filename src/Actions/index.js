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


export const filterGear =(type)=>{
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
let cart = []
export const addToCart =(item,itemType)=>(dispatch) =>{
     
    let itemToAdd = store[itemType].find(el =>el.id === item.id)
    itemToAdd.count++
    itemToAdd.total = +(itemToAdd.count * itemToAdd.price).toFixed(2)
    
    if(itemToAdd.inCart === false){
         itemToAdd.inCart = true
       
            cart.push(itemToAdd)
    }

    
    dispatch({type:"CART",payload:[...cart]})
    history.push('/added')
 
 }

export const removeCart =(itemName) =>{
    console.log('call')
    const newCart= cart.filter(el => el.title !== itemName)
    return {type:"CART",payload:[...newCart]}
}
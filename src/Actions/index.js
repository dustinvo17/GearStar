import {headphone,keyboard,monitor,mouse} from '../components/data'

export const uploadData = () =>{
    return {
        type:"UPLOAD",
        payload:{
            headphone,
            keyboard,
            monitor,
            mouse
        }
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
export const filterPrice = (price) =>{
    let priceRange = price.split(/[\s,<>-]+/).slice(1)

}


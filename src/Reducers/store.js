export default (state={},action)=>{
    switch(action.type){
        case "UPLOAD":
            return action.payload
        default:
            return state
    }
}

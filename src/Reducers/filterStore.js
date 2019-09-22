export default (state={},action)=>{
    switch(action.type){
        case "FILTERGEAR":
            return action.payload
        default:
            return state
    }
}
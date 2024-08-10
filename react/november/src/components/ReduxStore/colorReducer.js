const colorReducer=(state={background:"red"},action)=>{
    switch(action.type){
       case "SET_BG_COLOR":
        return {background:action.payload};
       default:
        return state;
    }
}
export default colorReducer
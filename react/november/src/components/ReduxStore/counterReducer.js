const counterReducer =(state=10,action)=>{
    console.log("action: ",action)
  switch(action.type){
    case 'INCREMENT':
        return state + action.payload;
    case 'DECREMENT':
        return state - action.payload;
    default:
        return state;
  }
}
export default counterReducer;
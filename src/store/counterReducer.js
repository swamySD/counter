const initialstate={
    count:1
}

const counterReducer=(state=initialstate,action)=>{
 switch (action.type) {
    case 'INCREMENT':
        
        return{
            ...state,
            count:state.count++
        
        }
        case 'DECREMENT':
            return{
                ...state,
                count:state.count--
            }
        case 'RESET':
            return{
                
                count:state.count=0
            }    
 
    default:
        return state
 }
}

export default counterReducer
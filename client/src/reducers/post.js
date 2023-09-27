import { GET_REPORT, REPORT_ERROR} from "../actions/types"
const initialState= {
 
   error:null,
   loading:true
}

export default function(state=initialState,action){
const {type,payload}  = action;
switch (type) {
    case GET_REPORT:
       return ({
        ...state,
        ...payload,
        loading:false}  
       )
     case REPORT_ERROR:
        return({
            ...state,
            loading:false,
            error:payload})
    
    default:
        return({
            ...state
        })
       
}
}

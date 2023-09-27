import axios from 'axios'
import {setAlert} from './alert'
import {
    GET_REPORT,REPORT_ERROR} from './types'
import setAuthToken from '../utils/setAuthToken'
import { useEffect } from 'react'


export const getPortfolio = ({name,age,gender,phone})=> async dispatch =>{
    
 
   if(localStorage.token){
       setAuthToken(localStorage.token);
   }
    
   
    try {
        const res = await axios.post(' ');
        dispatch({
         type:GET_REPORT,
         payload:{name:name,age:age,gender:gender,phone:phone
            ,prediction:res.data},
         
        })
    } catch (err) {  
        dispatch({
            type:REPORT_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
    }
}
  
 
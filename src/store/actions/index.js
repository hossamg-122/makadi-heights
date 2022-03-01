import dummyApi from "../../Api's/dummyApi"

export const fetchContent=()=>{
    return async(dispatch)=>{
     const response = await dummyApi.get('/1')
   
     dispatch({
         type:'content',
         payload:response
     })
    }
}
import axios from "axios";



export const baseurl="http://localhost/snigdh_ci4/Api/"
const loanapply = async (data:object) =>{
  // let d=getToken();
  //   console.error(d) 
  // ,{headers:{'Authorization': getToken()}}
    return axios.post(baseurl+"loanapply",data);
  }
  const loanAction = async (data:object) =>{
      
      return axios.post(baseurl+"loanAction",data);
    
    }
    const getDetailsApi = async (data:object) =>{
      
      return axios.post(baseurl+"getDetails",data);
    
    }
    const allApplicationReqById = async (data:object) =>{

      // let userLogged = localStorage.getItem("Session") as string;{ headers:{
      //   'Authorization': getToken()}}
      
  
        return axios.post(baseurl+"allApplicationById",data);
    }

  export{loanapply,loanAction,getDetailsApi,allApplicationReqById}
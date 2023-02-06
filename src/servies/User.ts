import axios from "axios";
import { getToken, response } from "./admin";


export interface UserDetailResponse {
  id: string,
  fname: string,
  lname: string,
  email: string,
  mobile: string,
  role: string,
}

const loanapply = async (data:object) =>{
  // let d=getToken();
  //   console.error(d) 
  // ,{headers:{'Authorization': getToken()}}
    return axios.post("http://localhost/snigdh_ci4/Api/loanapply",data);
  }
  const loanAction = async (data:object) =>{
      
      return axios.post("http://localhost/snigdh_ci4/Api/loanAction",data);
    
    }
    const getDetailsApi = async (data:object) =>{
      
      return axios.post("http://localhost/snigdh_ci4/Api/getDetails",data);
    
    }
    const allApplicationReqById = async (data:object) =>{

      // let userLogged = localStorage.getItem("Session") as string;{ headers:{
      //   'Authorization': getToken()}}
      
  
        return axios.post("http://localhost/snigdh_ci4/Api/allApplicationById",data);
    }

  export{loanapply,loanAction,getDetailsApi,allApplicationReqById}
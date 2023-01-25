import axios from "axios";
import { getToken } from "./admin";




const loanapply = async (data:object) =>{
  // let d=getToken();
  //   console.error(d)
    return axios.post("http://localhost/snigdh_ci4/Api/loanapply",data,{headers:{'Authorization': getToken()}});
  
  }
  export{loanapply}
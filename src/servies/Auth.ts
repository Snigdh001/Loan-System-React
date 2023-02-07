import axios from "axios";


interface response {
  messages: {
    success: string,
    message:string,
    role:string,
    id:string,
    authorization:string,
  }
}

const signup = async (data:object) =>{

  
  return axios.post<response>("http://localhost/snigdh_ci4/Api/signup",data)

}
const login = async (data:object) =>{

  
  return axios.post<response>("http://localhost/snigdh_ci4/Api/login",data)

}


export {signup,login,};
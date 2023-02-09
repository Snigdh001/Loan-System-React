import axios from "axios";
import { baseurl } from "./User";
import { authResponse, response } from "./Interface";




const signup = async (data:object) =>{

  
  return axios.post<authResponse>(baseurl+"signup",data)

}
const login = async (data:object) =>{

  
  return axios.post<authResponse>(baseurl+"login",data)

}


export {signup,login,};
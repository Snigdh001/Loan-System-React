import React, { HtmlHTMLAttributes, useState } from "react";
import axios from "axios";


interface response {
  messages: {
    success: string|null,
    message:string|null,
    role:string|null,
    id:number|null
  }
}

const signup = async (data:object) =>{

  
  return axios.post<response>("http://localhost/snigdh_ci4/Api/signup",data)

}
const login = async (data:object) =>{

  
  return axios.post<response>("http://localhost/snigdh_ci4/Api/login",data)

}


export {signup,login,};
import React, { HtmlHTMLAttributes, useState } from "react";
import axios from "axios";


interface response {
  messages: {
    success: string
  }
}

const signup = async (data:object) =>{

  
  return axios.post<response>("http://localhost/snigdh_ci4/Api/signup",data)

}

export default signup;
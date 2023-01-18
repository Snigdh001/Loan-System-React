import React, { HtmlHTMLAttributes, useState } from "react";
import axios from "axios";

export interface response {
  id: string|null,
fname: string|null,
lname:string|null,
email:string|null,
mobile:string|null,
role:string|null,
}



const alluser = async () =>{

  
    return axios.get<response[]>("http://localhost/snigdh_ci4/Api/allusers");
  
  }

  export {alluser};
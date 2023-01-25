import React, { HtmlHTMLAttributes, useState } from "react";
import axios from "axios";
import { Session } from "inspector";

export interface response {
  id: string|null,
fname: string|null,
lname:string|null,
email:string|null,
mobile:string|null,
role:string|null,
}
export interface optresponse {
  id: string|null,
message:string|null,
success:string|null,
}

export interface editresponse  {
  status : number ,
  error :string|null,
  messages : {
      success :string,
      message :string
}
}
 const getToken=()=>{
  let userLogged = localStorage.getItem("Session") as string;
  let token=JSON.parse(userLogged).authorization;
  if(token)  
    return token;  
  else
    return "NULL";
}


const alluser = async () =>{

    // let userLogged = localStorage.getItem("Session") as string;{ headers:{
    //   'Authorization': getToken()}}
    

      return axios.get<response[]>("http://localhost/snigdh_ci4/Api/allusers",);
  }
  const filter = async (data:any) =>{
    let keys = Object.keys(data);
    let values = Object.values(data);
    let query=""
    for(let i in values){
        if(values[i]!=="")
        query+=keys[i]+"="+values[i]+"&";
    }
    query = query.substring(0,query.length-1);    
    // return query;  
  return axios.get<response[]>("http://localhost/snigdh_ci4/Api/filters?"+query);
   
  }
  const deleteuser=async (id:string)=>{

    
    return axios.delete<optresponse[]>(`http://localhost/snigdh_ci4/Api/deleteuser/${id}`);
  }

  const updateUser=async (data:object,id:string)=>{


    console.log("editservice");

    
    return axios.post<editresponse>(`http://localhost/snigdh_ci4/Api/updateuser/${id}`,data);
  }






  export {alluser,filter,deleteuser,updateUser,getToken};
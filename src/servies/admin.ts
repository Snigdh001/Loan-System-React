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
export interface delresponse {
  id: string|null,
message:string|null,
success:string|null,
}




const alluser = async () =>{

      return axios.get<response[]>("http://localhost/snigdh_ci4/Api/allusers");
  
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

    
    return axios.delete<delresponse[]>(`http://localhost/snigdh_ci4/Api/deleteuser/${id}`);
  }

  export {alluser,filter,deleteuser};
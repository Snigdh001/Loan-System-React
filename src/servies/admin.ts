import React, { HtmlHTMLAttributes, useState } from "react";
import axios from "axios";
import { Session } from "inspector";
import { baseurl } from "./User";
import { editresponse, optresponse, response } from "./Interface";




 const getToken=()=>{
  let userLogged = localStorage.getItem("Session") as string;
  let token=JSON.parse(userLogged).authorization;
  if(token)  
    return token;  
  else
    return "NULL";
}


const alluser = async (page:number,record:number) =>{
  
      return axios.get(`${baseurl}allusers?page=${page}&recordlimit=${record}`,{headers:{
        'Authorization': getToken()
      }});
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
  return axios.get<response[]>(baseurl+"filters?"+query);
   
  }
  const deleteuser=async (id:string)=>{

    
    return axios.delete<optresponse[]>(`${baseurl}deleteuser/${id}`);
  }

  const updateUser=async (data:object,id:string)=>{


    // console.log("editservice");

    
    return axios.post<editresponse>(`${baseurl}updateuser/${id}`,data);
  }
  const allApplicationReq = async () =>{

    // let userLogged = localStorage.getItem("Session") as string;{ headers:{
    //   'Authorization': getToken()}}
    

      return axios.get(baseurl+"allApplication",);
  }
  






  export { alluser, filter, deleteuser, updateUser, getToken, allApplicationReq };
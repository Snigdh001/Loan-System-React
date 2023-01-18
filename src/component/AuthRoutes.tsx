import React from 'react'
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
type Props = {
    children:JSX.Element,
    allowedRole:string

}

export default function AuthRoutes({children,allowedRole}:Props) {
    let user = localStorage.getItem("Session")
    if(user!==null){
        let role = JSON.parse(user).role;
        if(role==allowedRole){
            return (
                <>{children}</>
              )
        }
        toast(`Not Authorized, your role ${role} is not Allowed`)
        return <Navigate to="/login" replace={true} />
    }
    else{
        toast("You Are not Logged in")
        return <Navigate to="/login" replace={true} />
    } 
}


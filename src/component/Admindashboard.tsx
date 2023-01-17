import React, { useEffect } from 'react'
import { alluser } from '../servies/admin'



const Admindashboard = () => {
    const getUsers = async () => {
        const responce = await alluser()
        console.log(responce)
    }
    useEffect(() => {
        getUsers();
    }, []);



    return (
        <div>Admindashboard
            
        </div>
    )
}

export default Admindashboard
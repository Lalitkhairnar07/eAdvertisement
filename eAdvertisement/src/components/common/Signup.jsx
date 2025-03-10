import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    const {register , handleSubmit} = useForm();
    //navigate....
    const navigate = useNavigate()

    const submitHandler = async(data)=>{
        console.log("data...",data);
        data.roleId = "67bd57a5da270356d6b0584b"
        
        const res = await axios.post("/user",data);
        console.log(res);
        
        if(res.status == 201)
        {
            alert("User Created successfully...");
            navigate("/login")
        }
        else{
            alert("User not Created")
        }
        
    }

  return (
    <div>
        <h1>Signup</h1>


        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" {...register("firstName")} />
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input type="text" {...register("lastName")} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" {...register("age")} />
            </div>
            <div>
                <label htmlFor="">Status</label>
                <input type="text" {...register("status")} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" {...register("password")} />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}

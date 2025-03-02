import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';


export const Signup = () => {

    const {register , handleSubmit} = useForm();

    const submitHandler = async(data)=>{
        console.log("data...",data);

        data.roleId = "67be97d953ff303e3d8fae6b"

        const res = await axios.post("/user",data);

        console.log(res);
        if(res.status === 200) {
            alert("Signup Successful!");

        }
        
        
    }
    
  return (
    <div>    

        <h1>Signup</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">FirstName</label>
                <input type="text" {...register("firstName")} />
            </div>
            <div>
                <label htmlFor="">LastName</label>
                <input type="text" {...register("lastName")} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="number" {...register("age")} />
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
                <input type="password" {...register("password")} />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
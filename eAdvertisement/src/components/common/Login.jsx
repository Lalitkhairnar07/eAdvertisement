import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
export const Login = () => {


  const navigate = useNavigate()

  const { register, handleSubmit } = useForm();
  const submitHandler = async (data) => {

    const res = await axios.post("/user/login", data)
    console.log(res.data)
    if (res.status === 200) {
      alert("Login Success")
      localStorage.setItem("id", res.data.data._id)
      localStorage.setItem("role", res.data.data.roleId.name)

      if (res.data.data.roleId.name === "USER") {
        navigate("/user")
      }
      else {
        alert("Login Failed")
      }
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN USER</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")} placeholder='enter email' />
        </div>
        <div>
          <label>Password</label>
          <input type="text" {...register("password")} placeholder='enter password' />
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>

  )
}

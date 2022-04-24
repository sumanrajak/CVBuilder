import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const Register = () => {
  const [uid, setuid] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const submit =(e)=>{
    e.preventDefault()
    axios.post(`/resume/register/`,{
      
        "username": uid,
        "password" : password,
        "email" :email
          
    })
    .then(res => {
      console.log(res);
      toast.success('YOO !! account created !', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    })
    .catch(error => {

      console.log(error);
      toast.error("error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    })
  }
    return (
        <div>
          <ToastContainer/>

<div class="formbg-outer" style={{marginTop:"20px"}}>
        <div class="formbg">
          <div class="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">Create  your account</span>
            <form id="stripe-login" onSubmit={submit}>
            <div class="field padding-bottom--24">
                  <label for="UserId">User Name</label>
                  <input type="text" name="UserId" Value={uid} onChange={(e)=>setuid(e.target.value)}/>
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email" name="email" Value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password" >Password</label>
                  
                  </div>
                  <input type="password" name="password" Value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>
              
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Create Account"/>
                </div>
               
              </form>
          </div>
        </div>
        <div class="footer-link padding-top--24">
          <span>
            Already have an account? <a href="/"> Log In</a>
          </span>
          
        </div>
      </div>
    </div>           
    )
}

export default Register

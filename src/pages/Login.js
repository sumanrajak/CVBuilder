import React, { useState } from "react";
import "./form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


 
const Login = () => {
  const [uid, setuid] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();

  const click = ()=>toast.success('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })

    const submit =(e)=>{
      e.preventDefault()
      axios.post(`/resume/login/`,{
        
          "username": uid,
          "password" : password
            
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);


        toast.success('YOO !! successfully  Loged in !', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
          setTimeout(() => {
            navigate('/Profiles')

          }, 100);
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
            <span class="padding-bottom--15">Sign in to your account</span>
            <form id="stripe-login" onSubmit={submit}>
                <div class="field padding-bottom--24">
                  <label for="uid">User Name</label>
                  <input  name="uid"  Value={uid} onChange={(e)=>setuid(e.target.value)}/>
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password" >Password</label>
                    <div class="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" name="password"  Value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox"/> Stay signed in for a week
                  </label>
                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue"/>
                </div>
                <div class="field">
                  <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                </div>
              </form>
          </div>
        </div>
        <div class="footer-link padding-top--24">
          <span>
            Don't have an account? <a href="/Register">Sign up</a>
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Login;

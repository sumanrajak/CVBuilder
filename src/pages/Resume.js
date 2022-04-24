import React, { useState ,useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Tamplate1 from '../components/Templates/Tamplate1';
import Tamplate2 from '../components/Templates/Tamplate2';
import Tamplate3 from '../components/Templates/Tamplate3';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

const Resume = () => {
    const navigate = useNavigate();
    let { id } = useParams();

    const [tem, settem] = useState(1)
    const [profile, setprofile] = useState({})
    const [edu, setedu] = useState({})
    const [skill, setskill] = useState({})
    const token = localStorage.getItem("token");
let success=1
    const  tempChange =(e)=>{
settem(e);
    }
    const check = () => {
        if (localStorage.getItem("user") == null) {
          navigate("/");
        }
      };

    const profile1={
        "response": {
            "profile_id": 2,
            "profile_name": "Full Stack Developer",
            "first_name": "Karan",
            "last_name": "Singh",
            "email": "singh@gmail.com",
            "phone": "1234567890",
            "street": "Sarai",
            "city": "Lucknow",
            "state": "UP",
            "country": "India",
            "pincode": 226004,
            "about": "Cool & Good ,Dedicated web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail. MySQL, Python and Ruby on Rails.",
            "previous_work": "Fresher",
            "projects": "Django",
            "extra_curricular": "Cricket"
        }
    }
    const skill1={
        "response": [
            {
                "skill_id": 2,
                "skill": "React",
                "rating": 10
            },
            {
                "skill_id": 3,
                "skill": "Node",
                "rating": 1
            },
            {
                "skill_id": 4,
                "skill": "Django",
                "rating": 10
            },
            {
                "skill_id": 5,
                "skill": "C++",
                "rating": 10
            }
        ]
    }

    const edu1={
        "response": [
            {
                "education_id": 2,
                "education": "Board",
                "school": "DAV",
                "score": 100,
                "start_date": "2000-07-20",
                "end_date": "2010-07-20"
            },
            {
                "education_id": 3,
                "education": "Btech",
                "school": "KIIT",
                "score": 99,
                "start_date": "2018-07-20",
                "end_date": "2022-07-20"
            },
            {
                "education_id": 4,
                "education": "Btech",
                "school": "KIIT",
                "score": 99,
                "start_date": "2018-07-20",
                "end_date": "2022-07-20"
            }
        ]
    }
    useEffect(() => {
        check();

        axios.get(`/resume/get_profile_by_id/?id=${id}`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setprofile(res.data)
            success+=1
          })
          .catch((error) => {
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
          });
          axios.get(`/resume/get_skill/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setskill(res.data)
            success+=1

          })
          .catch((error) => {
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
          });
          axios.get(`/resume/get_education/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setedu(res.data)
            success+=1

          })
          .catch((error) => {
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
          });
    }, [])
    useEffect(() => {
     console.log("profile",profile);
     console.log("edu",edu);
     console.log("skill",skill);

    }, [profile])
    
    
    return (
        <div style={{backgroundColor:"lightblue"}}>
                  <ToastContainer/>

                <div className="" style={{marginTop:"1rem",display:"flex",justifyContent:"center",marginTop:"0px"}}>
                    <Button variant="primary" onClick={()=>tempChange(1)} style={{marginLeft:"1rem",marginTop:"10px" }}>Template 1</Button>
                    <Button variant="primary" onClick={()=>tempChange(2)} style={{marginLeft:"1rem",marginTop:"10px" }}>Template 2</Button>
                    <Button variant="primary" onClick={()=>tempChange(3)} style={{marginLeft:"1rem",marginTop:"10px" }}>Template 3</Button>

                </div>
                {success=4?
                <div className="" style={{ padding:"40px",display:"flex",justifyContent:"center"}}>
                    {tem==1?<Tamplate1 edu={edu.response} skill={skill.response} profile={profile.response}></Tamplate1>:<></>}
                    {tem==2?<Tamplate2 edu={edu.response} skill={skill.response} profile={profile.response}></Tamplate2>:<></>}
                    {tem==3?<Tamplate3 edu={edu.response} skill={skill.response} profile={profile.response}></Tamplate3>:<></>}

                </div>:<div></div>}

        </div>
    )
}

export default Resume

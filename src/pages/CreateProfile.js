import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@mui/material";


const CreateProfile = () => {
  const [progress, setprogress] = useState(0);
  const [skill, setskill] = useState("");
  const [skills, setskills] = useState([]);
  const [profile, setprofile] = useState({});
  const [education, seteducation] = useState({});


  const token = localStorage.getItem("token");
  const submitEdu = () => {
    console.log(education);
    axios
      .post(`/resume/add_education/`, education, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("YOO !! education saved !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
  };
  const Submitprofile = () => {
    axios
      .post(`/resume/add_profile/`, profile, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("YOO !! frofile saved !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
  };
  const educhange = (e) => {
    let data = {};
    data[e.target.name] = e.target.value;
    seteducation((d) => ({
      ...d,
      ...data,
    }));
  };
  const profilechange = (e) => {
    let data = {};
    data[e.target.name] = e.target.value;
    setprofile((d) => ({
      ...d,
      ...data,
    }));
    // console.log(profile);
  };
  const addskills = () => {
    console.log(skills,skill);

   
    axios
      .post(`/resume/add_skill/`, 
      {
        "skill_name" : skill,
        "rating" : skills
      }, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("YOO !! skill added !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setskills("")
        setskill("");
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
  };
  const form1 = (e) => {
    setprogress(30);
  };
  const form2 = (e) => {
    setprogress(55);
    console.log("PROFILE SO FQAR", profile);
    Submitprofile();
  };
  const form3 = (e) => {
    setprogress(80);
  };
  const form4 = (e) => {
    setprogress(100);
  };
  return (
    <div>
      <div style={{ margin: "40px" }}>
        <ToastContainer />
        <ProgressBar animated now={progress} />
        {progress === 0 ? (
          <div class="formbg-outer" style={{ marginTop: "20px" }}>
            <div class="formbg" style={{ maxWidth: "70%" }}>
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Create your profile</span>
                <form id="stripe-login">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      padding: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="" style={{ width: "50%" }}>
                      {" "}
                      <div class="field padding-bottom--15">
                        <label for="UserId">Profile Name</label>
                        <input
                          type="text"
                          name="profile_name"
                          onChange={profilechange}
                        />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="email">First Name</label>
                        <input
                          type="email"
                          name="first_name"
                          onChange={profilechange}
                        />
                      </div>
                      <div class="field padding-bottom--20">
                        <div class="grid--50-50">
                          <label>Last Name</label>
                        </div>
                        <input name="last_name" onChange={profilechange} />
                      </div>
                    </div>
                    <div className="" style={{ width: "48%" }}>
                      <div class="field padding-bottom--15">
                        <label for="phone"> Phone</label>
                        <input
                          type="text"
                          name="phone"
                          onChange={profilechange}
                        />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={profilechange}
                        />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="email">About</label>
                        <input name="about" onChange={profilechange} />
                      </div>
                    </div>
                  </div>

                  <div class="field padding-bottom--24">
                    <Button
                      style={{ marginLeft: "0px", marginTop: "15px" }}
                      variant="primary"
                      onClick={form1}
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {progress === 30 ? (
          <div class="formbg-outer" style={{ marginTop: "20px" }}>
            <div class="formbg" style={{ maxWidth: "70%" }}>
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Add More Info</span>
                <form id="stripe-login">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      padding: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="" style={{ width: "50%" }}>
                      {" "}
                      <div class="field padding-bottom--15">
                        <label for="extra_curricular">Hobbies</label>
                        <input
                          type="text"
                          name="extra_curricular"
                          onChange={profilechange}
                        />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="country">country</label>
                        <input name="country" onChange={profilechange} />
                      </div>
                      <div class="field padding-bottom--20">
                        <div class="grid--50-50">
                          <label for="state">state</label>
                        </div>
                        <input name="state" onChange={profilechange} />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="projects">projects</label>
                        <input
                          type="text"
                          name="projects"
                          onChange={profilechange}
                        />
                      </div>
                    </div>
                    <div className="" style={{ width: "48%" }}>
                      <div class="field padding-bottom--15">
                        <label for="city">city </label>
                        <input
                          type="text"
                          name="city"
                          onChange={profilechange}
                        />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="street">street</label>
                        <input name="street" onChange={profilechange} />
                      </div>
                      <div class="field padding-bottom--20">
                        <div class="grid--50-50">
                          <label for="pincode">pincode</label>
                        </div>
                        <input name="pincode" onChange={profilechange} />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="previous_work">previous work</label>
                        <input
                          type="text"
                          name="previous_work"
                          onChange={profilechange}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="field padding-bottom--24">
                    <Button
                      style={{ marginLeft: "0px", marginTop: "15px" }}
                      variant="primary"
                      onClick={form2}
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {progress === 55 ? (
          <div class="formbg-outer" style={{ marginTop: "20px" }}>
            <div class="formbg" style={{ maxWidth: "70%" }}>
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Add your Education</span>
                <form id="stripe-login">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      padding: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="" style={{ width: "50%" }}>
                      <div class="field padding-bottom--15">
                        <label for="education_name">education type</label>
                        <input
                          type="text"
                          name="education_name"
                          onChange={educhange}
                        />
                      </div>
                      <div class="field padding-bottom--15">
                        <label for="school">school/institution</label>
                        <input type="text" name="school" onChange={educhange} />
                      </div>
                      <div class="field padding-bottom--20">
                        <div class="grid--50-50">
                          <label for="password">score</label>
                        </div>
                        <input name="score" onChange={educhange} />
                      </div>
                    </div>
                    <div className="" style={{ width: "48%" }}>
                      <div class="field padding-bottom--15">
                        <label for="start_date">start date</label>
                        <input
                          type="date"
                          name="start_date"
                          onChange={educhange}
                        />
                      </div>
                      <div class="field padding-bottom--20">
                        <div class="grid--50-50">
                          <label for="end_date" >
                            end_date
                          </label>
                        </div>
                        <input type="date" name="end_date"  onChange={educhange}/>
                      </div>
                    </div>
                  </div>

                  <div
                    class="field padding-bottom--24"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={{ marginLeft: "0px", marginTop: "15px" }}
                      variant="primary"
                      onClick={submitEdu}
                    >
                      Save education
                    </Button>

                    <Button
                      style={{ marginLeft: "0px", marginTop: "15px" }}
                      variant="primary"
                      onClick={form3}
                    >
                      {" "}
                      Next
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {progress === 80 ? (
          <div class="formbg-outer" style={{ marginTop: "20px" }}>
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Add Your Skills!</span>
                {/* <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/> */}
                <div class="field padding-bottom--15">
                  <label for="UserId">Skills:</label>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => setskill(e.target.value)}
                  />
                                    <label for="UserId">Level:</label>

                  <Rating
                    name="hover-feedback"
                    value={skills}
                    onChange={(event, newValue) => {
                      setskills(newValue);
                    }}
                  
                    // emptyIcon={
                    //   <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    // }
                  />
                  <br></br>
                  <Button
                    style={{ marginLeft: "0px", marginTop: "15px" }}
                    variant="primary"
                    onClick={addskills}
                  >
                    Add
                  </Button>

                  <div
                    className=""
                    style={{ display: "flex", marginTop: "10px" }}
                  ></div>
                </div>
                <Button
                  style={{ marginLeft: "0px", marginTop: "15px" }}
                  variant="primary"
                  onClick={form4}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {progress === 100 ? (
          <div class="formbg-outer" style={{ marginTop: "60px" }}>
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Profile Complited !</span>
                <div class="field padding-bottom--15">
                  <div
                    className=""
                    style={{ display: "flex", marginTop: "5px" }}
                  >
                    <Button
                      style={{ marginLeft: "0px", marginTop: "25px" }}
                      variant="primary"
                    >
                      {" "}
                      <Link to="/CreateProfile" style={{ color: "white" }}>
                        Add Another Profile
                      </Link>
                    </Button>
                    <Button
                      style={{ marginLeft: "5px", marginTop: "25px" }}
                      variant="primary"
                    >
                      {" "}
                      <Link to="/Profiles" style={{ color: "white" }}>
                        Go to Saved Profiles
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CreateProfile;

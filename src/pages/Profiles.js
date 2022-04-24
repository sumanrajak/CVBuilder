import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import axios from "axios";
const Profiles = () => {
  const [Profiles, setProfiles] = useState([])
 
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  
  

  console.log("user", token);

  const check = () => {
    if (localStorage.getItem("user") == null) {
      navigate("/");
    }
  };
  useEffect(
    () => {
      check();
      //     const res = await axios.get('/resume/get_user_profiles/', {
      //   headers: {
      //     'Authorization': `Token ${token}`
      //   }
      // });
      toast.success(`hiii! ${JSON.parse(user)?.username}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      axios.get(`/resume/get_user_profiles/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setProfiles(res.data.response)
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
    },

    // res.data.headers['Test-Header'];
    []
  );

  return (
    <div>
      <ToastContainer/>

      <h1 style={{ marginLeft: "50px", marginTop: "20px" }}>
        {JSON.parse(user)?.username}'s Profiles
      </h1>
      <Button
        style={{ marginLeft: "55px", marginTop: "5px" }}
        variant="primary"
      >
        {" "}
        <Link to="/CreateProfile" style={{ color: "white" }}>
          Add Profiles
        </Link>
      </Button>

      <div class="formbg-inner padding-horizontal--48">
        {Profiles?.map((e) => (
          <dev style={{ marginTop: "20px", padding: "20px" }}>
            <Card>
              <Card.Header as="h5">{e.profile_name}</Card.Header>
              <Card.Body>
                <Card.Title>Id:</Card.Title>
                <Card.Text>{e.profile_id}</Card.Text>
                <Button variant="primary">
                  {" "}
                  <Link to={`/Resume/${e.profile_id}`} style={{ color: "white" }}>
                    View
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </dev>
        ))}
      </div>
    </div>
  );
};

export default Profiles;

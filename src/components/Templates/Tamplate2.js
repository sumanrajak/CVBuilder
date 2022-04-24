import React ,{createRef}from "react";
import { Rating } from "@mui/material";
import { useScreenshot, createFileName } from "use-react-screenshot";
import Button from "react-bootstrap/Button";


const Tamplate2 = ({ edu, profile, skill }) => {
  const ref = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
            <Button variant="primary" onClick={downloadScreenshot} style={{marginLeft:"1rem" ,marginBottom:"10px"}}  > Download </Button>

      <div
            ref={ref}

        className=""
        style={{
          display: "flex",
          height: "700px",
          width: "600px",

        }}
      >
        <div
          className=""
          style={{
            backgroundColor: "whitesmoke",
            color: "",
            width: "50%",
            height: "100%",
            padding: "20px",
          }}
        >
          <div className="name">
            <h1 style={{ color: "" }}>{profile.first_name} {profile.last_name}</h1>
            <h2 style={{ color: "" }}></h2>
          </div>
          <div className="profile">
            <h6
              style={{
                color: "",
                fontWeight: "200",
                marginBottom: "2rem",
              }}
            >
              {profile.profile_name}
            </h6>
          </div>
          <div className="about">
            <p
              style={{ color: "", fontSize: "small", marginBottom: "1px" }}
            >
              Email :{" "}
            </p>
            <h6
              style={{ color: "", fontWeight: "200", fontSize: "small" }}
            >
              {profile.email}
            </h6>

            <p
              style={{ color: "", fontSize: "small", marginBottom: "3px" }}
            >
              Ph :
            </p>
            <h6
              style={{ color: "", fontWeight: "200", fontSize: "small" }}
            >
              {profile.phone}
            </h6>

            <p
              style={{ color: "", fontSize: "small", marginBottom: "0px" }}
            >
              Address:{" "}
            </p>
            <h6
              style={{
                color: "",
                fontWeight: "200",
                marginBottom: "2rem",
                fontSize: "small",
              }}
            >
              {" "}
              {profile.street},{profile.city},{profile.state},{profile.country}
            </h6>
          </div>
          <div className="basic info"></div>
          <div className="skills">
            <p style={{ color: "", marginBottom: "1px" }}>SKILLS : </p>
            {skill.map((e) => (
              <div>
                <p
                  style={{
                    color: "",
                    fontSize: "small",
                    marginBottom: "0px",
                  }}
                >
                  {e.skill}{" "}
                </p>
                <Rating
                  name="simple-controlled"
                  value={e.rating / 2}
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundColor: "whitesmoke",
            color: "",
            width: "50%",
            height: "100%",
            padding: "10px",
          }}
        >
          <div className="about">
            <p style={{ color: "", marginBottom: "1px",marginTop:"70px" }}>SUMMERY</p>
            <h6
              style={{
                fontWeight: "200",
                marginBottom: "2rem",
                fontSize: "small",
              }}
            >
              {" "}
              {profile.about}
            </h6>
            <p style={{ color: "", marginBottom: "1px" }}>EXPERIENCE</p>
            <h6
              style={{
                fontWeight: "200",
                marginBottom: "2rem",
                fontSize: "small",
              }}
            >
              {" "}
              {profile.previous_work}
            </h6>
          </div>
          <div className="education">
            <p style={{ color: "", marginBottom: "1px" }}>EDUCATION</p>
            {edu.map((ed) => (
              <>
                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="">
                    <p
                      style={{
                        fontSize: "x-small",
                        marginBottom: "0px",
                      }}
                    >
                      {ed.start_date}-{ed.end_date}
                    </p>
                  </div>
                  <div
                    className=""
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "large",
                        marginBottom: "0px",
                      }}
                    >
                      {ed.school}
                    </h2>
                    <p
                      style={{
                        fontSize: "small",
                        marginBottom: "0px",
                      }}
                    >
                      {ed.education}
                    </p>
                    <p
                      style={{
                        fontSize: "small",
                        marginBottom: "0px",
                      }}
                    >
                      Grade:{ed.score}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tamplate2;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import DescriptionIcon from "@mui/icons-material/Description";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

export default function HomePageMenu() {
  return (
    <div style={{ paddingLeft: "15%" }}>
      <div className="row mt-5">
        <div className="col-7" style={{ textAlign: "left", marginLeft: "4%" }}>
          <h2 style={{ fontSize: "60px" }}>Omer Perez</h2>
          <h4 style={{ color: "#cccccc" }}>Junior Full Stack Developer</h4>
          <div className="mt-3" style={{ textAlign: "left", color: "#cccccc" }}>
            More than 4 years of managing technological teams that provide
            infrastructure and support to software teams field as part of my
            service as a captain (officer) in both{" "}
            <span style={{ color: "#00b386" }}>
              MAMRAM and 8200 units in the IDF.
            </span>
            <br />
            <div className="mt-3">
              <span style={{ color: "#00b386" }}>
                3rd year B.Sc. in Computer Science{" "}
              </span>
              in The College of Management Academic Studies, seeks real-world
              experience as Full Stack. Offers strong interpersonal and task
              prioritization skills.
            </div>
            <div className="mt-3">
              Good high leading skills, with assertive personality, a team
              player, problems solver,{" "}
              <span style={{ color: "#00b386" }}>Can Do attitude</span>, and
              excellent self-learning skills.
            </div>
            <div className="mt-3">
              <Button
                style={{ marginRight: "2%", backgroundColor: "#00b386" }}
                variant="contained"
                startIcon={<DescriptionIcon />}
              >
                <b> View Projects</b>
              </Button>
              <Button
                style={{ backgroundColor: "#19334d" }}
                variant="contained"
                startIcon={<ComputerIcon />}
              >
                <b>View Resume</b>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-3" style={{ marginLeft: "2vw" }}>
          <img
            style={{
              width: "480px",
              height: "350px",
              boxShadow:
                "0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            src="../Images/CoverImage.jpg"
          />
        </div>
      </div>
      <Divider className="mt-5 mb-4" style={{ color: "white" }} />
      <div style={{ textAlign: "left", marginLeft: "4%" }}>
        <h2>
          {" "}
          <span
            style={{
              marginRight: "0.5%",
              color: "#00b386",
              fontWeight: "bold",
            }}
          >
            {" "}
            |{" "}
          </span>{" "}
          Education{" "}
          <CastForEducationIcon
            fontSize="large"
            style={{ marginLeft: "0.5%", marginTop: "-0.5%", color: "#00b386" }}
          />
        </h2>
        <div className="mt-1" style={{ color: "#cccccc" }}>
          <span style={{ color: "#00b386", fontSize: "20px" }}>
            Bachelor of Science: Computer Science,{" "}
          </span>
          <span style={{ fontSize: "15px" }}>10/2019 - 10/2022</span>
          <br />
          The College of Management Academic Studies - Rishon LeZion
          <br />
        </div>
        <span style={{ fontSize: "18px" }}>
          {" "}
          <b>95.5</b> Average grades
        </span>
      </div>
      <Divider className="mt-4" style={{ color: "white" }} />
      <div className="row mt-5 justify-content-center">
        <div className="col-3 " style={{ borderLeft: "1px solid grey" }}>
          <h4 style={{ textAlign: "left" }}> Web Technologies </h4>
          <Divider className="mt-2" style={{ color: "white" }} />
          <div className="row mt-4">
            <div
              className="col-3"
              style={{
                borderRadius: "50%",
                textAlign: "center",
                fontSize: "1.8vh",
              }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/React.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid #00BFFF",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>React.js</b>
              </div>
            </div>
            <div
              className="col"
              style={{ textAlign: "center", fontSize: "1.8vh" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/NodeJs.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid green",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>NodeJS</b>
              </div>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/Net.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid #9932CC",
                  }}
                />
              </div>
              <div className="mt-2">
                <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                  .Net Core
                </b>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/css.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid #00BFFF",
                  }}
                />
              </div>
              <div
                className="mt-2"
                style={{ textAlign: "center", fontSize: "1.8vh" }}
              >
                <b>HTML {" & "} CSS</b>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3" style={{ borderLeft: "1px solid grey" }}>
          <h4 style={{ textAlign: "left" }}> Programming Languages </h4>
          <Divider style={{ color: "white" }} />
          <div className="row mt-4">
            <div
              className="col"
              style={{
                borderRadius: "50%",
                textAlign: "center",
                fontSize: "1.8vh",
              }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/C.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid #9932CC",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>C#, C++, C</b>
              </div>
            </div>
            <div
              className="col"
              style={{ textAlign: "center", fontSize: "1.8vh" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/JS.svg"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid yellow",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>JavaScript</b>
              </div>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/Java.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid #00BFFF",
                  }}
                />
              </div>
              <div className="mt-2">
                <b style={{ textAlign: "center", fontSize: "1.8vh" }}>Java</b>
              </div>{" "}
            </div>
          </div>
        </div>

        {/*!!!!!*/}

        <div className="col-2" style={{ borderLeft: "1px solid grey" }}>
          <h4 style={{ textAlign: "left" }}> Databases </h4>
          <Divider className="mt-2" style={{ color: "white" }} />
          <div className="row mt-4">
            <div
              className="col"
              style={{
                borderRadius: "50%",
                textAlign: "center",
                fontSize: "1.8vh",
              }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/mongo.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid white",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>MongoDB</b>
              </div>
            </div>

            <div
              className="col"
              style={{ textAlign: "center", fontSize: "1.8vh" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/SQL.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid white",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>SQL</b>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-3"
          style={{
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey",
          }}
        >
          <h4 style={{ textAlign: "left" }}> Others </h4>
          <Divider className="mt-2" style={{ color: "white" }} />
          <div className="row mt-4">
            <div
              className="col"
              style={{
                borderRadius: "50%",
                textAlign: "center",
                fontSize: "1.8vh",
              }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/Express.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid white",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>Express</b>
              </div>
            </div>
            <div
              className="col"
              style={{ textAlign: "center", fontSize: "1.8vh" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/NTT.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid green",
                  }}
                />
              </div>
              <div className="mt-2">
                <b>Entity</b>
              </div>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/figma.png"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid #9932CC",
                  }}
                />
              </div>
              <div className="mt-2">
                <b style={{ textAlign: "center", fontSize: "1.8vh" }}>Figma</b>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img
                  src="../Images/Github.jpeg"
                  style={{
                    borderRadius: "50%",
                    width: "3vw",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div
                className="mt-2"
                style={{ textAlign: "center", fontSize: "1.8vh" }}
              >
                <b>Github</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

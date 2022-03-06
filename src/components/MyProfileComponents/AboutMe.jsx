import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import DescriptionIcon from "@mui/icons-material/Description";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import AboutMeMobile from "./AboutMeMobile";
import RecentProject from "./RecentProject";

export default function AboutMe() {
  return (
    <>
      <MediaQuery minWidth={1200}>
        <div style={{ paddingLeft: "20rem", paddingRight: "5rem" }}>
          <div className="row mt-2">
            <div
              className="col-7 col-lg-7 col-sm-7"
              style={{ textAlign: "left" }}
            >
              {/* My name */}
              <h2 style={{ fontSize: "4rem" }}>John Doe</h2>
              {/* title */}
              <h4 style={{ color: "#cccccc" }}>Full Stack Developer</h4>
              {/* description */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
              dolor id nulla at accusamus cupiditate et qui repudiandae minima
              <div
                className="mt-3"
                style={{ textAlign: "left", color: "#cccccc" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
                dolor id nulla at accusamus cupiditate et qui repudiandae
                minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A illo dolor id nulla at accusamus cupiditate et qui repudiandae
                minima{" "}
                <span style={{ color: "#00b386" }}>
                  Consectetur Adipisicing Elit.
                </span>
                <br />
                <div className="mt-3">
                  <span style={{ color: "#00b386" }}>B.Sc. in Software</span>
                </div>
                <div className="mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam quaerat suscipit, sequi iusto porro harum repellat eos
                  numquam corporis soluta quia sit quod quis vero,{" "}
                  <span style={{ color: "#00b386" }}>Adipisicing elit</span>,
                  and excellent self-learning skills.
                </div>
                <div className="mt-3">
                  <a
                    href="https://github.com/ibnul42"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {/* <Link to="/Resume" style={{ textDecoration: "none" }}> */}
                    <Button
                      style={{ marginRight: "2%", backgroundColor: "#00b386" }}
                      variant="contained"
                      startIcon={<DescriptionIcon />}
                    >
                      <b> View Projects</b>
                    </Button>
                  </a>
                  <Link to="/Resume" style={{ textDecoration: "none" }}>
                    <Button
                      style={{ backgroundColor: "#19334d" }}
                      variant="contained"
                      startIcon={<ComputerIcon />}
                    >
                      <b>View Resume</b>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-3 col-sm-1 col-lg-3"
              style={{ marginLeft: "2vw", minWidth: "250px" }}
            >
              <img
                style={{
                  width: "25vw",
                  height: "38vh",
                  minWidth: "300px",
                  minHeight: "200px",
                  borderRadius: "5%",
                  boxShadow:
                    "0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                src="../Images/CoverImage.jpg"
                alt="alternative text"
              />
            </div>
          </div>
          <div className="container-fluid my-5 ps-0 ">
            <RecentProject />
          </div>
          <Divider className="mt-5 mb-4" style={{ backgroundColor: "white" }} />
          <div style={{ textAlign: "left" }}>
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
                style={{
                  marginLeft: "0.5%",
                  marginTop: "-0.5%",
                  color: "#00b386",
                }}
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
          <Divider className="mt-4" style={{ backgroundColor: "white" }} />

          <div className="row mt-5 justify-content-center">
            <div className="col mb-2">
              <MediaQuery maxWidth={1397}>
                <h5 style={{ textAlign: "left" }}> Web Technologies </h5>
              </MediaQuery>
              <MediaQuery minWidth={1398}>
                <h4 style={{ textAlign: "left" }}> Web Technologies </h4>
              </MediaQuery>

              {/* all the technologies */}
              <Divider className="mt-2" style={{ backgroundColor: "white" }} />
              <div className="row mt-4 justify-content-center d-flex">
                <div
                  className="col-lg-3"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>React.js</b>
                  </div>
                </div>
                <div
                  className="col-lg-3"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>NodeJS</b>
                  </div>
                </div>
                <div className="col col-lg-3" style={{ textAlign: "center" }}>
                  <div className="d-flex justify-content-center">
                    <img
                      src="../Images/Net.png"
                      style={{
                        borderRadius: "50%",
                        width: "3vw",
                        border: "1px solid #9932CC",
                      }}
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b style={{ textAlign: "center" }}>.Net Core</b>
                  </div>
                </div>
                <div className="col col-lg-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="../Images/css.png"
                      style={{
                        borderRadius: "50%",
                        width: "3vw",
                        border: "1px solid #00BFFF",
                      }}
                      alt="alternative text"
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
            <div
              className="col mb-2"
              style={{ borderLeft: "0.1rem solid white" }}
            >
              <MediaQuery maxWidth={1397}>
                <h5 style={{ textAlign: "left" }}> Programming Languages </h5>
              </MediaQuery>
              <MediaQuery minWidth={1398}>
                <h4 style={{ textAlign: "left" }}> Programming Languages </h4>
              </MediaQuery>
              <Divider style={{ backgroundColor: "white" }} />

              {/* all the programming language */}
              <div className="row mt-4 d-flex justify-content-center">
                <div
                  className="col col-lg-3"
                  style={{
                    borderRadius: "50%",
                    textAlign: "center",
                    fontSize: "1.7vh",
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>C#, C++, C</b>
                  </div>
                </div>
                <div
                  className="col col-lg-3"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>JavaScript</b>
                  </div>
                </div>
                <div className="col col-lg-3" style={{ textAlign: "center" }}>
                  <div className="d-flex justify-content-center">
                    <img
                      src="../Images/Java.png"
                      style={{
                        borderRadius: "50%",
                        width: "3vw",
                        border: "1px solid #00BFFF",
                      }}
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                      Java
                    </b>
                  </div>{" "}
                </div>
              </div>
            </div>

            {/*!!!!!*/}
            <div
              className="col-2 mb-2"
              style={{ borderLeft: "0.1rem solid white" }}
            >
              <MediaQuery maxWidth={1397}>
                <h5 style={{ textAlign: "left" }}> Databases </h5>
              </MediaQuery>
              <MediaQuery minWidth={1398}>
                <h4 style={{ textAlign: "left" }}> Databases </h4>
              </MediaQuery>
              <Divider className="mt-2 " style={{ backgroundColor: "white" }} />

              {/* all database */}
              <div className="row mt-4 d-flex justify-content-center">
                <div
                  className="col col-lg-5"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>MongoDB</b>
                  </div>
                </div>

                <div
                  className="col col-lg-5"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>SQL</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-3 mb-2"
              style={{
                borderLeft: "0.1rem solid white",
                // borderRight: "0.1rem solid white",
              }}
            >
              <MediaQuery maxWidth={1397}>
                <h5 style={{ textAlign: "left" }}> Others </h5>
              </MediaQuery>
              <MediaQuery minWidth={1398}>
                <h4 style={{ textAlign: "left" }}> Others </h4>
              </MediaQuery>
              <Divider className="mt-2" style={{ backgroundColor: "white" }} />

              {/* extra kearning */}
              <div className="row mt-4 d-flex justify-content-center">
                <div
                  className="col col-lg-3"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>Express</b>
                  </div>
                </div>
                <div
                  className="col col-lg-3"
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
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b>Entity</b>
                  </div>
                </div>
                <div className="col col-lg-3" style={{ textAlign: "center" }}>
                  <div className="d-flex justify-content-center">
                    <img
                      src="../Images/figma.png"
                      style={{
                        borderRadius: "50%",
                        width: "3vw",
                        border: "1px solid #9932CC",
                      }}
                      alt="alternative text"
                    />
                  </div>
                  <div className="mt-2">
                    <b style={{ textAlign: "center", fontSize: "1.8vh" }}>
                      Figma
                    </b>
                  </div>
                </div>
                <div className="col col-lg-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="../Images/Github.jpeg"
                      style={{
                        borderRadius: "50%",
                        width: "3vw",
                        border: "1px solid black",
                      }}
                      alt="alternative text"
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
      </MediaQuery>
      <MediaQuery maxWidth={1199}>
        <AboutMeMobile></AboutMeMobile>
      </MediaQuery>
    </>
  );
}

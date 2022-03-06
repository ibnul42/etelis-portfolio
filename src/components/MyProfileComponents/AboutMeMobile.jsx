import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import DescriptionIcon from "@mui/icons-material/Description";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import RecentProject from "./RecentProject";

export default function AboutMeMobile() {
  return (
    <MediaQuery maxWidth={1199}>
      <div style={{ paddingLeft: "7%", paddingRight: "7%" }}>
        <div className="mt-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "4rem" }}>Omer Perez</h2>
          <h4 style={{ color: "#cccccc" }}>Junior Full Stack Developer</h4>
        </div>
        <div className="mt-3" style={{ color: "#cccccc" }}>
          <div style={{ textAlign: "left", color: "#cccccc" }}>
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
            <div className="mt-4">
              <a
                className="d-flex justify-content-center"
                href="https://github.com/OmerPerez"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={{ marginRight: "2%", backgroundColor: "#00b386" }}
                  variant="contained"
                  startIcon={<DescriptionIcon />}
                >
                  <b> View Projects</b>
                </Button>
              </a>
              <Link
                to="/Resume"
                style={{ textDecoration: "none" }}
                className="d-flex justify-content-center mt-3"
              >
                <Button
                  style={{ backgroundColor: "#19334d" }}
                  variant="contained"
                  startIcon={<ComputerIcon />}
                >
                  <b>View My Resume</b>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid my-5 ps-0 ">
          <RecentProject />
        </div>
        <Divider className="mt-4 mb-4" style={{ backgroundColor: "white" }} />
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
        <div style={{ textAlign: "left" }}>
          <div className="mt-1" style={{ color: "#cccccc" }}>
            <span style={{ color: "#00b386", fontSize: "20px" }}>
              Bachelor of Science: Computer Science,{" "}
            </span>
            <br />
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

        <div className="mt-3" style={{ textAlign: "center" }}>
          <h4> Web Technologies </h4>
          <div className="d-flex justify-content-center">
            <div className="row mt-2">
              <div className="col">
                <img
                  src="../Images/React.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col">
                <img
                  src="../Images/NodeJS.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col">
                <img
                  src="../Images/Net.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col">
                <img
                  src="../Images/css.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5" style={{ textAlign: "center" }}>
          <h4>Programming Languages </h4>
          <div className="d-flex justify-content-center">
            <div className="row mt-2">
              <div className="col-3 offset-2">
                <img
                  src="../Images/C.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col-3">
                <img
                  src="../Images/Java.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col-3">
                <img
                  src="../Images/JS.svg"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5" style={{ textAlign: "center" }}>
          <h4>Databases </h4>
          <div className="d-flex justify-content-center">
            <div className="row mt-2">
              <div className="col-3 offset-3">
                <img
                  src="../Images/mongo.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col-3">
                <img
                  src="../Images/SQL.png"
                  style={{
                    borderRadius: "100%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3" style={{ textAlign: "center" }}>
          <h4>Others </h4>
          <div className="d-flex justify-content-center">
            <div className="row mt-2">
              <div className="col">
                <img
                  src="../Images/Express.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col">
                <img
                  src="../Images/NTT.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col">
                <img
                  src="../Images/figma.png"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
              <div className="col">
                <img
                  src="../Images/Github.jpeg"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #00BFFF",
                    width: "100%",
                  }}
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}

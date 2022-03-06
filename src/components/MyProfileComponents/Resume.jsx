import React from "react";
import { Divider } from "@material-ui/core";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MediaQuery from "react-responsive";

export default function Resume() {
  return (
    <>
      <MediaQuery maxWidth={1199}>
        <div className="d-flex justify-content-center mt-5">
          <h2 style={{ fontSize: "2rem", textAlign: "center" }}>
            <b>My Resume</b>
          </h2>
        </div>
        <div
          className="d-flex justify-content-center mt-3"
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <div style={{ marginRight: "5%" }}>
            <a

              //  my resume link located on files folder which is under public folder
              href="../files/CV Omer Perez.pdf"
              download
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  backgroundColor: "#54B689",
                }}
                variant="contained"
              // startIcon={<PictureAsPdfIcon />}
              >
                <b> Download PDF Version</b>
              </Button>
            </a>
          </div>
          <div style={{ marginLeft: "2px" }}>
            <a
              //  my resume link located on files folder which is under public folder
              href="../files/CV Omer Perez.pdf"
              download
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  backgroundColor: "#483D8B",
                }}
                variant="contained"
              >
                <b> Download Record of Studies</b>
              </Button>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <img
            //  my resume link located on files folder which is under public folder
            src="../Images/CV.jpg"
            style={{
              width: "85%",
              borderRadius: "2%",
              border: "2px solid white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            alt="alternative text"
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <div style={{ paddingLeft: "20rem", paddingRight: "5rem" }}>
          <div className="mt-4" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem" }}>
              <b>My Resume</b>
            </h2>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div style={{ marginRight: "1rem" }}>
              <a
                //  my resume link located on files folder which is under public folder
                href="../files/CV Omer Perez.pdf"
                download
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={{
                    backgroundColor: "#54B689",
                    height: "5vh",
                    width: "20rem",
                  }}
                  variant="contained"
                  startIcon={<PictureAsPdfIcon />}
                >
                  <b> Download PDF Version</b>
                </Button>
              </a>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <a
                //  my resume link located on files folder which is under public folder
                href="../files/CV Omer Perez.pdf"
                download
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={{
                    backgroundColor: "#54B689",
                    height: "5vh",
                    width: "20rem",
                  }}
                  variant="contained"
                  startIcon={<PictureAsPdfIcon />}
                >
                  <b> Download Record of Studies</b>
                </Button>
              </a>
            </div>
          </div>
          <Divider
            className="mt-3"
            style={{ background: "white", height: "0.05rem" }}
          />
          <div className="d-flex justify-content-center mt-3 mb-3">
            <img
              //  photo of my cv
              src="../Images/CV.jpg"
              style={{
                width: "50rem",
                borderRadius: "2%",
                border: "2px solid blue",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              alt="alternative text"
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

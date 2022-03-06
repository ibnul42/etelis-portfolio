import { useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";
// import SwitchButton from "./SwitchButton";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
      {/* changing profile image */}
      <div className="mt-3 d-flex justify-content-center">
        <img
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            border: "3px solid crimson",
          }}
          src="../Images/Profile Image.png"
          alt="alternative text"
        />
      </div>
      {/* change name */}
      <div className="mt-3" style={{ textAlign: "center", color: "white" }}>
        <b style={{ fontSize: "150%" }}> John Doe</b>
      </div>
      <div className="mt-3" style={{ textAlign: "center" }}>
        {/* changing about me */}
        <p style={{ color: "white", fontSize: "95%" }}>
          Hi, my name is John Doe and I'm a Full Stack developer. Welcome to my
          personal website!
        </p>

        <div className="d-flex justify-content-between">
          <a
            href="https://twitter.com/ibnulashir42"
            target="_blank"
            type="button"
            className="btn btn-outline-success"
          >
            Follow
          </a>
          <a
            href="https://www.linkedin.com/in/ibnul-ashir-2011a9114/"
            target="_blank"
            type="button"
            className="btn btn-outline-danger"
          >
            Message
          </a>
        </div>
      </div>
      <div style={{ padding: "1rem 1rem" }}>
        {/* about me page */}
        <Link to="/AboutMe" style={{ textDecoration: "none" }}>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
          >
            <PersonIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>About Me</b>
          </IconButton>
        </Link>

        {/* my resume page */}
        <Link to="/Resume" style={{ textDecoration: "none" }}>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
          >
            <DescriptionIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>Resume</b>
          </IconButton>
        </Link>
        <div>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
            // what's app number
            onClick={() => window.open("https://wa.me/+8801765427688?")}
          >
            <ContactMailIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>Contact</b>
          </IconButton>
        </div>
      </div>
      <Divider style={{ backgroundColor: "white" }} />
      {/* <div
        className="d-flex justify-content-center mt-3"
        style={{ color: "white" }}
      >
        <svg
          style={{ width: "1.5rem", height: "1.5rem", marginRight: "10px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
          ></path>
        </svg>
        <b>Dark Mode</b>
      </div>
      toggle button
      <div className="d-flex justify-content-center mt-2 mb-2">
        <SwitchButton />
      </div> */}
    </div>
  );

  const container = undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { lg: "none" }, backgroundColor: "#111821" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1e2a3a",
              borderRight: "3px solid #54B689",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1e2a3a",
              borderRight: "3px solid #54B689",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
      </Box> */}
    </Box>
  );
}

export default ResponsiveDrawer;

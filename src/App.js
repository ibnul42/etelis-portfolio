import './App.css';
import {ThemeProvider, createTheme} from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";

import AboutMe from "./components/MyProfileComponents/AboutMe";
import Resume from "./components/MyProfileComponents/Resume";
import MyProjects from "./components/MyProfileComponents/MyProjects";


function App() {

  const [mode, setMode] = useState(true);

  // dark theme color (initial)
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      background: {
        default: "#111821",
        paper: "#111821",
      },
      text: {
        primary: "#fff",
        secondary: "#cccccc",
      },
    },
  });

  // light theme color
  const whiteTheme = createTheme({
    palette: {
      type: "light",
    },
    text: {
      primary: "black",
      secondary: "black",
    },
  });
  return (
    <ThemeProvider theme={mode ? darkTheme : whiteTheme}>
      <Paper variant="outlined" style={{ minHeight: "100vh" }}>

          {/* left side bar */}
          <div onChange={() => setMode(!mode)}>
            <SideBar />
          </div>

          {/* right side bar */}
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Projects' element={<MyProjects />} />            
          </Routes>
          <div onChange={() => setMode(!mode)}></div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

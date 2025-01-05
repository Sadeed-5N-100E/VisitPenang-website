import React from 'react';
import Navbar from './components/Navbar';
import VideoSection from './components/VideoSection';
import CardsSlider from './components/CardsSlider';
import SkylineImage from './components/SkylineImage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
         
        </nav>
        <Navbar/>
        <VideoSection/>
        <div style={{ width: "100%",  height: "3px",  margin: "1rem 0",  background: "linear-gradient(to right, #e82962, #1fc6c6)"}}> </div>
        <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}>Nature</h2>
        <div style={{ width: "100%",  height: "3px",  margin: "1rem 0",  background: "linear-gradient(to right, #e82962, #1fc6c6)"}}> </div>
        <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}>Heritage</h2>
        <div style={{ width: "100%",  height: "3px",  margin: "1rem 0",  background: "linear-gradient(to right, #e82962, #1fc6c6)"}}> </div>
        <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}>Penang's Food and beverages</h2>
        <h3 style={{marginTop: "2rem", textAlign: "center",fontSize: "1rem",fontWeight: "bold"}}>A melting pot of three cuisines </h3>
        <CardsSlider/>
        <div style={{ width: "100%",  height: "3px",  margin: "1rem 0",  background: "linear-gradient(to right, #e82962, #1fc6c6)"}}> </div>
        <SkylineImage/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <Routes>
        <Route path="/">
          </Route>
       </Routes>
      </div>
    </Router>
  );
}

export default App;


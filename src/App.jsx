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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Navbar/>
        <VideoSection/>
        <CardsSlider/>
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

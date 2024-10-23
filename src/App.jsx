import "./App.css";
import Word_adventure from "./components/Word_adventure";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Team from "./components/Team";
/* import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import MediaHub from "./components/MediaHub";
import Contact from "./components/Contact"; */


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WordsAdventure" element={<Word_adventure />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            {/*    <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mediahub" element={<MediaHub />} />
          <Route path="/contact" element={<Contact />} />    */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <Word_adventure />
    </div>
  );
}

export default App; */

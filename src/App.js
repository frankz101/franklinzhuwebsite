import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />

      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

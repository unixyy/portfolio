import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Footer";


function App() {

  return (
    <div id="app" className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

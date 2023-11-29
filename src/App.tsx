import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";


function App() {

  return (
    <div id="app" className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <Education />
      <Projects />
    </div>
  )
}

export default App

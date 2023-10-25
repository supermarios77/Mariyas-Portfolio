import Home from "./components/Home/Home";
import SideBar from "./components/Sidebar/Bar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services"
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <SideBar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Resume />
      <Projects />
    </div>
  )
}

export default App 
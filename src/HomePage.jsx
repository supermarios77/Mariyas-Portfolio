import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services"
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import LatestPosts from "./components/Blog/LatestPosts";
import Contact from "./components/Contact/Contact";

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            <Skills />
            <Services />
            <Resume />
            <Projects />
            <LatestPosts />
            <Contact />
        </div>
    )
}

export default HomePage
import HomePage from './Home/HomePage';
import About from './About/About';
import Skills from './Skills/Skills';
import FeaturedPosts from './Blog/FeaturedPosts';
import Projects from './Projects/Projects';
import Service from './Services/Service';
import Contact from './Contact/Contact';

const MainPage = () => {
  return (
    <div>
        <HomePage />
        <About />
        <Skills />
        <Service />
        <FeaturedPosts />
        <Projects />
        <Contact />
    </div>
  )
}

export default MainPage
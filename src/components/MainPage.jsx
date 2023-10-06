import HomePage from './Home/HomePage';
import About from './About/About';
import Skills from './Skills/Skills';
import FeaturedPosts from './Blog/FeaturedPosts';
import Projects from './Projects/Projects';

const MainPage = () => {
  return (
    <div>
        <HomePage />
        <About />
        <Skills />
        <FeaturedPosts />
        <Projects />
    </div>
  )
}

export default MainPage
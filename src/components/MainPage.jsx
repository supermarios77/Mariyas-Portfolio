import HomePage from './Home/HomePage';
import About from './About/About';
import Skills from './Skills/Skills';
import FeaturedPosts from './Blog/FeaturedPosts';

const MainPage = () => {
  return (
    <div>
        <HomePage />
        <About />
        <Skills />
        <FeaturedPosts />
    </div>
  )
}

export default MainPage
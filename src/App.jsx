import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;

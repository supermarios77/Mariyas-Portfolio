import SideBar from "./components/Sidebar/Bar";
import HomePage from './HomePage';
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <div>
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App 
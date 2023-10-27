/* eslint-disable react/jsx-key */
import "../../../Styles.css";
import "./Blog.css";
import  { useState } from "react";
import blogData from "./blogData";
import BlogCard from "./BlogCard";

const Blog = () => {

  const [filter, setFilter] = useState("all");

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredPosts = blogData.filter((post) => {
    if (filter === "all") {
      return true; 
    } else {
      return post.category === filter;
    }
  });

  return (
    <div className="blog__section section container">

      <h1 className="section__title">My Blog Posts</h1>

      <div className="post-filter">
        <span
          className={`filter-item ${filter === "all" ? "active-filter" : ""}`}
          data-filter="all"
          onClick={() => handleFilterClick("all")}
        >
          All
        </span>
        <span
          className={`filter-item ${filter === "Web Design" ? "active-filter" : ""}`}
          data-filter="design"
          onClick={() => handleFilterClick("Web Design")}
        >
          Web Design
        </span>
        <span
          className={`filter-item ${filter === "Python" ? "active-filter" : ""}`}
          data-filter="python"
          onClick={() => handleFilterClick("Python")}
        >
          Python
        </span>
        <span
          className={`filter-item ${filter === "Web Development" ? "active-filter" : ""}`}
          data-filter="web-dev"
          onClick={() => handleFilterClick("Web Dev")}
        >
          Web Development
        </span>
        <span
          className={`filter-item ${filter === "Tech" ? "active-filter" : ""}`}
          data-filter="tech"
          onClick={() => handleFilterClick("Tech")}
        >
          Tech
        </span>
      </div>

      <div className="blog__container grid">
        {filteredPosts.map((post) => (
          
          <BlogCard
            id={post.id}
            title={post.title}
            date={post.date}
            author={post.author}
            imageURL={post.imageURL}
            category={post.category}
          />
        ))}
      </div>

    </div>
  )
}

export default Blog
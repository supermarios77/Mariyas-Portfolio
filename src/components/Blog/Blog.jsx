import React, { useState } from "react";
import BlogItem from "./BlogItem";
import blogData from "./blog";
import "./Blog.css";

const Blog = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredPosts = blogData.filter((post) => {
    if (filter === "all") {
      return true; // Show all posts when "All" is selected
    } else {
      return post.type === filter;
    }
  });

  return (
    <div className="blog">
      <div className="blog-banner">
        <div className="blog-text-container">
          <h1 className="blog-banner-title">My Blog Posts</h1>
          <span className="blog-banner-subtitle">Your Source Of Great Content</span>
        </div>
      </div>

      <div className="post-filter container">
        <span
          className={`filter-item ${filter === "all" ? "active-filter" : ""}`}
          data-filter="all"
          onClick={() => handleFilterClick("all")}
        >
          All
        </span>
        <span
          className={`filter-item ${filter === "Design" ? "active-filter" : ""}`}
          data-filter="design"
          onClick={() => handleFilterClick("Design")}
        >
          Design
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
          onClick={() => handleFilterClick("Web Development")}
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

      <div className="post container">
        {filteredPosts.map((post) => (
          <BlogItem
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
            imageUrl={post.imageUrl}
            type={post.type}
            time={post.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
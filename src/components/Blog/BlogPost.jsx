import { useParams } from "react-router-dom";
import blogData from "./blog";
import "./Blog.css";
import "../../../Styles.css";

const BlogPost = () => {
  const { id } = useParams();

  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">

      <div className="post-header">
        <div className="header-content post-container">
          <a href="/blog" className="back-home">
            Back To Home
          </a>

          <h2 className="header-title">{post.title}</h2>

          <img src={post.imageUrl} alt={post.title} className="header-img" />
        </div>
      </div>

      <div className="post-content">
        <h2 className="subheading">{post.subHeading}</h2>
        <p className="post-text">{post.content}</p>
      </div>

    </div>
  );
};

export default BlogPost;

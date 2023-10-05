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

    <div className="post-image">
      <img src={post.imageUrl} alt={post.title} />
    </div>

      <span className="postType">{post.type}</span>

      <p>{post.date}</p>

      {/* <h1>{post.title}</h1>

      <p>{post.time}</p>

      <p>{post.content}</p> */}
    </div>
  );
};

export default BlogPost;

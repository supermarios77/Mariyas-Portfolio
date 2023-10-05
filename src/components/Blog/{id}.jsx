import { useParams } from 'react-router-dom';
import blogData from './blog'; 
import "./Blog.css";

const BlogPost = () => {
  const { id } = useParams(); 


  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;


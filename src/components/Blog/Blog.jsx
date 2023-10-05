import BlogItem from './BlogItem'; 
import blogData from './blog'; 
import "./Blog.css"

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-list">
        {blogData.map((post) => (
          <BlogItem
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;


import BlogItem from './BlogItem'; 
import blogData from './blog'; 
import "./Blog.css";

const FeaturedPosts = () => {

  const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestPosts = sortedPosts.slice(0, 3);

  return (
    <div className="featured-posts">

      <div className="featured-posts-heading">
        <span>My Recent Posts</span>
        <h3>My Blog</h3>
      </div>

      <div className="featured-post-container">
        {latestPosts.map((post) => (
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

export default FeaturedPosts;



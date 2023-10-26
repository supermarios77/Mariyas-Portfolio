/* eslint-disable react/jsx-key */
import "./Blog.css";
import blogData from "./blogData";
import BlogCard from "./BlogCard";

const LatestPosts = () => {

  const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestPosts = sortedPosts.slice(0, 3);

  return (
    <div className="latest__posts section container">

        <h2 className="section__title">My Latest Posts</h2>

        <div className="blog__container grid">

        {latestPosts.map((post) => (
          <BlogCard 
            category={post.category}
            author={post.author}
            title={post.title}
            date={post.date}
            imageURL={post.imageURL}
          />
        ))}

      </div>
    </div>
  )
}

export default LatestPosts;
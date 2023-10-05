import "./Blog.css";

const BlogItem = ({ id, title, date, time, content, imageUrl, type }) => {
  // Truncate the content if it's too long
  const maxLength = 200; // You can adjust this value to your preference
  const truncatedContent =
    content.length > maxLength ? `${content.slice(0, maxLength)}...` : content;

  return (
    <div className="blog-item">
      <div className="blog-img">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="blog-text">
        <span className="date">{date} / {time}</span>
        <span className="type">{type}</span>
        <h3>{title}</h3>
        <p>{truncatedContent}</p>
        <a href={`/blog/${id}`}>Read more</a>
      </div>
    </div>
  );
};

export default BlogItem;

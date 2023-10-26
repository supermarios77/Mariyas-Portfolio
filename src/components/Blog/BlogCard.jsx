import "./Blog.css";

const BlogCard = ({ category, imageURL, title, author, date }) => {

  return (
    <div className="blog__card">
        <div className="blog__thumb">
            <a href={`/blog/${title}`}><span className="blog__category">{category}</span></a>
            <a href={`/blog/${title}`}><img src={imageURL} alt={title} className="blog__img"/></a>
        </div>
        <div className="blog__details">
            <h3 className="blog__title">{title}</h3>
            <div className="blog__meta">
                <span>{date}</span>
                <span className="blog__dot">.</span>
                <span>{author} </span>
            </div>
        </div>
    </div>
  )
}

export default BlogCard; 
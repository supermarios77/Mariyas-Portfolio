import "../../../Styles.css";
import "./Blog.css";
import { useParams } from "react-router-dom";
import blogData from "./blogData";

const BlogPost = () => {

  const { id } = useParams();

  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  console.log(post)

  return (
    <section className="blog__post container section">

      <h3 className="post__title">{post.title}</h3>

      <p className="post__details">{post.author} / {post.category}</p>

      <p className="post__summary">{post.summary}</p>

      <img src={post.image} alt={post.title} className="post__img" />

      <h2 className="Section">{post.section}</h2>

      <p className="paragraph">
        {post.paragraph}
      </p>

      <h2 className="Section">{post.section2}</h2>

      <p className="paragraph">
        {post.paragraph2}
      </p>

      <h2 className="Section">{post.section3}</h2>

      <p className="paragraph">
        {post.paragraph3}
      </p>

      <h2 className="Section">{post.section4}</h2>

      <p className="paragraph">
        {post.paragraph4}
      </p>

      <h2 className="Section">{post.section5}</h2>

      <p className="paragraph">
        {post.paragraph5}
      </p>

      <h2 className="Section">{post.section6}</h2>

      <p className="paragraph">
        {post.paragraph6}
      </p>

      <h2 className="Section">{post.section7}</h2>

      <p className="paragraph">
        {post.paragraph7}
      </p>

      <h2 className="Section">{post.section8}</h2>

      <p className="paragraph">
        {post.paragraph8}
      </p>

      <h2 className="Section">{post.section9}</h2>

      <p className="paragraph">
        {post.paragraph9}
      </p>

      <h2 className="Section">{post.section10}</h2>

      <p className="paragraph">
        {post.paragraph10}
      </p>

      <h2 className="Section">{post.section11}</h2>

      <p className="paragraph">
        {post.paragraph11}
      </p>

      <h2 className="Section">{post.section12}</h2>

      <p className="paragraph">
        {post.paragraph12}
      </p>

      <h2 className="Section">{post.section13}</h2>

      <p className="paragraph">
        {post.paragraph13}
      </p>

      <h2 className="Section">{post.section14}</h2>

      <p className="paragraph">
        {post.paragraph14}
      </p>

      <h2 className="Section">{post.section15}</h2>

      <p className="paragraph">
        {post.paragraph15}
      </p>

    </section>
  )
}

export default BlogPost
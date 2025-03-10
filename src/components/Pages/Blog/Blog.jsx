import blogData from './blog.json';
import './Blog.css';

function Blog() {
  return (
    <main>
      <div className="container">
        {blogData.posts.map(post => (
          <div key={post.id} className="seccion">
            <div className="foto">
              <img className="fotoart" src={post.image} alt={post.title} />
            </div>
            <div className="texto">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Blog;

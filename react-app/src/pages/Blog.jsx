import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

function Blog() {
  return (
    <div className="content">
      <div className="blog-content">
        <h2>Blog</h2>
        <div className="blog-feed">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-preview">
              <h3 className="post-title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <div className="post-meta">
                <span className="post-author">By {post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">Read more...</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { blogPosts } from '../data/blogPosts'

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    return (
      <div className="content">
        <div className="blog-post">
          <h1>Post not found</h1>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="content">
      <div className="blog-post">
        <div className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="post-author">By {post.author}</span>
            <span className="post-date">{post.date}</span>
          </div>
        </div>
        
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="post-navigation">
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
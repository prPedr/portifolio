import React from 'react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Making a design system from scratch",
      date: "12 Feb 2026",
      category: "Design, Pattern",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      date: "10 Jan 2026",
      category: "Figma, Icon Design",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    }
  ];

  return (
    <section className="blog-section jc-space-between">
      <div className="blog-header">
        <h2>Blog</h2>
      </div>
      
      <div className="blog-container d-flex jc-space-between">
        {posts.map(post => (
          <article key={post.id} className="blog-card d-flex fd-column">
            <h3 className="card-title">{post.title}</h3>
            
            <div className="card-info d-flex">
              <span className="card-date">{post.date}</span>
              <span className="card-separator">|</span>
              <span className="card-category">{post.category}</span>
            </div>
            
            <p className="card-text">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
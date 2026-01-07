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
      title: "Porque usar TypeScript",
      date: "06 Jan 2026",
      category: "Desenvolvimento",
      excerpt: "TypeScript aumenta a segurança do código ao adicionar tipagem estática ao JavaScript, reduz erros em tempo de desenvolvimento e facilita a manutenção de aplicações de grande porte."
    },
    {
      id: 2,
      title: "Porque usar React JS",
      date: "06 Jan 2026",
      category: "Desenvolvimento",
      excerpt: "React JS permite criar interfaces modernas e performáticas com componentes reutilizáveis, melhorando a organização do código e a experiência do usuário em aplicações web escaláveis."
    }
  ];

  return (
    <section className="blog-section jc-space-between" id="blog">
      <div className="blog-header">
        <h2>Blog</h2>
      </div>
      
      <div className="blog-container d-flex fd-column al-center">
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
import React, { useState, useEffect } from 'react';
import './MenuApresentacao.css';

const MenuApresentacao: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  useEffect(() => {
    if (isDownloading) {
      
      const timer = setTimeout(() => {
        window.print();
        setIsDownloading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isDownloading]);

  const handleDownload = () => {
    setIsDownloading(true);
  };

  return (
    <section className="menu-apresentacao fd-column">
      <div className="apresentacao-content d-flex fd-column">
        <h1 className="apresentacao-titulo">
          Olá, eu sou Pedro Desenvolvedor Full-stack
        </h1>
        
        <p className="apresentacao-paragrafo">
          Desenvolvedor Full-Stack com foco em Java e TypeScript. Criando soluções digitais práticas e escaláveis para pequenos negócios e MEIs.
        </p>

        <button 
          className={`apresentacao-botao d-flex jc-center al-center ${isDownloading ? 'loading' : ''}`} 
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? "Preparando..." : "Download resumo"}
        </button>
      </div>
    </section>
  );
};

export default MenuApresentacao;
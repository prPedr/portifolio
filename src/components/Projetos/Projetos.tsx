import React from 'react';
import './Projetos.css';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagemUrl: string;
}

const Projetos: React.FC = () => {
  const meusProjetos: Projeto[] = [
    {
      id: 1,
      titulo: "Renova MEI",
      descricao: "Sistema de agenda inteligente para MEIs, focado no controle de prazos, compromissos e obrigações. Facilita a organização do negócio e reduz riscos de atrasos administrativos.",
      imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTan_DQ5AcpsZY6jMO2tiEx4Xzb2q9bt2ahSw&s"
    },
    {
      id: 2,
      titulo: "Biblioteca Comunitaria",
      descricao: "Projeto colaborativo que permite pegar e devolver livros de forma simples. Incentiva a leitura, o compartilhamento de conhecimento e o acesso comunitário à cultura.",
      imagemUrl: "https://img.freepik.com/vetores-gratis/icone-vetorial-de-desenho-animado-flutuante-educacao-icone-de-objeto-vector-plano-isolado_138676-13661.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 3,
      titulo: "Juntar PDFs",
      descricao: "Sistema que permite unir múltiplos arquivos PDF em um único documento, organizando as páginas na ordem desejada de forma rápida, prática e intuitiva.",
      imagemUrl: "https://res-academy.cache.wpscdn.com/images/seo_posts/20240611/eb9c58bd46c77c04a5be40907a13277f.png"
    }
  ];

  return (
    <section className="projetos-section" id="projects">
      <div className="projetos-content">
        <h2 className="projetos-titulo-principal">Projetos</h2>
        
        <div className="projetos-lista">
          {meusProjetos.map((projeto) => (
            <div key={projeto.id} className="projeto-item">
              <img src={projeto.imagemUrl} alt={projeto.titulo} className="projeto-img" />
              
              <div className="projeto-info">
                <h3 className="projeto-titulo">{projeto.titulo}</h3>
                <p className="projeto-descricao">{projeto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
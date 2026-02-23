import "../styles/about.css";

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13 2 3 14h7l-1 8 12-14h-7l1-6Z" />
    </svg>
  );
}

function IconBot() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3v3" />
      <rect x="4" y="6" width="16" height="15" rx="4" />
      <path d="M8 12h.01M16 12h.01" />
      <path d="M9 16c1.8 1.6 4.2 1.6 6 0" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2 19 6v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01" />
      <path d="M12 7h6M12 17h6" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <header className="about-header">
          <span className="about-kicker">Plataforma de Investimentos Automatizados</span>
          <h2>Sobre a Axion Investimentos</h2>
          <p>
            Somos uma empresa especializada em operações financeiras automatizadas por Inteligência Artificial.
            Algoritmos avançados analisam o mercado em tempo real, identificam padrões e executam operações estratégicas
            com foco em consistência e controle.
          </p>
        </header>

        <div className="about-grid">
          {/* LEFT */}
          <div className="about-panel">
            <p>
              A <strong>Axion Investimentos</strong> combina <strong>Inteligência Artificial</strong>,{" "}
              <strong>modelos quantitativos proprietários</strong> e <strong>execução algorítmica</strong> para operar
              com disciplina técnica e decisões orientadas por dados.
            </p>

            <p>
              Nossos sistemas processam grandes volumes de informação em <strong>baixa latência</strong>, avaliando
              cenários e mudanças de regime do mercado. A operação é automatizada, reduzindo ruído e eliminando decisões
              emocionais.
            </p>

            <p>
              O fluxo é construído com foco em <strong>gestão de risco</strong>, <strong>adaptação dinâmica</strong> e
              monitoramento contínuo de performance, mantendo execução consistente mesmo com variações de volatilidade.
            </p>

            <div className="about-highlight">
              <div className="about-highlight-title">Essência da plataforma</div>
              <div className="about-highlight-text">
                <strong>Tecnologia + IA + Mercado Financeiro</strong>
                <span className="about-highlight-eq"> = </span>
                <strong>Performance Estratégica Automatizada</strong>
              </div>
              <div className="about-highlight-sub">Onde a Inteligência Artificial opera para você.</div>
            </div>

            <div className="about-note">
              Aviso: operações no mercado envolvem risco e volatilidade. Não existe garantia de retorno.
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-top">
                <span className="about-icon" aria-hidden="true"><IconBolt /></span>
                <h4>Análise Inteligente</h4>
              </div>
              <p>
                Processamento contínuo de dados e leitura de mercado em tempo real para identificar padrões,
                oportunidades e riscos.
              </p>
              <div className="about-tags">
                <span>Tempo real</span>
                <span>Dados</span>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-top">
                <span className="about-icon" aria-hidden="true"><IconBot /></span>
                <h4>Execução Automatizada</h4>
              </div>
              <p>
                Estratégias executadas automaticamente com disciplina algorítmica, reduzindo atrasos e vieses humanos.
              </p>
              <div className="about-tags">
                <span>Automação</span>
                <span>Algoritmos</span>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-top">
                <span className="about-icon" aria-hidden="true"><IconShield /></span>
                <h4>Gestão de Risco</h4>
              </div>
              <p>
                Controle de exposição, proteção de capital e ajustes dinâmicos conforme volatilidade e liquidez.
              </p>
              <div className="about-tags">
                <span>Controle</span>
                <span>Consistência</span>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-top">
                <span className="about-icon" aria-hidden="true"><IconServer /></span>
                <h4>Infraestrutura</h4>
              </div>
              <p>
                Servidores de alta performance e processamento em escala para estabilidade e execução operacional.
              </p>
              <div className="about-tags">
                <span>Escala</span>
                <span>Performance</span>
              </div>
            </div>

            <div className="about-quote">
              <span className="about-quote-dot" aria-hidden="true" />
              Automatizamos inteligência. Otimizamos resultados.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import "../styles/features.css";

function IconGraph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 15l4-4 3 3 5-6" />
      <path d="M19 8v4h-4" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8.5 6.5a3.5 3.5 0 0 1 6.9 0" />
      <path d="M7 8a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3" />
      <path d="M17 8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3" />
      <path d="M8 19a3 3 0 0 0 8 0" />
      <path d="M9 10h.01M15 10h.01" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13 2 3 14h7l-1 8 12-14h-7l1-6Z" />
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

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}

const ITEMS = [
  {
    title: "Decisão baseada em dados",
    desc:
      "Modelos quantitativos e IA analisam mercado em tempo real, detectam padrões e priorizam sinais de alta qualidade para execução.",
    bullets: ["Tempo real + histórico", "Leitura de padrões", "Disciplina técnica"],
    tag: "Dados & Modelos",
    Icon: IconGraph,
  },
  {
    title: "IA operando 24/7",
    desc:
      "Automação contínua para identificar oportunidades, avaliar cenários e manter consistência operacional sem depender de decisões emocionais.",
    bullets: ["Monitoramento contínuo", "Regras algorítmicas", "Execução automática"],
    tag: "Automação",
    Icon: IconBrain,
  },
  {
    title: "Execução de alta performance",
    desc:
      "Pipeline otimizado para baixa latência e estabilidade operacional, reduzindo atrasos e melhorando precisão na execução das estratégias.",
    bullets: ["Baixa latência", "Alta disponibilidade", "Processamento em escala"],
    tag: "Infraestrutura",
    Icon: IconBolt,
  },
  {
    title: "Gestão de risco sistemática",
    desc:
      "Controle de exposição e proteção de capital com parâmetros técnicos e ajustes dinâmicos conforme volatilidade e liquidez do mercado.",
    bullets: ["Exposição controlada", "Ajustes dinâmicos", "Consistência e proteção"],
    tag: "Risco",
    Icon: IconShield,
  },
  {
    title: "Arquitetura escalável",
    desc:
      "Estrutura preparada para crescer, integrar novos ativos e evoluir estratégias com governança técnica e melhoria contínua.",
    bullets: ["Evolução contínua", "Integração de ativos", "Longo prazo"],
    tag: "Escala",
    Icon: IconServer,
  },
  {
    title: "Transparência operacional",
    desc:
      "Acompanhe métricas e status com visão objetiva do funcionamento. Performance e estabilidade monitoradas com indicadores claros.",
    bullets: ["Métricas claras", "Status operacional", "Acompanhamento contínuo"],
    tag: "Controle",
    Icon: IconEye,
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <header className="features-header">
          <span className="features-kicker">Diferenciais da Plataforma</span>
          <h2>Por que escolher a Axion Investimentos</h2>
          <p>
            Tecnologia + Inteligência Artificial + Mercado Financeiro ={" "}
            <strong>Performance Estratégica Automatizada</strong>. Uma plataforma construída para operar com disciplina,
            dados e automação 24/7.
          </p>
        </header>

        <div className="features-grid" role="list" aria-label="Diferenciais">
          {ITEMS.map((it) => (
            <article key={it.title} className="feature-card" role="listitem">
              <div className="feature-top">
                <span className="feature-icon" aria-hidden="true">
                  <it.Icon />
                </span>
                <span className="feature-tag">{it.tag}</span>
              </div>

              <h3>{it.title}</h3>
              <p>{it.desc}</p>

              <ul className="feature-list">
                {it.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="features-foot">
          <div className="features-footline">
            <span className="features-dot" aria-hidden="true" />
            Onde a Inteligência Artificial opera para você com execução automatizada.
          </div>
          <div className="features-disclaimer">
            
          </div>
        </div>
      </div>
    </section>
  );
}
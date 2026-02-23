import "../styles/automationAI.css";

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

function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a8 8 0 0 0 0-6" />
      <path d="M4.6 9a8 8 0 0 0 0 6" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
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

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 15l4-4 3 3 5-6" />
      <path d="M19 8v4h-4" />
    </svg>
  );
}

const CARDS = [
  {
    Icon: IconBrain,
    title: "Análise em tempo real",
    text:
      "Modelos proprietários processam dados, liquidez e volatilidade 24/7 para identificar padrões e mudanças de regime.",
    chips: ["Tempo real", "Padrões", "Escala"],
  },
  {
    Icon: IconSettings,
    title: "Execução algorítmica",
    text:
      "Estratégias são executadas automaticamente com disciplina técnica, reduzindo ruído, atrasos e interferência emocional.",
    chips: ["Automação", "Regras", "Baixa latência"],
  },
  {
    Icon: IconShield,
    title: "Gestão de risco dinâmica",
    text:
      "Parâmetros são ajustados conforme o cenário do mercado, controlando exposição e preservando consistência operacional.",
    chips: ["Controle", "Proteção", "Consistência"],
  },
  {
    Icon: IconChart,
    title: "Performance monitorada",
    text:
      "Métricas e indicadores acompanham estabilidade e eficiência, mantendo transparência operacional e visão objetiva.",
    chips: ["Métricas", "Observabilidade", "24/7"],
  },
];

export default function AutomationAI() {
  return (
    <section className="automation" id="automation">
      <div className="automation-container">
        <header className="automation-header">
          <span className="automation-kicker">Inteligência Artificial Operacional</span>

          <h2>
            Automação total nas operações
            <span> com IA 100% automatizada</span>
          </h2>

          <p>
            Nossa tecnologia foi construída para operar continuamente: analisa o mercado em tempo real, identifica padrões,
            executa estratégias e ajusta parâmetros automaticamente. Tudo com foco em{" "}
            <strong>controle, consistência e performance estratégica</strong>.
          </p>

          <div className="automation-pills" aria-label="Pilares">
            <span>24/7 monitoramento</span>
            <span>Execução algorítmica</span>
            <span>Infraestrutura high-performance</span>
          </div>
        </header>

        <div className="automation-grid" role="list" aria-label="Capacidades de automação">
          {CARDS.map((c) => (
            <article key={c.title} className="automation-card" role="listitem">
              <div className="automation-card-top">
                <span className="automation-icon" aria-hidden="true">
                  <c.Icon />
                </span>
                <span className="automation-tag">IA operacional</span>
              </div>

              <h3>{c.title}</h3>
              <p>{c.text}</p>

              <div className="automation-chips" aria-label="Detalhes">
                {c.chips.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="automation-foot">
          <div className="automation-footline">
            <span className="automation-dot" aria-hidden="true" />
            Automatizamos inteligência. Otimizamos resultados.
          </div>
          <div className="automation-disclaimer">
            
          </div>
        </div>
      </div>
    </section>
  );
}
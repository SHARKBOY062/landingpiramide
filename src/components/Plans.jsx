import "../styles/plans.css";

function IconCpu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

function IconPulse() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
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

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

const PLANS = [
  {
    title: "Plano Mínimo",
    investment: "R$ 50",
    level: "Entrada",
    tagline: "Comece com o mínimo e acompanhe a operação no painel.",
    featured: false,
    chips: ["Acesso ao painel", "IA 24/7"],
  },
  {
    title: "Plano 1.000",
    investment: "R$ 1.000",
    level: "Intermediário",
    tagline: "Maior alocação para acompanhar ciclos com mais amplitude operacional.",
    featured: true,
    chips: ["Mais escolhido", "Controle de risco"],
  },
  {
    title: "Plano até 10.000",
    investment: "Até R$ 10.000",
    level: "Alta alocação",
    tagline: "Para quem busca alocar mais capital mantendo disciplina algorítmica.",
    featured: false,
    chips: ["Infra high-performance", "Monitoramento contínuo"],
  },
];

const FEATURES = [
  { Icon: IconCpu, text: "IA 100% automatizada (análise + execução algorítmica)" },
  { Icon: IconPulse, text: "Leitura de mercado em tempo real e identificação de padrões" },
  { Icon: IconShield, text: "Gestão de risco sistemática com parâmetros operacionais" },
  { Icon: IconServer, text: "Infraestrutura estável e escalável (alta disponibilidade)" },
  { Icon: IconChart, text: "Painel com métricas, indicadores e transparência operacional" },
];

export default function Plans() {
  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <header className="plans-header">
          <span className="plans-kicker">Planos</span>
          <h2>Três níveis de alocação, a mesma IA operacional</h2>

          <p className="plans-subtitle">
            Todos os planos utilizam a <strong>mesma Inteligência Artificial</strong>, operando de forma{" "}
            <strong>100% automatizada</strong>. A diferença está no nível de capital alocado e no acompanhamento do ciclo
            dentro do painel.
          </p>
        </header>

        <div className="plans-grid" role="list" aria-label="Planos disponíveis">
          {PLANS.map((p) => (
            <PlanCard key={p.title} plan={p} />
          ))}
        </div>

        <p className="plans-footnote">
          
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <article className={`plan-card ${plan.featured ? "featured" : ""}`} role="listitem">
      {plan.featured && <div className="ribbon">Mais escolhido</div>}

      <div className="plan-top">
        <div className="plan-title">
          <h4>{plan.title}</h4>

          <div className="chips" aria-label="Detalhes do plano">
            <span className="chip">{plan.level}</span>
            {plan.chips?.map((c) => (
              <span key={c} className="chip chip-strong">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="plan-price">
          <span className="label">Investimento</span>
          <span className="value">{plan.investment}</span>
        </div>
      </div>

      <p className="plan-tagline">{plan.tagline}</p>

      <ul className="plan-list" aria-label="Recursos do plano">
        {FEATURES.map((f, idx) => (
          <li key={idx}>
            <span className="feat-ico" aria-hidden="true">
              <f.Icon />
            </span>
            <span className="feat-text">{f.text}</span>
          </li>
        ))}
      </ul>

      <a className="plan-cta" href="#cta">
        Acessar plataforma
      </a>
    </article>
  );
}
import "../styles/metrics.css";

function IconPulse() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z" />
      <path d="M3.5 12 12 16.5 20.5 12" />
      <path d="M3.5 16.5 12 21 20.5 16.5" />
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

function IconRadar() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 12l7-7" />
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 17a5 5 0 1 1 5-5" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
}

const METRICS = [
  {
    title: "Operações monitoradas",
    value: "12.458",
    description: "Execuções analisadas continuamente por algoritmos e modelos quantitativos.",
    tag: "Tempo real",
    Icon: IconPulse,
  },
  {
    title: "Volume automatizado",
    value: "R$ 4,8M",
    description: "Capital sob leitura dos sistemas automatizados com trilhas de controle operacional.",
    tag: "Escala",
    Icon: IconStack,
  },
  {
    title: "Uptime da plataforma",
    value: "99,97%",
    description: "Infraestrutura estável com redundância, observabilidade e resposta rápida.",
    tag: "Resiliência",
    Icon: IconServer,
  },
  {
    title: "Ativos monitorados",
    value: "28+",
    description: "Criptomoedas e pares acompanhados 24/7 para padrões e mudanças de regime.",
    tag: "24/7",
    Icon: IconRadar,
  },
];

export default function Metrics() {
  return (
    <section className="metrics" id="metrics">
      <div className="metrics-container">
        <header className="metrics-header">
          <span className="metrics-kicker">Monitoramento & Performance</span>
          <h2>Indicadores operacionais da plataforma</h2>
          <p>
            Métricas acompanhadas continuamente para garantir estabilidade, eficiência e controle. Onde a Inteligência
            Artificial opera para você com disciplina técnica e execução automatizada.
          </p>
        </header>

        <div className="metrics-grid" role="list" aria-label="Indicadores">
          {METRICS.map((m) => (
            <MetricCard key={m.title} {...m} />
          ))}
        </div>

        <div className="metrics-chart">
          <div className="metrics-chart-head">
            <div>
              <h3>Evolução de performance</h3>
              <p>Leitura operacional em janela móvel para sinalizar consistência e estabilidade.</p>
            </div>

            <div className="metrics-chart-pill" aria-label="Período">
              Últimos 30 dias
            </div>
          </div>

          <div className="metrics-chart-body" aria-label="Gráfico ilustrativo">
            <div className="metrics-gridlines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="metrics-bars">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="metrics-bar"
                  style={{ height: `${38 + i * 2.6}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div className="metrics-chart-foot">
            <span className="metrics-footnote">
              Dados ilustrativos para interface. Operações no mercado envolvem risco e volatilidade.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ title, value, description, tag, Icon }) {
  return (
    <article className="metric-card" role="listitem">
      <div className="metric-top">
        <span className="metric-icon" aria-hidden="true">
          <Icon />
        </span>
        <span className="metric-tag">{tag}</span>
      </div>

      <div className="metric-value">{value}</div>
      <div className="metric-title">{title}</div>
      <p className="metric-desc">{description}</p>
    </article>
  );
}
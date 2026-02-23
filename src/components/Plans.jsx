import "../styles/plans.css";

const DAILY_PLANS = [
  {
    title: "Diário 10",
    investment: "R$ 10",
    duration: "5 dias",
    target: "Alvo: até 2% ao dia",
    featured: false,
  },
  {
    title: "Diário 25",
    investment: "R$ 25",
    duration: "5 dias",
    target: "Alvo: até 2% ao dia",
    featured: false,
  },
  {
    title: "Diário 50",
    investment: "R$ 50",
    duration: "5 dias",
    target: "Alvo: até 2% ao dia",
    featured: true, // destaque
  },
  {
    title: "Diário 100",
    investment: "R$ 100",
    duration: "5 dias",
    target: "Alvo: até 2% ao dia",
    featured: false,
  },
];

const FIXED_PLAN = {
  title: "Fixo 10D",
  investment: "R$ 500 a R$ 1.000",
  duration: "10 dias",
  target: "Bônus alvo: R$ 100",
  featured: false,
};

export default function Plans() {
  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <header className="plans-header">
          <span className="plans-kicker">Planos</span>
          <h2>Planos de operação automatizada</h2>

          <p className="plans-subtitle">
            Todos os planos utilizam a <strong>mesma Inteligência Artificial</strong>, operando de forma{" "}
            <strong>100% automatizada</strong>. A diferença entre eles está no ciclo e no nível de capital alocado.
          </p>
        </header>

        <div className="plans-grid">
          {/* Planos diários */}
          <div className="plans-group">
            <div className="group-head">
              <h3>Planos Diários</h3>
              <p>
                Ciclo curto de <strong>5 dias</strong> com alvo operacional de <strong>até 2% ao dia</strong>.
              </p>
            </div>

            <div className="group-grid">
              {DAILY_PLANS.map((p) => (
                <PlanCard
                  key={p.title}
                  title={p.title}
                  investment={p.investment}
                  duration={p.duration}
                  target={p.target}
                  featured={p.featured}
                  features={[
                    "IA operando automaticamente em tempo real",
                    "Execução algorítmica orientada por dados e padrões",
                    "Gestão de risco e controle operacional",
                    "Acompanhamento no painel (métricas e indicadores)",
                    "Resultados variam conforme condições de mercado",
                  ]}
                />
              ))}
            </div>
          </div>

          {/* Plano fixo */}
          <div className="plans-group">
            <div className="group-head">
              <h3>Plano 10 Dias</h3>
              <p>
                Ciclo de <strong>10 dias</strong> com <strong>bônus alvo</strong> e acompanhamento completo.
              </p>
            </div>

            <div className="group-grid single">
              <PlanCard
                title={FIXED_PLAN.title}
                investment={FIXED_PLAN.investment}
                duration={FIXED_PLAN.duration}
                target={FIXED_PLAN.target}
                featured={false}
                features={[
                  "IA 100% automatizada (análise + execução)",
                  "Infraestrutura de alta performance",
                  "Processamento de dados em larga escala",
                  "Relatório de ciclo e visão operacional",
                  "Operações envolvem risco (não há garantia)",
                ]}
                wide
              />
            </div>
          </div>
        </div>

        <p className="plans-footnote">
          Aviso: Operações no mercado financeiro envolvem risco e volatilidade. Não existe garantia de retorno. Os
          percentuais e bônus apresentados devem ser tratados como metas/alvos operacionais e podem variar conforme as
          condições de mercado, liquidez e execução.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ title, investment, duration, target, features, featured, wide }) {
  return (
    <article className={`plan-card ${featured ? "featured" : ""} ${wide ? "wide" : ""}`}>
      {featured && <div className="ribbon">Mais escolhido</div>}

      <div className="plan-top">
        <div className="plan-title">
          <h4>{title}</h4>
          <div className="chips">
            <span className="chip">{duration}</span>
            <span className="chip chip-strong">{target}</span>
          </div>
        </div>

        <div className="plan-price">
          <span className="label">Investimento</span>
          <span className="value">{investment}</span>
        </div>
      </div>

      <ul className="plan-list">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <a className="plan-cta" href="#cta">
        Acessar plataforma
      </a>
    </article>
  );
}
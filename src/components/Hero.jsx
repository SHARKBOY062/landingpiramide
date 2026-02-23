import "../styles/hero.css";

const LOGIN_URL = "https://axiontech.one/login";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <div className="hero-content">
          <span className="badge">
            Tecnologia • IA • Mercado Financeiro{" "}
            <span className="dot" aria-hidden="true">•</span>{" "}
            <strong>100% automatizado</strong>
          </span>

          <h1>
            Automatizamos inteligência.
            <span> Otimizamos resultados.</span>
          </h1>

          <p>
            Operações financeiras automatizadas por Inteligência Artificial. Nossa tecnologia analisa o mercado em tempo
            real, identifica padrões e executa operações estratégicas com base em dados, algoritmos e modelos
            quantitativos proprietários.
          </p>

          <ul className="hero-points" aria-label="Destaques">
            <li>Monitoramento 24/7 com leitura de mercado em tempo real</li>
            <li>Execução automatizada orientada por dados e padrões</li>
            <li>Infraestrutura de alta performance e processamento em escala</li>
          </ul>

          <div className="hero-actions">
            <a className="primary" href={LOGIN_URL}>
              Acessar plataforma
            </a>

            <a className="secondary" href="#features">
              Ver como funciona
            </a>
          </div>

          <div className="hero-micro">Onde a Inteligência Artificial opera para você.</div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="macbook">
            <div className="macbook-screen">
              <div className="screen-header">
                <span />
                <span />
                <span />
              </div>

              <div className="screen-content">
                <div className="dashboard-metrics">
                  <div className="metric">
                    <strong>24/7</strong>
                    <span>Monitoramento</span>
                  </div>
                  <div className="metric">
                    <strong>Tempo real</strong>
                    <span>Leitura de mercado</span>
                  </div>
                  <div className="metric">
                    <strong>Quant</strong>
                    <span>Modelos</span>
                  </div>
                </div>

                <div className="dashboard-chart">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="chart-bar" style={{ height: `${32 + i * 4}%` }} />
                  ))}
                </div>

                <div className="screen-foot">
                  <span className="pill">IA</span>
                  <span className="pill">Dados</span>
                  <span className="pill">Execução</span>
                </div>
              </div>
            </div>

            <div className="macbook-base" />
          </div>
        </div>
      </div>
    </section>
  );
}
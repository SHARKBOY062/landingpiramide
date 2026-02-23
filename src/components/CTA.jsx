import "../styles/cta.css";

function IconLock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <rect x="6" y="11" width="12" height="10" rx="2" />
      <path d="M12 15v3" />
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

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-top">
            <span className="cta-kicker">Acesso à Plataforma</span>
            <span className="cta-chip">IA 100% automatizada</span>
          </div>

          <h2>Entre na Axion Investimentos e acompanhe a operação por dentro</h2>

          <p>
            Tenha acesso ao painel para visualizar <strong>métricas operacionais</strong>, leitura de mercado em{" "}
            <strong>tempo real</strong> e a execução das estratégias com foco em{" "}
            <strong>consistência, controle e performance estratégica automatizada</strong>.
          </p>

          <div className="cta-actions">
            <button className="cta-primary" type="button">
              Solicitar acesso
            </button>

            <a className="cta-secondary" href="#plans">
              Ver planos e ciclos
            </a>
          </div>

          <div className="cta-points" aria-label="Destaques">
            <div className="cta-point">
              <span className="cta-ico" aria-hidden="true">
                <IconPulse />
              </span>
              <div>
                <b>Monitoramento 24/7</b>
                <span>Leitura contínua e identificação de padrões</span>
              </div>
            </div>

            <div className="cta-point">
              <span className="cta-ico" aria-hidden="true">
                <IconServer />
              </span>
              <div>
                <b>Infra high-performance</b>
                <span>Escala, estabilidade e baixa latência</span>
              </div>
            </div>

            <div className="cta-point">
              <span className="cta-ico" aria-hidden="true">
                <IconLock />
              </span>
              <div>
                <b>Transparência operacional</b>
                <span>Métricas claras e acompanhamento estruturado</span>
              </div>
            </div>
          </div>

          <div className="cta-foot">
            <span className="cta-dot" aria-hidden="true" />
            Operações no mercado envolvem risco e volatilidade. Não existe garantia de retorno.
          </div>
        </div>
      </div>
    </section>
  );
}
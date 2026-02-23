import "../styles/marketTicker.css";

export default function MarketTicker() {
  const assets = [
    { name: "Bitcoin", symbol: "BTC", price: "R$ 342.450", change: "+1,8%", positive: true },
    { name: "Ethereum", symbol: "ETH", price: "R$ 18.720", change: "+0,9%", positive: true },
    { name: "Solana", symbol: "SOL", price: "R$ 620", change: "-0,4%", positive: false },
    { name: "BNB", symbol: "BNB", price: "R$ 1.650", change: "+0,6%", positive: true },
    { name: "XRP", symbol: "XRP", price: "R$ 3,12", change: "+2,1%", positive: true },
  ];

  const loop = assets.concat(assets);

  return (
    <section className="market" aria-label="Visão geral do mercado">
      <div className="market-container">
        <header className="market-header">
          <span className="market-kicker">Visão de mercado</span>
          <h2>Monitoramento em tempo real, guiado por IA</h2>
          <p>
            Ativos acompanhados continuamente por algoritmos de Inteligência Artificial para identificar padrões,
            movimentos e oportunidades. A leitura é feita 24/7 com foco em consistência, controle e performance
            operacional.
          </p>

          <div className="market-badges" aria-label="Recursos">
            <span className="badge">Tempo real</span>
            <span className="badge">24/7</span>
            <span className="badge">Modelos quantitativos</span>
            <span className="badge">Execução automatizada</span>
          </div>
        </header>

        <div className="ticker" aria-label="Ticker de ativos">
          <div className="ticker-fade left" aria-hidden="true" />
          <div className="ticker-fade right" aria-hidden="true" />

          <div className="ticker-track" role="list">
            {loop.map((asset, index) => (
              <div key={`${asset.symbol}-${index}`} className="ticker-item" role="listitem">
                <div className="asset-left">
                  <div className="asset-symbol">{asset.symbol}</div>
                  <div className="asset-name">{asset.name}</div>
                </div>

                <div className="asset-right">
                  <div className="asset-price">{asset.price}</div>
                  <div className={`asset-change ${asset.positive ? "up" : "down"}`}>
                    {asset.change}
                    <span className="change-dot" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ticker-hint">
            Passe o mouse para pausar • IA monitora continuamente
          </div>
        </div>

        <p className="market-note">
          
        </p>
      </div>
    </section>
  );
}
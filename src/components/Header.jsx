import "../styles/header.css";

const logoUrl = new URL("../assets/logoaxion.png", import.meta.url).href;

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a className="brand" href="/" aria-label="Início">
          <img className="brand-logo" src={logoUrl} alt="Logo" />
        </a>

        <a className="header-cta" href="#cta">
          Acessar plataforma
        </a>
      </div>
    </header>
  );
}
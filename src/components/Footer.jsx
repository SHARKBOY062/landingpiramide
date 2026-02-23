import "../styles/footer.css";
import logoUrl from "../assets/logoaxion.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a className="footer-brand" href="/" aria-label="Início">
          <img className="footer-logo" src={logoUrl} alt="Logo" />
          <span className="footer-name"></span>
        </a>

        <div className="footer-meta">
          <span>© {new Date().getFullYear()}</span>
          <span>Automatizamos inteligência. Otimizamos resultados.</span>
        </div>
      </div>
    </footer>
  );
}
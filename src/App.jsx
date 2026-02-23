import Header from './components/Header'
import Hero from './components/Hero'
import MarketTicker from './components/MarketTicker'
import Plans from './components/Plans'
import About from './components/About'
import Metrics from './components/Metrics'
import Features from './components/Features'
import AutomationAI from './components/AutomationAI'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <Hero />

        {/* PLANOS DE INVESTIMENTO (logo abaixo do Hero) */}
        <Plans />

        {/* TICKER DE MERCADO */}
        <MarketTicker />

        {/* SOBRE A EMPRESA */}
        <About />

        {/* MÉTRICAS E PERFORMANCE */}
        <Metrics />

        {/* DIFERENCIAIS DA PLATAFORMA */}
        <Features />

        {/* IA OPERANDO AUTOMATICAMENTE */}
        <AutomationAI />

        {/* CHAMADA FINAL */}
        <CTA />
      </main>

      <Footer />
    </>
  )
}

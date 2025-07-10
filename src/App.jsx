import React from 'react';
import { ChevronDown } from 'lucide-react';
import './App.css';

export default function App() {
  const waLink = `https://wa.me/558586868964?text=${encodeURIComponent(
    'Oii Celinha, pode confirmar minha presença no aniversário da nossa princesa tá ?'
  )}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Churrascaria Nativas Grill Fortaleza'
  )}`;

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h1 className="title">Você está convidado(a)!</h1>
          <h2 className="subtitle">
            Aniversário da <span className="name">Maria Eduarda</span>
          </h2>
          <p className="datetime">13&nbsp;de&nbsp;julho&nbsp;de&nbsp;2025 • 18:30</p>
          <button
            className="rsvp-btn"
            onClick={() => window.open(waLink, '_blank')}
          >
            Confirmar Presença
          </button>
        </div>

        {/* ←← Três setas à esquerda */}
        <ChevronDown className="fancy-arrow arrow-left-top" aria-hidden="true" />
        <ChevronDown className="fancy-arrow arrow-left" aria-hidden="true" />
        <ChevronDown className="fancy-arrow arrow-left-bottom" aria-hidden="true" />

        {/* ←← Três setas à direita */}
        <ChevronDown className="fancy-arrow arrow-right-top" aria-hidden="true" />
        <ChevronDown className="fancy-arrow arrow-right" aria-hidden="true" />
        <ChevronDown className="fancy-arrow arrow-right-bottom" aria-hidden="true" />
      </section>

      {/* MENSAGEM DA ANIVERSARIANTE */}
      <section className="container">
        <h3 className="section-title">Mensagem da Aniversariante</h3>
        <p className="message-text">
          Ei, gente! 😊<br /><br />
          Quero todo mundo juntinho dia 13 de julho, às 18h30, lá no Nativas Grill em
          Fortaleza. Vai ter aquele rodízio delicioso, muita risada e a melhor companhia:
          vocês!<br /><br />
          Confirma que vai participar desse dia tão especial pra mim no WhatsApp da
          minha mamãe, assim ela já vai organizando tudo direitinho. Vai ser incrível
          ter cada um de vocês por lá! 💖<br /><br />
          Beijinhos,<br />
          Maria Eduarda
        </p>
      </section>

      {/* DETALHES */}
      <section className="details container">
        <div className="card">
          <span>📅</span>
          <p>
            Domingo<br />
            <strong>13/07/2025</strong>
          </p>
        </div>
        <div className="card">
          <span>🕡</span>
          <p>
            Às<br />
            <strong>18:30</strong>
          </p>
        </div>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <div className="card">
            <span>📍</span>
            <p>
              Nativas Grill<br />
              <strong>Fortaleza (Rodízio)</strong>
            </p>
            <p className="map-text">Ver mapa</p>
          </div>
        </a>
      </section>

      {/* SOBRE O LOCAL DO ANIVERSÁRIO */}
      <section className="about container">
        <h3 className="section-title">Sobre o Local do Aniversário</h3>
        <p className="message-text">
          Oi, pessoal! Aqui é a Maria Eduarda. 😊 Nunca estive no Nativas Grill,
          mas ouvi falar que é o melhor rodízio da cidade — carnes incríveis,
          ambiente super acolhedor e aquele buffet de saladas de dar água na boca.
          Quando descobri, pensei: por que não aproveitar e comemorar meu aniversário
          lá? 🎉<br /><br />
          Então, dia 13 de julho, às 18h30, vou estar no Nativas Grill em Fortaleza
          e quero todo mundo comigo para provar essas delícias e brindar juntos.
          Vai ser a combinação perfeita de festa e gastronomia!<br /><br />
          Me confirma que vai no WhatsApp pra a minha mamãe, e vamos garantir o
          melhor lugar da casa. Mal posso esperar para celebrar com vocês! 💖
        </p>
      </section>

      {/* RSVP DUPLO – botão extra pro final */}
      <section className="rsvp-final">
        <h3>Confirme sua presença</h3>
        <button
          className="rsvp-btn"
          onClick={() => window.open(waLink, '_blank')}
        >
          Enviar via WhatsApp
        </button>
      </section>

      {/* FOOTER */}
      <footer>✨ Sua presença é o melhor presente!</footer>
    </main>
  );
}

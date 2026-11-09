import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <section id="home" className="hero">
          <p className="eyebrow">Space-inspired visual art</p>

          <h1>See the Universe Differently</h1>

          <p>
            Explore imaginative cosmic scenes inspired by space,
            light, color, and perspective.
          </p>

          <a href="#illusions" className="cta-button">
            Explore Illusions
          </a>
        </section>

        <section
          id="illusions"
          className="content-section"
          aria-labelledby="illusions-heading"
        >
          <h2 id="illusions-heading">Explore Cosmic Illusions</h2>

          <p className="section-description">
            A space-inspired gallery. Let your imagination turn
            distant worlds into new visual adventures.
          </p>

          <div className="illusion-grid">
            <article className="illusion-card">
              <img
                src="/images/brecht-corbeel-bDZWKVft_i0-unsplash.jpg"
                alt="Space-themed artwork featured in the Cosmic Illusions gallery"
                loading="lazy"
              />

              <div className="card-content">
                <h3>Beyond the Horizon</h3>
                <p>
                  Imagine a journey beyond familiar worlds, where
                  light and shadow create a mysterious scene.
                </p>
              </div>
            </article>

            <article className="illusion-card">
              <img
                src="/images/dns-dgn-9wH624ALFQA-unsplash.jpg"
                alt="Cosmic scene featured in the space-inspired gallery"
                loading="lazy"
              />

              <div className="card-content">
                <h3>A Different Perspective</h3>
                <p>
                  Look closely at the shapes and colors, and imagine
                  how the scene might appear from another viewpoint.
                </p>
              </div>
            </article>

            <article className="illusion-card">
              <img
                src="/images/guillermo-ferla-Oze6U2m1oYU-unsplash.jpg"
                alt="Astronomy photograph featured in the Cosmic Illusions gallery"
                loading="lazy"
              />

              <div className="card-content">
                <h3>Into the Unknown</h3>
                <p>
                  Explore a view inspired by the vastness of space
                  and imagine what lies beyond the frame.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="content-section contact-section"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Contact</h2>

          <p>
            Have an idea for Cosmic Illusions? Connect with me or
            explore the project on GitHub.
          </p>

          <a
            href="https://github.com/Shakir-ali-11/react"
            className="cta-button"
          >
            View GitHub Repository
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
import Header from './Components/Footer.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <section className="hero">
          <h1>See the Universe Differently</h1>
          <p>
            Discover cosmic optical illusions, animated galaxies, and
            mind-bending visual experiences.
          </p>
          <a href="/illusions" className="cta-button">
            Explore Illusions
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
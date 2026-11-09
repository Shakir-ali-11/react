import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>✦ Cosmic Illusions</h3>
          <p>Explore visual wonders inspired by space, light, and motion.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#illusions">Illusions</a>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cosmic Illusions. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
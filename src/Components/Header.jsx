import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          ✦ Cosmic Illusions
        </a>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/illusions">Illusions</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
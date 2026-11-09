import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
  Cosmic Illusions
</a>

        <nav className="nav" aria-label="Main navigation">
  <a href="#home">Home</a>
  <a href="#illusions">Illusions</a>
  <a href="#contact">Contact</a>
</nav>
      </div>
    </header>
  )
}

export default Header
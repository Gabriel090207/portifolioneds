import "./styles.css"
import logo from "../../assets/logo.png"
import { FiMoon, FiSun } from "react-icons/fi"
import { useState, useEffect } from "react"

function Navbar() {
  const [theme, setTheme] = useState("light")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light"

    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }


  function handleScroll(e: React.MouseEvent, id: string) {
  e.preventDefault()

  const target = document.querySelector(id)

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  setMenuOpen(false)
}

  return (
    <>
      <header className="navbar">
        <div className="navbar__content">

         <div className="navbar__logo" onClick={toggleMenu}>
            <img src={logo} alt="NEDS logo" />
            <span>NEDS</span>
          </div>

          <nav className="navbar__links">
            <a href="#home" onClick={(e) => handleScroll(e, "#home")}>Início</a>
<a href="#services" onClick={(e) => handleScroll(e, "#services")}>Serviços</a>
<a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projetos</a>
<a href="#about" onClick={(e) => handleScroll(e, "#about")}>Sobre</a>
<a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contato</a>
          </nav>

          <div className="theme-switch" onClick={toggleTheme}>
            <div className={`switch ${theme === "dark" ? "active" : ""}`}>
              <div className="slider">
                {theme === "light" ? <FiSun /> : <FiMoon />}
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* SIDEBAR + OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <nav className="sidebar__links">
  <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
    Início
  </a>

  <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
    Serviços
  </a>

  <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
    Projetos
  </a>

  <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
    Sobre
  </a>

  <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
    Contato
  </a>
</nav>
      </div>
    </>
  )
}

export default Navbar
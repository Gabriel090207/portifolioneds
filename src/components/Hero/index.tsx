import "./styles.css"
import { FiMessageCircle } from "react-icons/fi"
import heroImage from "../../assets/hero.png"

function Hero() {
  return (
   <section id="home" className="hero">
      <div className="hero__content">

        <div className="hero__text">
          <h1>
            Criando soluções que <span>transformam negócios</span>
          </h1>

          <p>
            Aprimore sua presença digital com sites, sistemas e automações
            modernas, rápidas e focadas em resultado.
          </p>

          <div className="hero__buttons">
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              className="btn-primary"
            >
              <FiMessageCircle />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="NEDS soluções digitais" />
        </div>

      </div>
    </section>
  )
}

export default Hero
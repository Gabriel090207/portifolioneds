import "./styles.css"
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock
} from "react-icons/fi"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__content">

        {/* COLUNA 1 - BRAND */}
        <div className="footer__brand">
          <h3>NEDS</h3>

          <p>
            Desenvolvemos soluções digitais modernas, rápidas e focadas em resultado.
            Criamos sites, sistemas e experiências digitais que realmente geram valor
            para o seu negócio, com performance, design e estratégia.
          </p>
        </div>

        {/* COLUNA 2 - LINKS */}
        <div className="footer__links">
          <h4>Navegação</h4>
          <a href="#home">Início</a>
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>

        {/* COLUNA 3 - CONTATO + ATENDIMENTO */}
        <div className="footer__contact">
          <h4>Contato</h4>

          <div className="footer__item">
            <FiMail />
            <span>contato@nedsservicesoficial.com</span>
          </div>

          <div className="footer__item">
            <FiPhone />
            <span>(16) 99399-6654</span>
          </div>

          <div className="footer__item">
            <FiMapPin />
            <span>Brasil</span>
          </div>

          {/* ATENDIMENTO */}
          <div className="footer__hours">
            <h4>Atendimento</h4>

            <div className="footer__item">
              <FiClock />
              <span>Seg - Sex: 07h às 22h</span>
            </div>

            <div className="footer__item">
              <FiClock />
              <span>Sábado: 09h às 14h</span>
            </div>

            <div className="footer__item">
              <FiClock />
              <span>Domingo: Fechado</span>
            </div>
          </div>
        </div>

        {/* COLUNA 4 - REDES */}
        <div className="footer__social">
          <h4>Redes</h4>

          <div className="footer__icons">
            <a href="https://instagram.com/neds_services"><FaInstagram /></a>
            <a href="https://wa.me/5516993996654"><FaWhatsapp /></a>
          
          </div>
        </div>

      </div>

      {/* LINHA */}
      <div className="footer__divider" />

      {/* BOTTOM */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()}  NEDS Services. Todos os direitos reservados.
        </p>
      </div>

    </footer>
  )
}

export default Footer
import "./styles.css"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

import { FaReact, FaDatabase } from "react-icons/fa"
import { SiTypescript, SiJavascript,  SiPython } from "react-icons/si"


function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">

        {/* AVATAR */}
        <div className="about__image">
          <div className="about__avatar-wrapper">
            <img src="/avatar.png" alt="Seu Avatar" />
          </div>
        </div>

        {/* TEXTO */}
        <div className="about__text">

          <h2>
  Quem está por trás da <span>NEDS</span>
</h2>

<p>
  Prazer, sou Gabriel Borela — desenvolvedor focado em criar experiências
  digitais modernas, rápidas e que realmente geram resultado.
</p>

<p>
  Trabalho com tecnologias atuais e design estratégico para ajudar empresas
  e profissionais a crescerem no digital, transformando ideias em produtos
  que funcionam de verdade.
</p>

          {/* SKILLS */}
          <div className="about__skills">
           <div className="about__skills">
  <span><FaReact /> React</span>
  <span><SiTypescript /> TypeScript</span>
  <span><SiJavascript /> JavaScript</span>
  <span><FaDatabase /> NoSQL</span>
  <span><SiPython /> Python</span>
</div>
          </div>

          {/* BOTÕES */}
          <div className="about__cta">

            <a href="https://instagram.com/_gabrielborela" target="_blank">
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://wa.me/5516993996654"
              target="_blank"
              className="secondary"
            >
              <FaWhatsapp /> WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About
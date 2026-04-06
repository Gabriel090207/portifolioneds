import "./styles.css"
import { useState } from "react"


import { FiMonitor, FiShoppingCart, FiSettings, FiLayout } from "react-icons/fi";
import { PiGameControllerDuotone } from "react-icons/pi"
import { FaRobot } from "react-icons/fa";

// 🔥 depois você troca as imagens
const data = [
  {
    title: "Sites",
    icon: <FiMonitor />,
    image: "/images/site.png",
    description: "Tenha um site moderno, rápido e totalmente responsivo para fortalecer sua presença digital. Transmita mais credibilidade para seus clientes e destaque sua marca no mercado. Desenvolvido com foco em performance, design e experiência do usuário. Ideal para empresas que querem crescer e gerar mais oportunidades online."
  },
  {
    title: "Landing Pages",
    icon: <FiLayout />,
    image: "/images/landing.png",
    description: "Tenha uma landing page moderna, estratégica e altamente otimizada para conversão. Desenvolvida para guiar o visitante até a ação desejada, seja gerar leads, vender produtos ou captar contatos. Utilizamos técnicas de design persuasivo, copywriting e estrutura focada em resultados. Ideal para campanhas de marketing, anúncios e negócios que querem maximizar conversões e obter mais retorno com tráfego online."
  },
  {
    title: "Sistemas",
    icon: <FiSettings />,
    image: "/images/system.png",
    description: "Desenvolva sistemas personalizados para automatizar processos, organizar informações e aumentar a eficiência do seu negócio. Criamos soluções sob medida, pensadas exatamente para a sua necessidade, eliminando tarefas manuais e reduzindo erros. Com foco em performance, segurança e escalabilidade, seu sistema cresce junto com sua empresa. Ideal para negócios que querem mais controle, produtividade e inteligência na operação."
  },
  {
    title: "Lojas Virtuais",
    icon: <FiShoppingCart />,
    image: "/images/store.png",
    description: "Crie uma loja virtual moderna, rápida e totalmente otimizada para vendas online. Desenvolvemos e-commerces com foco em experiência do usuário, facilitando a navegação e aumentando as chances de conversão. Integrações com pagamentos, envio e gestão de produtos garantem praticidade no dia a dia. Ideal para quem quer vender mais, escalar o negócio e ter presença forte no digital."
  },
  {
    title: "Bots",
    icon: <FaRobot/>,
    image: "/images/bot.png",
    description: "Automatize seu atendimento com bots inteligentes que respondem clientes de forma rápida e eficiente, 24 horas por dia. Reduza o tempo de resposta, aumente a satisfação e nunca perca uma oportunidade de venda. Nossos bots podem integrar com WhatsApp, sites e outras plataformas, adaptando-se ao seu negócio. Ideal para empresas que querem escalar atendimento sem aumentar custos."
  },
  {
  title: "Jogos",
  icon: <PiGameControllerDuotone />,
  image: "/images/games.png",
  description: "Desenvolva jogos personalizados e experiências interativas que envolvem e engajam usuários de forma única. Criamos desde projetos simples até soluções mais completas, com foco em desempenho, design e interatividade. Ideal para marcas que querem inovar, se destacar e oferecer algo diferente ao público. Perfeito para ações promocionais, produtos digitais ou entretenimento."
}
]

function Solutions() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="solutions">
      <div className="solutions__content">

        {/* HEADER */}
       <div className="solutions__header fadeUp">
  <h2>
    O que podemos <span>criar para você</span>
  </h2>

  <p>
    Soluções digitais modernas para transformar ideias em resultados reais.
  </p>
</div>

        {/* GRID PREMIUM */}
       <div className="solutions__grid fade-up fadeUp delay-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`solution-card ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <div className="solution-card__icon">{item.icon}</div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* VISUAL DINÂMICO */}
<div className="solutions__preview fadeUp delay-3">
  <div className="solutions__preview-image">
    <img src={data[active].image} alt={data[active].title} />
  </div>

  <div className="solutions__preview-content">
    <h3>{data[active].title}</h3>

    <p className="solutions__description">
      {data[active].description}
    </p>
  </div>
</div>

      </div>
    </section>
  )
}

export default Solutions
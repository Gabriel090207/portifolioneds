import "./styles.css"
import { useState, useEffect } from "react"
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiX
} from "react-icons/fi"


const projects = [
  {
  title: "Landing Page Dominando Animação",
  image: "/images/projeto1.png",
  mobileImage: "/images/projeto1mobile.png",
  link: "https://dominandoanimacao.com",
  description:
    "Landing page desenvolvida com foco em alta conversão, projetada para apresentar um sistema de rateio de ferramentas digitais premium, incluindo soluções baseadas em inteligência artificial. O projeto foi estruturado estrategicamente para destacar os benefícios do serviço, como redução de custos em comparação aos planos oficiais e acesso facilitado por meio de um sistema de multi login.\n\nA interface foi construída para conduzir o usuário de forma clara e persuasiva, utilizando uma hierarquia visual bem definida, seções organizadas e chamadas para ação (CTA) posicionadas estrategicamente. Além disso, foram aplicadas animações e transições suaves para tornar a experiência mais dinâmica e envolvente.\n\nO desenvolvimento foi realizado com HTML, CSS e JavaScript puro, garantindo alta performance, carregamento rápido e total controle sobre a estrutura e estilização da página. O projeto também segue boas práticas de responsividade, proporcionando uma experiência consistente em diferentes dispositivos.\n\nEste projeto demonstra habilidades em criação de interfaces voltadas para conversão, atenção a detalhes de UX/UI e desenvolvimento front-end otimizado.",
  tech: ["React", "CSS", "JavaScript"]
},
  {
  title: "Rota 7 Lagoas",
  image: "/images/projeto2.png",
  mobileImage: "/images/projeto2mobile.png",
  link: "https://www.rota7lagoas.com.br",
  description:
    "O Rota 7 Lagoas é um portal completo desenvolvido para centralizar e fortalecer a cultura motociclística na região de Sete Lagoas e entorno. A plataforma foi projetada para conectar motociclistas, moto clubes, estabelecimentos comerciais e organizadores de eventos em um único ambiente digital, tornando-se uma referência regional no segmento.\n\nO sistema conta com uma estrutura robusta de conteúdo, incluindo área de notícias com categorização e tags, agenda interativa de eventos, seção de dicas de pilotagem, matérias especiais com entrevistas e histórias locais, além de uma área de classificados voltada para compra, venda e divulgação de serviços do setor.\n\nTambém foram implementadas funcionalidades estratégicas como envio de eventos por formulário, listagem de parceiros comerciais, integração com WhatsApp para contato direto com anunciantes e galeria de mídia para compartilhamento de fotos e vídeos da comunidade.\n\nA arquitetura do projeto foi construída utilizando React com TypeScript no front-end, proporcionando uma interface moderna, componentizada e escalável. No back-end, foi utilizado FastAPI com Python, garantindo alta performance na construção das APIs e organização eficiente das regras de negócio. Para persistência de dados e autenticação, foi utilizado Firebase, permitindo integração em tempo real e gerenciamento simplificado dos dados.\n\nO projeto foi desenvolvido com foco em performance, escalabilidade e experiência do usuário, além de abrir possibilidades para futuras expansões como aplicativo mobile, sistema de assinaturas premium, marketplace e integração com mapas interativos.\n\nEste sistema demonstra habilidades completas em desenvolvimento full stack, incluindo criação de APIs, integração com banco de dados, construção de interfaces modernas e planejamento de produto digital com foco em crescimento e monetização.",
  tech: ["React", "TypeScript", "Firebase", "Python"]
},
  {
  title: "Fire Vendas",
  image: "/images/projeto3.png",
  link: "https://firevendas.com",
  mobileImage: "/images/projeto3mobile.png",
  description:
    "Landing page desenvolvida para um treinamento digital focado em ensinar estratégias de vendas online, com o objetivo de transformar seguidores em clientes e gerar resultados reais na internet. A página foi estruturada seguindo princípios de marketing digital e copywriting persuasivo, com foco total em conversão.\n\nO projeto apresenta uma abordagem estratégica baseada em funil de vendas, conduzindo o usuário por uma jornada clara que inclui apresentação da proposta, benefícios do treinamento, provas sociais com depoimentos e chamadas para ação (CTA) altamente visíveis. Esse tipo de estrutura é essencial em landing pages, que têm como principal objetivo converter visitantes em clientes ou leads qualificados.\n\nA interface foi construída de forma otimizada, com carregamento rápido e design direto, reduzindo distrações e aumentando a taxa de conversão. Elementos como títulos impactantes, seções bem organizadas e botões estratégicos foram utilizados para guiar o usuário até a decisão de compra.\n\nO desenvolvimento foi realizado utilizando HTML, CSS e JavaScript, garantindo total controle sobre a estrutura da página, performance e responsividade em diferentes dispositivos.\n\nEste projeto demonstra habilidades em criação de landing pages de vendas, aplicação de conceitos de marketing digital, estruturação de páginas persuasivas e desenvolvimento front-end otimizado para resultados.",
  tech: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Conecta Edital",
  image: "/images/projeto4.png",
  mobileImage: "/images/projeto4mobile.png",
  link: "https://siteconectaedital.netlify.app",
  description:
    "O Conecta Edital é uma plataforma web desenvolvida para facilitar o acompanhamento de concursos públicos, centralizando informações relevantes em um único ambiente digital. O sistema permite que usuários acompanhem editais, oportunidades e processos seletivos de forma prática, organizada e acessível.\n\nA aplicação foi projetada com foco em usabilidade, oferecendo uma navegação intuitiva e estrutura clara para facilitar a busca e visualização das informações. O objetivo é ajudar candidatos a se manterem atualizados e organizados durante sua preparação, reunindo dados importantes em um só lugar.\n\nNo front-end, o projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro, garantindo leveza, desempenho e controle total sobre a interface. Já no back-end, foi utilizado Python para a construção da lógica da aplicação e integração com serviços, enquanto o Firebase foi responsável pela persistência de dados e gerenciamento das informações em tempo real.\n\nA combinação dessas tecnologias permitiu a criação de uma solução dinâmica, capaz de armazenar, organizar e exibir dados de forma eficiente. Este projeto demonstra habilidades em desenvolvimento full stack, integração entre front-end e back-end e construção de aplicações voltadas para resolver problemas reais dos usuários.",
  tech: ["HTML", "CSS", "JavaScript", "Python", "Firebase"]
},
{
  title: "Livraria Rio Nilo",
  image: "/images/projeto5.png",
  mobileImage: "/images/projeto5mobile.png",
  link: "https://www.livrariaedistribuidorarionilo.com",
  description:
    "O projeto da Livraria Rio Nilo consiste no desenvolvimento de uma plataforma web voltada para a comercialização de livros e materiais escolares, com foco em facilitar a conexão entre escolas, alunos e responsáveis. O sistema permite a visualização de listas escolares completas, oferecendo praticidade e agilidade no processo de compra.\n\nA aplicação foi estruturada para proporcionar uma experiência simples e intuitiva, permitindo que usuários encontrem rapidamente os produtos necessários, visualizem formas de pagamento e realizem suas compras de forma segura. O projeto também contempla páginas institucionais, informações sobre garantia e orientações ao cliente, reforçando a credibilidade da marca.\n\nNo front-end, foi utilizado HTML, CSS e JavaScript para construção de uma interface responsiva, leve e otimizada para navegação em diferentes dispositivos. No back-end, foi utilizado Python para gerenciamento da lógica da aplicação e integração com serviços, enquanto o Firebase foi responsável pelo armazenamento e gerenciamento dos dados.\n\nEste projeto demonstra habilidades em desenvolvimento full stack, criação de sistemas voltados para e-commerce, integração entre front-end e back-end e construção de soluções digitais para negócios reais.",
  tech: ["HTML", "CSS", "JavaScript", "Python", "Firebase"]
},
{
  title: "Valle das Flores",
  image: "/images/projeto6.png",
  mobileImage: "/images/projeto6mobile.png",
  link: "https://floriculturavalledasflores.com.br/",
  description:
    "O Valle das Flores é uma plataforma web desenvolvida para uma floricultura online, com foco na comercialização de arranjos, buquês e presentes personalizados para diversas ocasiões. O sistema foi projetado para proporcionar uma experiência prática e emocional ao usuário, permitindo a escolha de produtos de forma simples, rápida e intuitiva.\n\nA aplicação apresenta uma estrutura organizada de produtos, incluindo categorias como buquês, cestas, flores em vaso e combinações com chocolates e outros itens, facilitando a navegação e a tomada de decisão do cliente. O objetivo é transformar o processo de compra em uma experiência agradável, alinhada ao propósito da marca de transmitir sentimentos através de flores e presentes.\n\nNo front-end, foi utilizado React com TypeScript (TSX), permitindo a construção de uma interface moderna, componentizada e escalável, com maior segurança na tipagem dos dados. No back-end, foi utilizado Python para gerenciamento da lógica da aplicação e integração com serviços, enquanto o Firebase foi responsável pela persistência e gerenciamento dos dados em tempo real.\n\nA combinação dessas tecnologias possibilitou a criação de uma aplicação dinâmica e eficiente, garantindo boa performance, organização do código e facilidade de manutenção. Este projeto demonstra habilidades em desenvolvimento full stack, construção de e-commerces, integração entre sistemas e criação de experiências digitais voltadas para conversão.",
  tech: ["React", "TypeScript", "Python", "Firebase"]
},
{
  title: "Financeira Nova Era",
  image: "/images/projeto7.png",
  mobileImage: "/images/projeto7mobile.png",
  link: "https://financeiranovaera.netlify.app/",
  description:
    "A Financeira Nova Era é uma landing page desenvolvida para apresentar serviços financeiros, com foco na captação de clientes interessados em crédito, financiamentos e soluções financeiras personalizadas. O projeto foi estruturado com base em estratégias de marketing digital, visando gerar confiança e conversão de visitantes em leads qualificados.\n\nA página foi organizada de forma estratégica, destacando benefícios, serviços oferecidos e chamadas para ação (CTA) bem posicionadas, incentivando o contato direto com a empresa. Elementos como seções explicativas, apresentação de soluções e abordagem clara dos serviços contribuem para uma experiência objetiva e persuasiva.\n\nNo front-end, foi utilizado HTML, CSS e JavaScript para construção de uma interface responsiva, moderna e otimizada para diferentes dispositivos. No back-end, foi utilizado Python para processamento de dados e integração com serviços, enquanto o Firebase foi responsável pelo armazenamento e gerenciamento das informações.\n\nEste projeto demonstra habilidades em desenvolvimento full stack, criação de landing pages voltadas para conversão, aplicação de conceitos de UX/UI e desenvolvimento de soluções digitais para o setor financeiro.",
  tech: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Digital Inf",
  image: "/images/projeto8.png",
  link: "https://digitalinf.netlify.app/",
  mobileImage: "/images/projeto8mobile.png",
  description:
    "O Digital Inf é uma landing page desenvolvida para apresentar serviços digitais, com foco em posicionamento online, desenvolvimento de sites e soluções tecnológicas para empresas. O projeto foi estruturado com base em estratégias de marketing digital, visando transmitir profissionalismo, gerar autoridade e converter visitantes em clientes.\n\nA página foi organizada de forma estratégica, destacando os serviços oferecidos, benefícios para o cliente e chamadas para ação (CTA) bem posicionadas, incentivando o contato direto. A estrutura segue princípios de copywriting e experiência do usuário, conduzindo o visitante por uma jornada clara e objetiva.\n\nNo front-end, o desenvolvimento foi realizado utilizando HTML, CSS e JavaScript, garantindo uma interface leve, responsiva e com bom desempenho em diferentes dispositivos. No back-end, foi utilizado Python para processamento de dados e integração com serviços, enquanto o Firebase foi responsável pelo gerenciamento e persistência das informações.\n\nEste projeto demonstra habilidades em desenvolvimento full stack, criação de landing pages institucionais, aplicação de conceitos de UX/UI e desenvolvimento de soluções digitais voltadas para negócios e presença online.",
  tech: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Salão Exemplo",
  image: "/images/projeto9.png",
  link: "https://exemplosalao.netlify.app/",
  mobileImage: "/images/projeto9mobile.png",
  description:
    "O projeto Salão Exemplo consiste no desenvolvimento de uma landing page institucional voltada para apresentação de serviços de beleza, como cortes de cabelo, tratamentos estéticos e atendimento personalizado. A proposta do site é destacar os serviços oferecidos, fortalecer a presença digital do negócio e facilitar o contato com clientes.\n\nA interface foi construída com foco em organização e clareza, apresentando seções estratégicas como serviços, informações do estabelecimento e chamadas para ação (CTA) que incentivam o agendamento ou contato direto. O design busca transmitir profissionalismo e confiança, elementos essenciais para negócios do segmento de estética.\n\nNo front-end, o desenvolvimento foi realizado utilizando HTML, CSS e JavaScript, garantindo uma aplicação leve, responsiva e otimizada para diferentes dispositivos. A estrutura simples e eficiente permite fácil manutenção e adaptação conforme as necessidades do cliente.\n\nEste projeto demonstra habilidades em criação de sites institucionais, desenvolvimento de interfaces responsivas, organização de conteúdo e construção de soluções digitais para pequenos negócios.",
  tech: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Alpha Salão de Beleza",
  image: "/images/projeto10.png",
  mobileImage: "/images/projeto10mobile.png",
  link: "https://alpha-salaodebeleza.netlify.app/",
  description:
    "O Alpha Salão de Beleza é um site institucional desenvolvido para apresentar serviços de estética e cuidados pessoais, com foco em fortalecer a presença digital do negócio e atrair novos clientes. O projeto foi pensado para transmitir profissionalismo, organização e confiança, elementos essenciais para o segmento de beleza.\n\nA interface foi estruturada de forma clara e estratégica, destacando os serviços oferecidos, informações do salão e chamadas para ação (CTA) que incentivam o contato e agendamento. O design busca valorizar a identidade visual do negócio, proporcionando uma navegação intuitiva e agradável para o usuário.\n\nNo front-end, foi utilizado HTML, CSS e JavaScript para construção de uma aplicação leve, responsiva e otimizada para diferentes dispositivos. No back-end, foi utilizado Python para gerenciamento da lógica da aplicação, enquanto o Firebase foi responsável pela persistência e organização dos dados.\n\nEste projeto demonstra habilidades em desenvolvimento full stack, criação de sites institucionais modernos, aplicação de boas práticas de UX/UI e desenvolvimento de soluções digitais para pequenos negócios.",
  tech: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Loja Virtual Agro",
  image: "/images/projeto11.png",
  mobileImage: "/images/projeto11mobile.png",
  link: "https://lojavirtualagro.netlify.app/",
  description:
    "A Loja Virtual Agro é uma plataforma de e-commerce desenvolvida para o segmento agrícola, com foco na comercialização de produtos e insumos voltados ao agronegócio. O projeto foi criado com o objetivo de facilitar o acesso a produtos essenciais para produtores rurais, oferecendo praticidade e organização em um ambiente digital.\n\nA aplicação apresenta uma estrutura de catálogo de produtos organizada, permitindo a navegação por categorias e facilitando a busca por itens específicos. A interface foi pensada para ser simples e funcional, proporcionando uma experiência intuitiva mesmo para usuários com menor familiaridade com tecnologia.\n\nNo front-end, foi utilizado HTML, CSS e JavaScript para construção de uma interface responsiva e otimizada para diferentes dispositivos. No back-end, foi utilizado Python para gerenciamento da lógica da aplicação e integração com serviços, enquanto o Firebase foi responsável pelo armazenamento e gerenciamento dos dados.\n\nEste projeto demonstra habilidades em desenvolvimento full stack, construção de plataformas de e-commerce, organização de catálogos de produtos e criação de soluções digitais voltadas para nichos específicos como o agronegócio.",
  tech: ["HTML", "CSS", "JavaScript",]
},
{
  title: "Cardápio Alpha",
  image: "/images/projeto12.png",
  link: "https://cardapioalpha.netlify.app/",
  mobileImage: "/images/projeto12mobile.png",
  description:
    "O Cardápio Alpha é uma aplicação web desenvolvida para apresentar produtos e serviços de forma digital, substituindo cardápios físicos e proporcionando mais praticidade para restaurantes e clientes. O sistema permite a visualização organizada de itens, categorias e informações relevantes de maneira rápida e intuitiva.\n\nA interface foi projetada com foco em usabilidade, permitindo que o usuário navegue facilmente entre as categorias e visualize os produtos de forma clara, contribuindo para uma experiência fluida e moderna. Esse tipo de solução é amplamente utilizado em estabelecimentos que buscam digitalizar seus processos e melhorar o atendimento ao cliente.\n\nNo front-end, o projeto foi desenvolvido utilizando HTML, CSS e JavaScript, garantindo uma aplicação leve, responsiva e otimizada para diferentes dispositivos, especialmente smartphones. A estrutura foi pensada para facilitar a adaptação para diferentes tipos de negócio, como restaurantes, lanchonetes e cafeterias.\n\nEste projeto demonstra habilidades em desenvolvimento de interfaces interativas, organização de informações e criação de soluções digitais voltadas para o setor gastronômico.",
  tech: ["HTML", "CSS", "JavaScript"]
},
{
  title: "Projeto Pets",
  image: "/images/projeto13.png",
  link: "https://projetopets.netlify.app/",
  mobileImage: "/images/projeto13mobile.png",
  description:
    "O Projeto Pets é uma aplicação web desenvolvida para apresentar serviços e produtos voltados ao cuidado de animais de estimação, como pet shops, clínicas veterinárias e serviços especializados. O sistema foi projetado para fortalecer a presença digital do negócio e facilitar o acesso dos clientes às informações e serviços oferecidos.\n\nA interface foi estruturada de forma clara e intuitiva, destacando serviços, produtos e informações relevantes, além de incluir chamadas para ação (CTA) que incentivam o contato e a interação com o estabelecimento. O design busca transmitir confiança, cuidado e proximidade com o público, aspectos essenciais no segmento pet.\n\nO desenvolvimento foi realizado utilizando HTML, CSS e JavaScript, garantindo uma aplicação leve, responsiva e otimizada para diferentes dispositivos. A estrutura do projeto permite fácil adaptação para diferentes tipos de negócio dentro do mercado pet.\n\nEste projeto demonstra habilidades em criação de sites institucionais, desenvolvimento de interfaces responsivas e construção de soluções digitais voltadas para negócios locais e nichos específicos.",
  tech: ["HTML", "CSS", "JavaScript"]
}
]

function Projects() {
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)


  const handleClose = () => {
  setClosing(true)

  setTimeout(() => {
    setOpen(false)
    setClosing(false)
  }, 300)
}

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }

  /* 🔥 TRAVA SCROLL DO BODY */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])


  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600)
  }

  window.addEventListener("resize", handleResize)

  return () => window.removeEventListener("resize", handleResize)
}, [])

  return (
  <section id="projects" className="projects">
      <div className="projects__content">

       <div className="projects__header fadeUp">
          <h2>
            Confira Alguns de <span>Nossos Projetos</span>
          </h2>
          <p>
            Projetos desenvolvidos com foco em performance, design moderno
            e resultados reais para nossos clientes.
          </p>
        </div>

       <div className="carousel fadeUp delay-1">

          <button className="nav left" onClick={prev}>
            <FiArrowLeft />
          </button>

          <div className="carousel__track">
            {projects.map((project, index) => {
              const total = projects.length
              let offset = index - current

              if (offset > total / 2) offset -= total
              if (offset < -total / 2) offset += total

              // 🔥 só renderiza os 3 principais
if (!isMobile && Math.abs(offset) > 1) return null

return (
  <div
    key={index}
    className="card"
    style={{
     transform: `
translateX(${isMobile ? offset * 100 + "%" : offset * 310 + "px"})
  scale(${offset === 0 ? 1 : 0.85})
`,
      opacity: isMobile ? (offset === 0 ? 1 : 0) : (offset === 0 ? 1 : 0.4),
pointerEvents: isMobile ? (offset === 0 ? "auto" : "none") : "auto",
      zIndex: offset === 0 ? 2 : 1
    }}
  >
                  <div className="image-wrapper">
                   <picture>
  <source
    media="(max-width: 600px)"
    srcSet={project.mobileImage}
  />
  <img
    src={project.image}
    alt={project.title}
  />
</picture>
                  </div>
                </div>
              )
            })}
          </div>

          <button className="nav right" onClick={next}>
            <FiArrowRight />
          </button>

        </div>

       <div className="projects__cta fadeUp delay-2">
          <button onClick={() => setOpen(true)}>
            Ver detalhes
          </button>

          <a href={projects[current].link} target="_blank">
            Ver site <FiExternalLink />
          </a>
        </div>

      </div>

      {/* 🔥 MODAL */}
      {open && (
        <div className={`modal ${closing ? "closing" : ""}`}>

          {/* FECHAR AO CLICAR FORA */}
          <div
            className="modal__overlay"
            onClick={handleClose}
          />

          <div className="modal__content">

            {/* BOTÃO X */}
            <button className="close" onClick={handleClose}>
              <FiX />
            </button>

           <div className="modal__header">
  <h3>{projects[current].title}</h3>
  <span className="modal__subtitle">Detalhes do projeto</span>
</div>

<div className="modal__section">
  <h4>Sobre o projeto</h4>
  <p>{projects[current].description}</p>
</div>

<div className="modal__footer">
  <div>
    <h4>Tecnologias utilizadas</h4>
    <div className="tech">
      {projects[current].tech.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  </div>

  <a
    href={projects[current].link}
    target="_blank"
    rel="noreferrer"
    className="modal__cta"
  >
    Ver projeto completo <FiExternalLink />
  </a>
</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
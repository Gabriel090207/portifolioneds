import "./styles.css"
import { FaWhatsapp } from "react-icons/fa"
import { FiChevronDown, FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi"
import { useState } from "react"

type ToastType = "success" | "error"

function CTA() {
  const [tipoProjeto, setTipoProjeto] = useState("")

  const [toastOpen, setToastOpen] = useState(false)
  const [toastType, setToastType] = useState<ToastType>("success")
  const [toastMessage, setToastMessage] = useState("")

  const showToast = (type: ToastType, message: string) => {
    setToastType(type)
    setToastMessage(message)
    setToastOpen(true)

    setTimeout(() => setToastOpen(false), 4500)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    const nome = (form[0] as HTMLInputElement).value
    const email = (form[1] as HTMLInputElement).value
    const telefone = (form[2] as HTMLInputElement).value
    const tipo = (form[3] as HTMLSelectElement).value

    let index = 4

    let outro = ""
    if (tipo === "outro") {
      outro = (form[index] as HTMLInputElement).value
      index++
    }

    const escopo = (form[index] as HTMLTextAreaElement).value
    index++

    const cores = (form[index] as HTMLInputElement).value
    index++

    const objetivo = (form[index] as HTMLTextAreaElement).value

   try {
  const mensagem = `
*NOVO LEAD PELO SITE*

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Tipo de Projeto: ${tipo === "outro" ? outro : tipo}

Escopo:
${escopo}

Cores da Marca:
${cores || "Não informado"}

Objetivo:
${objetivo}
`

  const mensagemFormatada = encodeURIComponent(mensagem)

  const numero = "5516993996654"

  const url = `https://wa.me/${numero}?text=${mensagemFormatada}`

  window.open(url, "_blank")

  showToast("success", "Redirecionando para o WhatsApp...")

  form.reset()
  setTipoProjeto("")

} catch (error) {
  console.error(error)
  showToast("error", "Erro ao gerar mensagem")
}

  }

  return (
   <section id="contact" className="cta">
      <div className="cta__content">

        <h2 className="fadeUp">
          Vamos tirar sua ideia <span>do papel</span>
        </h2>

       <p className="fadeUp delay-1">
          Me conte um pouco sobre seu projeto e eu entro em contato com você.
        </p>

        <form className="cta__form fadeUp delay-2" onSubmit={handleSubmit}>

          <input type="text" placeholder="Nome do responsável" required />
          <input type="email" placeholder="Seu e-mail" required />
          <input type="tel" placeholder="Telefone (WhatsApp)" required />

          <div className="cta__select">
            <select
              required
              value={tipoProjeto}
              onChange={(e) => setTipoProjeto(e.target.value)}
            >
              <option value="">Tipo de projeto</option>
              <option value="site">Site</option>
              <option value="landing">Landing Page</option>
              <option value="loja">Loja Virtual</option>
              <option value="sistema">Sistema</option>
              <option value="bot">Bot de Atendimento</option>
              <option value="jogo">Jogo</option>
              <option value="outro">Outro</option>
            </select>

            <span className="cta__select-icon">
              <FiChevronDown />
            </span>
          </div>

          {tipoProjeto === "outro" && (
            <input
              type="text"
              placeholder="Descreva o tipo de projeto"
              required
            />
          )}

          <textarea
            placeholder="Descreva o escopo do projeto"
            rows={4}
            required
          />

          <input
            type="text"
            placeholder="Cores principais da marca"
          />

          <textarea
            placeholder="Objetivo do projeto"
            rows={3}
            required
          />

          <button type="submit">
            Enviar formulário
          </button>

        </form>

        <div className="cta__divider">ou</div>

       <a
  href="https://wa.me/5516993996654"
  target="_blank"
  className="fadeUp delay-3"
>
          <FaWhatsapp /> Falar direto no WhatsApp
        </a>

      </div>

      {/* TOAST */}
      <div className={`adminToast adminToast--${toastType} ${toastOpen ? "show" : ""}`}>

        <div className="adminToast__icon">
          {toastType === "success"
            ? <FiCheckCircle size={18} />
            : <FiAlertCircle size={18} />
          }
        </div>

        <div className="adminToast__content">
          <strong>
            {toastType === "success" ? "Sucesso" : "Erro"}
          </strong>
          <span>{toastMessage}</span>
        </div>

        <button
          className="adminToast__close"
          onClick={() => setToastOpen(false)}
        >
          <FiX size={18} />
        </button>

      </div>

    </section>
  )
}

export default CTA
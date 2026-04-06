import "./styles.css"
import { FaWhatsapp } from "react-icons/fa"

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5599999999999"
      target="_blank"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton
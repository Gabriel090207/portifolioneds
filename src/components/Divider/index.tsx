import "./styles.css"
import logo from "./logo.png"

function Divider() {
  return (
    <div className="divider">
      <div className="divider__line" />

      <div className="divider__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="divider__line" />
    </div>
  )
}

export default Divider
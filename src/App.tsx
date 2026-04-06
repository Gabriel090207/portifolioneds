import Home from "./pages/Home"
import WhatsappButton from "./components/WhatsappButton"
import { useScrollAnimation } from "./hooks/useScrollAnimation"
import { useEffect } from "react"

function App() {
  useScrollAnimation()

  // 🔥 desativa scroll automático do browser
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  // 🔥 restaura posição
  useEffect(() => {
  const savedScroll = sessionStorage.getItem("scrollY")

  if (!savedScroll) return

  setTimeout(() => {
    window.scrollTo(0, parseInt(savedScroll))
  }, 200)
}, [])

  // 🔥 salva scroll
useEffect(() => {
  const saveScroll = () => {
    sessionStorage.setItem("scrollY", window.scrollY.toString())
  }

  window.addEventListener("beforeunload", saveScroll)

  return () => window.removeEventListener("beforeunload", saveScroll)
}, [])

  return (
    <>
      <Home />
      <WhatsappButton />
    </>
  )
}

export default App
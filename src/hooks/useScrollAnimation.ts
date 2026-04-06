import { useEffect } from "react"

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    const elements = document.querySelectorAll(".fadeUp")

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
import "./styles.css"

const testimonials = [
  "/testimonials/wpp1.png",
  "/testimonials/wpp2.png",
  "/testimonials/wpp3.png",
  "/testimonials/wpp4.png",
  "/testimonials/wpp5.png",
  "/testimonials/wpp6.png",
  "/testimonials/wpp7.png",
  

]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__content">

        {/* HEADER */}
       <div className="testimonials__header fadeUp">
          <h2>
            O que nossos <span>clientes dizem</span>
          </h2>
          <p>
            Conversas e feedbacks reais de quem confiou no nosso trabalho.
          </p>
        </div>

        {/* SLIDER */}
       <div className="testimonials__slider fadeUp delay-1">
          <div className="testimonials__track">

            {[...testimonials, ...testimonials].map((img, index) => (
              <div key={index} className="testimonial-phone">

                <img src={img} alt="Depoimento WhatsApp" />

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
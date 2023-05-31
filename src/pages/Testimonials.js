import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
function Testimonials() {
  const reviews = [
    {
      foto: "https://lh3.googleusercontent.com/a/AGNmyxY8BCS2KO5MBHszvRXWe_oL4UAeIcrPrP0FH_oS=w60-h60-p-rp-mo-br100",
      cliente: "Gabriel Goes",
      id: 4,
      comentario:
        " Excelente atendimento! Profissionalismo absoluto! Pensamos juntos como seria o meu tratamento e satisfação plena com sorriso perfeito novamente! Obrigado equipe CK Odontologia!",
    },
    {
      foto: "https://lh3.googleusercontent.com/a-/ACB-R5Rc__nuz4EktFrToOc1UneNoz3ZQH6uk6EdHnf6qg=w60-h60-p-rp-mo-ba3-br100",
      cliente: "Alexandre Dionizio",
      id: 5,
      comentario: " Excelente atendimento da Isabel e da Dra. Karina.",
    },
    {
      foto: "https://lh3.googleusercontent.com/a/AGNmyxaCXSN6p6JjkoP5Ur4v2Qz5mf24ZtPeMZZQic-u=w60-h60-p-rp-mo-br100",
      cliente: "Paolo Bruzaferro Monti",
      id: 6,
      comentario:
        " Tinha pânico de dentista, mas desta vez foi super tranquilo.  Parabéns,  profissional, ética e com paciência. Tudo bem explicado desde o início.  Tudo que foi proposto foi cumprido.",
    },
  ];
  return (
    <div className="lg:pb-10 lg:h-auto  bg-[#e4e2f9]">
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center p-10"
      >
        <p className="lg:text-5xl text-2xl font-bold Lato  text-slate-900">
          Comentários de quem já nos conhece
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            className="bg-white overflow-x-hidden mx-2 my-2 lg:my-0 flex relative flex-col items-center rounded-xl p-2"
            key={review.id}
          >
            <img src={review.foto} alt="cliente" />
            <FaQuoteLeft className="absolute left-6 top-[40px] text-slate-900 text-2xl" />
            <div className="flex flex-col items-center">
              <p className="text-black text-lg">{review.cliente}</p>
              <div className="flex flex-row">
                {[...Array(5)].map((_, index) => (
                  <p key={index}>
                    <AiFillStar className="text-yellow-500" />
                  </p>
                ))}
              </div>
            </div>
            <p className="text-black text-lg font-bodoni serif lg:text-xl text-center">
              {review.comentario}
            </p>
          </div>
        ))}
      </div>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center lg:mt-[40px] lg:h-[160px] w-full flex flex-col items-center"
      >
        <p className="lg:text-4xl  text-xl pt-4 pb-2 font-extrabold text-slate-900">
          A nossa missão é fazer você sorrir
        </p>
        <p className="lg:text-2xl pb-4 lg:p-0 text-lg text-slate-950 font-mono lg:max-w-[1050px] ">
          Somos uma clínica odontológica dedicada a proporcionar um sorriso
          saudável e bonito para nossos pacientes. Com tratamentos
          personalizados e atendimento de qualidade, nossa missão é transformar
          o seu sorriso em uma fonte de confiança e satisfação.
        </p>
      </motion.div>
    </div>
  );
}

export default Testimonials;

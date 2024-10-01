"use client";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiSendPlaneFill, RiWhatsappFill } from "react-icons/ri";
import { sendEmail } from "../lib/actions";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(email);
  };
  return (
    <footer className="flex flex-col w-full py-5 items-center gap-5 text-white text-[10px] bg-slate-900">
      <div className="flex flex-wrap items-center justify-around px-4 sm:px-10 w-full h-full">
        <div className="flex 1500px:flex-col justify-between ml-6 sm:ml-0 gap-10 md:gap-20 h-full py-10">
          <div>
            <h1 className="font-bold text-2xl">#BeFirst</h1>
            <h2 className="text-zinc-400 font-semibold">
              Uma nova experiência de aprendizado
            </h2>
          </div>
          <div>
            <h1 className="text-base max-w-52">
              Inscreva-se para receber nossas novidades{" "}
              <span className="text-zinc-400">Exclusivas</span>
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-between mt-2 px-2 w-40 sm:w-64 h-8 rounded-md border-[1px] border-zinc-400"
            >
              <input
                name="email"
                type="email"
                required
                placeholder="amadio@gmail.com"
                className="font-semibold text-zinc-400 w-full bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado com o valor do e-mail
              />
              <button
                type="submit"
                className="w-6 h-5 rounded-md bg-zinc-600 grid place-items-center"
              >
                <RiSendPlaneFill />
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 ml-6 sm:ml-0 gap-10 text-zinc-400 text-xs font-semibold">
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Nossos Clubes</h1>
            <a href="https://docs.google.com/document/d/1qA9XznSJ19ZbvLNUNBr5gSLy1m5EgQzSS5JSX6nu540/edit#heading=h.hd4qvqb47b64">
              Xadrez
            </a>
            <a href="https://docs.google.com/document/d/1wvvaOjdhRQe2oc777VRj50-epKWT26R_odWXqICL0B8/edit#heading=h.q42vauk3ctii">
              Astronomia
            </a>
            <a href="https://docs.google.com/document/d/1YbHhOME7UjzixuG98yQNAadB20uaDUdc9YYVnu1-s44/edit">
              Olimpiada
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Ideais</h1>
            <p>Porque fazemos isso?</p>
            <p>Qual nosso objetivo?</p>
            <p>Para quem nosso projeto se destina?</p>
            <p>Saiba Mais</p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Junte-se a nós</h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSctxl4Abx6iUCjJDdk_BEF13UQRzpfaMcTZtbkJ5HEr4H9NwQ/viewform">
              Seja um Membro
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScoySKjeSp8SGTowforrI8qmiLtfv1bsSJdpyVq7IYn_etBqQ/viewform">
              Seja um Colaborador
            </a>
            <a href="">Seja um Patrocinador</a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Ajuda</h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgyT3LxXBS9waa9v5Z74m8kRSDm2vgFYYt-Xgb0tKU_xsilw/viewform">
              Deixe seu Feedback
            </a>
            <a href="">Contato com suporte</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgyT3LxXBS9waa9v5Z74m8kRSDm2vgFYYt-Xgb0tKU_xsilw/viewform">
              Ouvidoria
            </a>
          </div>
        </div>
      </div>
      <span className="w-full h-[1px] bg-zinc-600"></span>
      <div className="w-full flex-wrap flex items-center justify-center gap-5 px-8 md:px-28 lg:justify-between 2xl:px-60">
        <div className="flex items-center justify-center gap-1">
          <div className="border-[1px] border-white  size-5 rounded-full grid place-items-center">
            C
          </div>
          <div>Todos os direitos reservados para BeFirst</div>
        </div>
        <div className="flex gap-5 justify-center">
          <a href="https://www.instagram.com/clubesifal.first/">
            <PiInstagramLogoFill size={30} />
          </a>
          <a href="">
            <RiWhatsappFill size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

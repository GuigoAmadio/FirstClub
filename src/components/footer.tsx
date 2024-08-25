import {
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiTiktokLogoFill,
} from "react-icons/pi";
import { RiSendPlaneFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
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
            <div
              className="flex items-center justify-between 
              mt-2 px-2 w-40 sm:w-64 h-8 rounded-md border-[1px] border-zinc-400"
            >
              <p className="font-semibold text-zinc-400">amadio@gmail.com</p>
              <div className="w-6 h-5 rounded-md bg-zinc-600 grid place-items-center">
                <RiSendPlaneFill size={15} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 ml-6 sm:ml-0 gap-10 text-zinc-400 text-xs font-semibold">
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Nossos Clubes</h1>
            <p>Xadrez</p>
            <p>Astronomia</p>
            <p>Olimpiada</p>
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
            <p>Seja um Membro</p>
            <p>Seja um Patronicanor</p>
            <p>Seja um Cooperador</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Ajuda</h1>
            <p>Reclamações </p>
            <p>Perguntas Frequentes</p>
            <p>Contato com suporte</p>
            <p>Ouvidoria</p>
          </div>
        </div>
      </div>
      <span className="w-full h-[1px] bg-zinc-600"></span>
      <div className="w-full flex-wrap flex items-center justify-center gap-5 px-8 md:px-28 lg:justify-between 2xl:px-60">
        <div className="flex gap-5 justify-center">
          <PiInstagramLogoFill size={30} />
          <PiLinkedinLogoFill size={30} />
          <PiTiktokLogoFill size={30} color="white" />
          <RiWhatsappFill size={30} />
        </div>
        <div className="flex gap-10">
          <p>Termos de Serviço </p>
          <p>Segurança</p>
          <p>Privacidade</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="border-[1px] border-white  size-5 rounded-full grid place-items-center">
            C
          </div>
          <div>Todos os direitos reservados para BeFirst</div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useSectionInView } from "@/src/lib/hooks";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Calendario() {
  const { ref } = useSectionInView("Calendario Olimpico");

  return (
    <section
      ref={ref}
      id="Calendario Olimpico"
      className="flex flex-col items-center mt-20 gap-5 scroll-mt-32 mb-20"
    >
      <h1 className="text-center text-5xl font-extrabold">
        Escolha o seu <span className="text-blue-900">Clube</span>
        <br />
        Receba um <span className="text-blue-900">Calendario Olimpico</span>
      </h1>
      <p className="text-center text-2xl font-thin">
        Junte-se a mais de 300 firsters do Instituto Federal de Alagoas.
        <br />
        Vamos desbravar o mundo juntos
      </p>
      <button className="flex items-center justify-evenly px-5 w-40 h-8 bg-blue-950 text-white rounded-full">
        <p className="pb-1">Inscreva-se</p> <BsArrowRight />
      </button>
    </section>
  );
}

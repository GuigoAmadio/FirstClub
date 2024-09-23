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
      <h1 className="text-center text-base sm:text-2xl md:text-4xl 2xl:text-5xl font-extrabold">
        Escolha o seu <span className="text-blue-900">Clube</span>
        <br />
        Receba um <span className="text-blue-900">Calendario Olimpico</span>
      </h1>
      <p className="text-center text-xs sm:text-base md:text-2xl font-thin">
        Junte-se a mais de 300 firsters do Instituto Federal de Alagoas.
        <br />
        Vamos desbravar o mundo juntos
      </p>
      <a
        href="https://docs.google.com/document/d/1YbHhOME7UjzixuG98yQNAadB20uaDUdc9YYVnu1-s44/edit"
        className="flex items-center justify-evenly px-5 w-40 h-8 bg-blue-950 text-white rounded-full
      transition duration-300 hover:scale-105"
      >
        <p className="pb-1 ">Inscreva-se</p> <BsArrowRight />
      </a>
    </section>
  );
}

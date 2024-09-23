"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import chess from "@/public/chess.svg";
import astronaut from "@/public/astronaut.svg";
import medal from "@/public/medal.svg";

import { useSectionInView } from "@/src/lib/hooks";
import { BiChevronDown } from "react-icons/bi";

export default function Hero() {
  const { ref } = useSectionInView("Projeto First", 0.5);

  return (
    <section
      ref={ref}
      id="Projeto First"
      className="relative flex flex-col w-screen h-screen 1800px:h-[1000px] items-center justify-center gap-5 pt-48 mb-20"
    >
      <div className="bg-[#7063d7] absolute top-[22rem] -z-10 right-[48rem] h-[15rem] w-[15rem] rounded-full blur-[10rem] sm:w-[20rem] dark:bg-[#946263]"></div>
      <div className="bg-[#214b97] absolute top-[22rem] -z-10 right-[23rem] h-[15rem] w-[15rem] rounded-full blur-[10rem] sm:w-[20rem] dark:bg-[#676394]"></div>
      <div className="flex gap-10 md:gap-28">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Image src={chess} alt="sla" className="size-10 md:size-20"></Image>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image
            src={astronaut}
            alt="sla"
            className="size-10 md:size-20"
          ></Image>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="grid place-items-center"
        >
          <Image src={medal} alt="sla" className="size-10 md:size-20"></Image>
        </motion.div>
      </div>
      <h1 className="text-gradient font-bungee text-4xl md:text-6xl">
        Be #F1rst1
      </h1>
      <h2 className="text-gradient font-alfa text-2xl md:text-4xl text-center">
        Um clube. Três grandes
        <br /> projetos.
      </h2>
      <div className="flex flex-col items-center gap-5 mt-5 md:mt-10">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSctxl4Abx6iUCjJDdk_BEF13UQRzpfaMcTZtbkJ5HEr4H9NwQ/viewform"
          className="w-auto h-auto bg-white rounded-xl text-black font-bold px-4 py-2
        text-xs md:text-sm
        transition duration-300 hover:scale-105"
        >
          Torne-se um firster
        </a>
        <div className="flex flex-col items-center">
          <p>Saiba mais</p>
          <BiChevronDown />
        </div>
      </div>
    </section>
  );
}

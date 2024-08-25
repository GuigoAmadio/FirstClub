"use client";
import React from "react";
import Image from "next/image";
import chess from "@/public/chess.svg";
import astronaut from "@/public/astronaut.svg";
import medal from "@/public/medal.svg";

export default function HeroAbout() {
  return (
    <section className="mt-40 flex flex-col items-start w-screen ml-40 gap-8">
      <div className="flex gap-44">
        <div>
          <Image src={chess} alt="sla"></Image>
        </div>
        <div>
          <Image src={astronaut} alt="sla"></Image>
        </div>
        <div className="grid place-items-center">
          <Image src={medal} alt="sla"></Image>
        </div>
      </div>
      <h1 className="font-bungee text-gradient text-7xl">Quem Somos?</h1>
    </section>
  );
}

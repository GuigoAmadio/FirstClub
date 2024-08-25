"use client";
import React from "react";
import Image from "next/image";
import chess from "@/public/chess.svg";
import astronaut from "@/public/astronaut.svg";
import medal from "@/public/medal.svg";

export default function HeroAbout() {
  return (
    <section className="mt-40 flex flex-col items-start w-screen pl-8 sm:pl-20 gap-8 1800px:items-center 1800px:pl-0">
      <div className="flex gap-10 lg:gap-28 2xl:gap-44">
        <div>
          <Image
            src={chess}
            alt="sla"
            className="size-10 md:size-12 lg:size-14 2xl:size-20"
          ></Image>
        </div>
        <div>
          <Image
            src={astronaut}
            alt="sla"
            className="size-10 md:size-12 lg:size-14 2xl:size-20"
          ></Image>
        </div>
        <div className="grid place-items-center">
          <Image
            src={medal}
            alt="sla"
            className="size-10 md:size-12 lg:size-14 2xl:size-20"
          ></Image>
        </div>
      </div>
      <h1 className="font-bungee text-gradient text-4xl lg:text-5xl 2xl:text-7xl">
        Quem Somos?
      </h1>
    </section>
  );
}

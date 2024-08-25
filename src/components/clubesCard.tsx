"use client";
import React from "react";
import { clubCardsData } from "@/src/lib/data";
import { Card } from "./card";
import { useSectionInView } from "@/src/lib/hooks";

export default function ClubesCards() {
  const { ref } = useSectionInView("Clubes");

  return (
    <section
      ref={ref}
      id="Clubes"
      className="flex flex-wrap justify-center items-center gap-10 scroll-mt-32 mt-20"
    >
      {clubCardsData.map((card, index) => (
        <Card key={index} {...card} isMiddle={index} />
      ))}
    </section>
  );
}

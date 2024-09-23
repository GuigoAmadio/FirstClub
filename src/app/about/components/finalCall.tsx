"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useActiveSectionContext } from "@/src/context/active-section-content";

export default function FinalCall() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const router = useRouter();

  const handleClick = () => {
    setActiveSection("Projeto First");
    setTimeOfLastClick(Date.now());
    router.push("/#Projeto First");
    setTimeout(() => {
      const element = document.getElementById("#Pojeto First".substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="my-40">
      <button
        onClick={handleClick}
        className="grid place-items-center w-60 h-12 finalButton rounded-full"
      >
        Voltar a Pagina Principal
      </button>
    </div>
  );
}

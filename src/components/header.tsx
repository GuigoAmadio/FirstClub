"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/src/lib/data";
import { useActiveSectionContext } from "@/src/context/active-section-content";
import { useRouter } from "next/navigation";

type names = "Projeto First" | "Calendario Olimpico" | "Clubes" | "Sobre nos" | "Login";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const router = useRouter();

  const handleClick = (name: names, hash: string) => {
    if (name === "Sobre nos") {
      setActiveSection(name);
      setTimeOfLastClick(Date.now());
      router.push("/about");
    } else {
      router.push(`/${hash}`);
      setActiveSection(name);
      setTimeOfLastClick(Date.now());

      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  return (
    <header
      className="z-40 fixed w-full h-auto flex justify-around items-center bg-slate-950 
    dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 font-inter"
    >
      <ul className="flex flex-wrap items-center justify-center p-6 gap-3 md:px-10 545px:gap-5 545px:px-18 580px:px-20 695px:px-32">
        {links.map((link) => (
          <motion.li
            className="relative"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className={clsx(
                "font-inter py-2 px-4 hover:text-gray-400 transition duration-200 dark:text-gray-500 dark:hover:text-gray-300",
                {
                  "text-gray-950 dark:text-gray-200":
                    activeSection === link.name,
                }
              )}
              href={link.hash}
              onClick={(e) => {
                e.preventDefault(); // Previne o comportamento padrão do link
                handleClick(link.name, link.hash); // Executa a lógica de navegação personalizada
              }}
            >
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </header>
  );
}

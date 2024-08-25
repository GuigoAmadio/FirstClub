"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/src/lib/data";
import { useActiveSectionContext } from "@/src/context/active-section-content";
import { useRouter, usePathname } from "next/navigation";

type names =
  | "Projeto First"
  | "Calendario Olimpico"
  | "Clubes"
  | "Sobre nos"
  | "Login";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (name: names, hash: string, e: React.MouseEvent) => {
    const GoingToAboutPage = name === "Sobre nos";
    const isOnAboutPage = pathname === "/about";

    if (
      (GoingToAboutPage && !isOnAboutPage) ||
      (!GoingToAboutPage && isOnAboutPage)
    ) {
      e.preventDefault();
    }

    setActiveSection(name);
    setTimeOfLastClick(Date.now());

    if (GoingToAboutPage) {
      router.push("/about");
    } else if (isOnAboutPage) {
      router.push(`/${hash}`);
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
              onClick={(e) => handleClick(link.name, link.hash, e)}
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

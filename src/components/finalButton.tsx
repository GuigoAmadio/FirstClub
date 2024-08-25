"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useActiveSectionContext } from "@/src/context/active-section-content";

export default function FinalButton() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = event;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const handleClick = () => {
    setActiveSection("Sobre nos");
    setTimeOfLastClick(Date.now());
    router.push("/about");
  };
  return (
    <motion.div
      ref={ref}
      onMouseLeave={mouseLeave}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      }}
      className="h-80 w-full grid place-items-center"
    >
      <motion.div
        onMouseMove={mouseMove}
        animate={{ x, y }}
        onClick={handleClick}
        className="grid place-items-center w-52 h-16 rounded-full finalButton hover:cursor-pointer"
      >
        Quem Somos?
      </motion.div>
    </motion.div>
  );
}

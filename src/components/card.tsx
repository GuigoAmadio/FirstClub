"use client";
import React from "react";
import { motion } from "framer-motion";
import { clubCardsData } from "@/src/lib/data";
import yesColorido from "@/public/yesColorido.svg";
import yesPretoBranco from "@/public/yesPretoBranco.svg";
import Image from "next/image";

type CardProps = (typeof clubCardsData)[number] & {
  isMiddle?: number;
};

export const Card: React.FC<CardProps> = ({ title, items, isMiddle }) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center bg-gray-900 rounded-lg p-8  ${
        isMiddle === 1
          ? "h-[500px] w-[340px] gradient-border"
          : "z-10 h-[480px] w-80"
      }`}
      whileHover={{
        scale: 1.05,
        y: isMiddle === 1 ? -10 : 0,
        rotate: isMiddle === 1 ? 0 : isMiddle === 0 ? 2 : -2,
      }}
    >
      <h3 className="text-3xl font-bold text-neutral-200 mt-10">{title}</h3>
      <div className="custom-line my-8"></div>

      <p className="text-start w-full flex text-gray-500">Sobre:</p>

      <ul className="text-gray-300 mt-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center mb-5 gap-2 ${
              isMiddle === 1 ? "text-[#56C2FF]" : ""
            }`}
          >
            <Image
              src={isMiddle === 1 ? yesColorido : yesPretoBranco}
              alt="sla"
            ></Image>
            {item}
          </li>
        ))}
      </ul>
      <motion.button
        className="absolute bottom-10 w-60 bg-neutral-200 text-black py-1 px-4 rounded-lg"
        whileHover={{ scale: 1.1 }}
      >
        Juntar-se
      </motion.button>
    </motion.div>
  );
};

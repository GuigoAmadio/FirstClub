"use client";
import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "@/src/lib/data";
import Image from "next/image";
import { BiArrowFromRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type ThingsProps = (typeof timelineData)[number] & {
  index: number;
};

export const Things: React.FC<ThingsProps> = ({
  title,
  description,
  icon,
  idk,
  image,
  link,
  index,
}) => {
  return (
    <motion.div
      className={`flex w-full justify-evenly items-center ${
        index === 1 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-center">
          <Image src={icon} alt="sla"></Image>
          <h5>{idk}</h5>
        </div>
        <h3 className="text-3xl font-bold text-neutral-200">{title}</h3>

        <p className="font-bold flex text-gray-600 max-w-[500px]">
          {description}
        </p>
        <p className="flex items-center gap-4">
          {link}
          <BsArrowRight className="mt-1" />
        </p>
      </div>
      <Image src={image} alt="sla"></Image>
    </motion.div>
  );
};

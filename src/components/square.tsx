import React from "react";
import { squares } from "@/src/lib/data";
import Image from "next/image";

type SquaresProps = (typeof squares)[number];

export const Square: React.FC<SquaresProps> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col gap-4 w-96 h-52 rounded-xl bg-gray-900 p-8">
      <Image src={icon} alt="sla"></Image>
      <h3 className="text-2xl text-white">{title}</h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import Calendar from "./bigCalendar";
import EventsComponent from "./eventsComponent";

type EventDetails = {
  summary: string;
  location?: string;
  description?: string;
  start: { date?: string; dateTime?: string }; // Adaptado para as duas possíveis formas
  end: { date?: string; dateTime?: string };
};

export default function SidebarComponent({
  events,
}: {
  events: EventDetails[];
}) {
  const [activeComponent, setActiveComponent] = useState("calendar");
  const [category, setCategory] = useState<string | null>(null); // Estado para a categoria
  const [activeItem, setActiveItem] = useState<string>("calendar"); // Estado para o item ativo

  // Função para renderizar o componente ativo
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "events":
        return (
          <EventsComponent events={events} category={category} /> // Passando eventos e categoria como prop
        );
      case "calendar":
      default:
        return <Calendar events={events} />; // Passa os eventos para o Calendar
    }
  };

  // Função para definir o item ativo e a categoria
  const handleItemClick = (component: string, category: string | null) => {
    setActiveComponent(component);
    setCategory(category);
    setActiveItem(component); // Define o item ativo para aplicar o background
  };

  return (
    <div className="flex flex-col items-center gap-10 1250px:flex-row">
      <aside className="1250px:w-40 1250px:h-96 1250px:gap-10 1250px:mt-48 w-[300px] sm:w-[500px] flex flex-col bg-neutral-200 p-4 rounded-lg text-black gap-4">
        <h3 className="text-xs sm:text-base font-semibold">
          Agilize sua procura:
        </h3>
        <ul className="flex 1250px:flex-col gap-5 text-xs sm:text-base justify-center">
          <li
            className={`cursor-pointer hover:text-blue-800 transition-all duration-300 ${
              activeItem === "calendar" ? "text-blue-400" : ""
            }`}
            onClick={() => handleItemClick("calendar", null)}
          >
            Calendário
          </li>
          <li
            className={`cursor-pointer hover:text-blue-800 transition-all duration-300 ${
              activeItem === "events" && !category ? "text-blue-400" : ""
            }`}
            onClick={() => handleItemClick("events", null)}
          >
            Eventos
          </li>
          <li
            className={`cursor-pointer hover:text-blue-800 transition-all duration-300 ${
              activeItem === "events" && category === "Olimpiada"
                ? "text-blue-400"
                : ""
            }`}
            onClick={() => handleItemClick("events", "Olimpiada")}
          >
            Olimpiadas
          </li>
          <li
            className={`cursor-pointer hover:text-blue-800 transition-all duration-300 ${
              activeItem === "events" && category === "Competicao"
                ? "text-blue-400"
                : ""
            }`}
            onClick={() => handleItemClick("events", "Competicao")}
          >
            Competições
          </li>
        </ul>
      </aside>

      <div>{renderActiveComponent()}</div>
    </div>
  );
}

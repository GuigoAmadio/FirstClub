"use client";
import React, { useState } from "react";
import Calendar from "./bigCalendar";
import EventsComponent from "./eventsComponent";

export default function SidebarComponent() {
  const [activeComponent, setActiveComponent] = useState("calendar");

  // Função para renderizar o componente ativo
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "events":
        return <EventsComponent />;
      case "calendar":
      default:
        return <Calendar />;
    }
  };

  return (
    <div className="flex flex-col items-center  gap-10 1250px:flex-row">
      <aside className="1250px:w-40 1250px:h-96 1250px:gap-10 1250px:mt-48  w-[300px] sm:w-[400px] flex flex-col bg-neutral-200 p-4 rounded-lg text-black gap-4">
        <h3 className="text-xs sm:text-base font-semibold">
          Agilize sua procura:
        </h3>
        <ul className="flex 1250px:flex-col gap-10 text-xs sm:text-base justify-center">
          <li
            className="cursor-pointer hover:text-blue-800"
            onClick={() => setActiveComponent("events")}
          >
            Eventos
          </li>
          <li
            className="cursor-pointer hover:text-blue-800"
            onClick={() => setActiveComponent("calendar")}
          >
            Calendário
          </li>
        </ul>
      </aside>

      <div className="">{renderActiveComponent()}</div>
    </div>
  );
}

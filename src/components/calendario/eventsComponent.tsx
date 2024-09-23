"use client";
import React from "react";
import { useCalendarData } from "../../lib/actions"; // Supondo que você já tem essa função para pegar os eventos

const EventsComponent = () => {
  const events = useCalendarData(); // Pegando os eventos

  return (
    <div className=" 1250px:mr-48">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 ">Lista de Eventos</h2>
        <ul className="w-[300px] sm:w-[400px] 1250px:w-[600px] space-y-4">
          {events.length > 0 ? (
            events.map((event, index) => (
              <li key={index} className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {event.summary}
                </h3>
                {event.location && (
                  <p className="text-gray-600 mb-1">
                    <strong>Local:</strong> {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="text-gray-600 mb-1">
                    <strong>Descrição:</strong> {event.description}
                  </p>
                )}
                <p className="text-gray-600">
                  <strong>Data:</strong>{" "}
                  {event.start.dateTime
                    ? new Date(event.start.dateTime).toLocaleString()
                    : event.start.date
                    ? new Date(event.start.date).toLocaleDateString()
                    : "Data não disponível"}
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Nenhum evento encontrado.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventsComponent;

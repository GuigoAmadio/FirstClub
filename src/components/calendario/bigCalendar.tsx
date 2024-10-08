"use client";
import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { ptBR } from "date-fns/locale"; // Usando 'ptBR' para o português.
import EventModal from "./EventModal"; // Importando o modal

type EventDetails = {
  summary: string;
  location?: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  [key: string]: any;
};

// Agora o Calendar recebe os eventos como prop
const Calendar = ({ events }: { events: EventDetails[] }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  });

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedEvents, setSelectedEvents] = useState<EventDetails[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

  // Funções para navegar entre os meses
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Calculando os dias do mês
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Definindo dias da semana
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // Função para encontrar eventos no dia específico
  const findEventsForDay = (day: Date) => {
    const dayFormatted = format(day, "yyyy-MM-dd");
    const matchingEvents = events.filter((event) => {
      const eventDateStr = event.start.date || event.start.dateTime || "";
      const eventDate = new Date(eventDateStr);
      return format(eventDate, "yyyy-MM-dd") === dayFormatted;
    });

    return matchingEvents;
  };

  // Abrir o modal com todos os eventos do dia
  const openModal = (dayEvents: EventDetails[]) => {
    setSelectedEvents(dayEvents);
    setIsModalOpen(true);
  };

  // Fechar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvents([]);
  };

  return (
    <div className="1250px:mr-48">
      {/* Calendário */}
      <div className="flex flex-col items-center">
        {/* Cabeçalho com o nome do mês e setas */}
        <div className="flex w-full justify-around items-center mb-8">
          <button onClick={prevMonth} className="text-2xl font-bold">
            ←
          </button>
          <h2 className="text-3xl font-bold">
            {format(currentDate, "MMMM yyyy", { locale: ptBR })}
          </h2>
          <button onClick={nextMonth} className="text-2xl font-bold">
            →
          </button>
        </div>

        {/* Cabeçalho da semana */}
        <div className="flex w-full justify-around mb-4 text-lg text-center text-gray-500">
          {weekDays.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>

        {/* Dias do mês */}
        <div className="grid grid-cols-7 gap-4">
          {days.map((day, index) => {
            const dayEvents = findEventsForDay(day); // Encontra os eventos para o dia
            return (
              <div
                key={index}
                className={`truncate w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 900px:h-24 
                  900px:w-24 border rounded-xl flex flex-col items-center 
                  justify-center 900px:justify-start 900px:items-start md:p-2 
                  shadow-md relative
                ${
                  dayEvents.length > 0 && screenWidth < 900
                    ? "bg-blue-300"
                    : dayEvents.length > 0
                    ? "cursor-pointer bg-white hover:scale-110 transition duration-200" // Aplica um background diferente se houver eventos
                    : format(day, "MM") === format(currentDate, "MM")
                    ? "bg-white"
                    : "bg-gray-400"
                }`}
                onClick={() => {
                  if (dayEvents.length > 0) {
                    openModal(dayEvents); // Passa todos os eventos do dia para o modal
                  }
                }}
              >
                {/* Número do dia */}
                <span className="text-lg font-bold text-black">
                  {format(day, "d")}
                </span>

                {/* Exibindo eventos no dia */}
                {dayEvents.length > 0 && screenWidth >= 900 && (
                  <div className="text-xs text-blue-600 mt-1">
                    {dayEvents.map((event, i) => (
                      <div key={i} className="">
                        {/* Truncate vai cortar o texto longo */}
                        <strong>{event.summary}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventDetails={selectedEvents} // Agora passa a lista de eventos
      />
    </div>
  );
};

export default Calendar;

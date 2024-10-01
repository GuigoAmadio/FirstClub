"use client";
import React, { useState } from "react";
import EventModal from "./EventModal"; // Importar o modal que você já tem

type EventDetails = {
  summary: string;
  location?: string;
  description?: string;
  start: { date?: string; dateTime?: string }; // Adaptado para as duas possíveis formas
  end: { date?: string; dateTime?: string };
};

const EventsComponent = ({
  events,
  category,
}: {
  events: EventDetails[];
  category: string | null;
}) => {
  // Estado para controlar a abertura do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);

  // Estado para a paginação
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  // Função para abrir o modal com o evento selecionado
  const openModal = (event: EventDetails) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Filtrar eventos por categoria se uma categoria for fornecida
  const filteredEvents = category
    ? events.filter((event) =>
        event.summary.toLowerCase().includes(category.toLowerCase())
      )
    : events; // Se não houver categoria, exibe todos os eventos

  // Lógica de paginação
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="1250px:mr-48">
      <div className="w-full flex flex-col items-center 1250px:mt-40">
        <h2 className="text-3xl font-bold mb-6">Lista de Eventos</h2>
        <ul className="w-[300px] sm:w-[400px] 1250px:w-[600px] space-y-4 min-h-[500px] flex flex-col justify-start">
          {currentEvents.length > 0 ? (
            currentEvents.map((event, index) => (
              <li
                key={index}
                className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 min-h-[100px]"
                onClick={() => openModal(event)} // Abre o modal ao clicar no evento
              >
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {event.summary}
                </h3>
                {event.location && (
                  <p className="text-gray-600 mb-1">
                    <strong>Local:</strong> {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="text-gray-600 mb-1 w-full truncate">
                    <strong>Descrição: </strong>
                    {event.description}
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

        {/* Paginação */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 rounded ${
                currentPage === page
                  ? "bg-sky-700 text-white"
                  : "bg-white text-black"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Modal para exibir os detalhes do evento */}
        {isModalOpen && selectedEvent && (
          <EventModal
            isOpen={isModalOpen}
            onClose={closeModal}
            eventDetails={[selectedEvent]} // Passando o evento como array para o modal
          />
        )}
      </div>
    </div>
  );
};

export default EventsComponent;

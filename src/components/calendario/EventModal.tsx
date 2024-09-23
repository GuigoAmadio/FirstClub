import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type EventDetails = {
  summary?: string;
  location?: string;
  description?: string;
};

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  eventDetails: EventDetails[]; // Agora aceita um array de eventos
};

const EventModal = React.memo(function EventModal({
  isOpen,
  onClose,
  eventDetails,
}: EventModalProps) {
  const [isAnimating, setIsAnimating] = useState(false); // Para animação de fechamento
  const [isVisible, setIsVisible] = useState(isOpen); // Controla visibilidade no DOM

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Mostra o modal
      setTimeout(() => setIsAnimating(true), 10); // Inicia animação de abertura
    } else {
      setIsAnimating(false); // Inicia animação de fechamento
      setTimeout(() => setIsVisible(false), 300); // Remove o modal do DOM após animação
    }
  }, [isOpen]);

  if (!isVisible) return null; // Evita renderizar o modal se não estiver visível

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg p-6 w-5/6 h-auto shadow-lg relative transition-transform transform duration-300 ${
          isAnimating ? "translate-y-0" : "translate-y-10"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => {
            setIsAnimating(false); // Aplica a animação de fechamento
            setTimeout(onClose, 300); // Fecha o modal após a animação
          }}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-black mb-4">
          Eventos do Dia
        </h2>
        {eventDetails.length > 0 ? (
          eventDetails.map((event, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold text-black">
                {event.summary || `Evento ${index + 1}`}
              </h3>
              {event.location && (
                <p className="mt-2 text-gray-600">Local: {event.location}</p>
              )}
              {event.description && (
                <p className="mt-2 text-gray-600">{event.description}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">Nenhum evento disponível.</p>
        )}
      </div>
    </div>,
    document.body // Usa portal para renderizar fora da árvore DOM principal
  );
});

export default EventModal;

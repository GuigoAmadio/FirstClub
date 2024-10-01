import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"; // Importa ícones

type EventDetails = {
  summary: string;
  location?: string;
  description?: string;
  start: { date?: string; dateTime?: string };
  end: { date?: string; dateTime?: string };
};

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  eventDetails: EventDetails[] | EventDetails; // Aceita array de eventos ou um único evento
};

const EventModal = React.memo(function EventModal({
  isOpen,
  onClose,
  eventDetails,
}: EventModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg p-6 w-full sm:w-4/6 md:w-2/6 h-auto shadow-lg relative z-10 transition-transform transform duration-300 ${
          isAnimating ? "translate-y-0" : "translate-y-10"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => {
            setIsAnimating(false);
            setTimeout(onClose, 300);
          }}
        >
          ✕
        </button>

        {/* Formas geométricas agora estão dentro do modal */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="bg-neutral-400 w-32 h-32 rounded-full absolute top-10 right-10 opacity-40"></div>
          <div className="bg-neutral-400 w-24 h-24 rounded-full absolute bottom-10 left-10 opacity-40"></div>
        </div>

        {/* Conteúdo do modal */}
        {Array.isArray(eventDetails) ? (
          eventDetails.length > 0 ? (
            eventDetails.map((event, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center mb-6 relative z-20 gap-10"
              >
                <h3 className="text-3xl font-bold text-black mb-2">
                  {event.summary || `Evento ${index + 1}`}
                </h3>
                <p className="mt-2 text-gray-600 text-lg w-full break-words">
                  {event.description || "Descrição não disponível"}
                </p>

                <div className="flex justify-between items-center w-full mt-4">
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-red-700" />
                    <p className="text-gray-600">
                      {event.location || "Local não disponível"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-blue-500" />
                    <p className="text-gray-600">
                      {event.start.dateTime
                        ? new Date(event.start.dateTime).toLocaleString()
                        : event.start.date
                        ? new Date(event.start.date).toLocaleDateString()
                        : "Data não disponível"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 relative z-20">
              Nenhum evento disponível.
            </p>
          )
        ) : (
          eventDetails && (
            <div className="flex flex-col items-center text-center relative z-20">
              <h3 className="text-3xl font-bold text-black mb-2">
                {eventDetails.summary || "Evento"}
              </h3>
              <p className="mt-2 text-gray-600 text-lg truncate max-w-full">
                {eventDetails.description || "Descrição não disponível"}
              </p>

              <div className="flex justify-between items-center w-full mt-4">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <p className="text-gray-600">
                    {eventDetails.location || "Local não disponível"}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-blue-500" />
                  <p className="text-gray-600">
                    {eventDetails.start.dateTime
                      ? new Date(eventDetails.start.dateTime).toLocaleString()
                      : eventDetails.start.date
                      ? new Date(eventDetails.start.date).toLocaleDateString()
                      : "Data não disponível"}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>,
    document.body
  );
});

export default EventModal;

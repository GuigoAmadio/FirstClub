import React from "react";

interface CalendarDayProps {
  day: number; // Número do dia (obrigatório)
  title?: string; // Título do evento (opcional)
  date?: string; // Data do evento (opcional)
  location?: string; // Local do evento (opcional)
  description?: string; // Descrição do evento (opcional)
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  title,
  date,
  location,
  description,
}) => {
  return (
    <div className="relative p-4 border border-gray-300 rounded-lg bg-white shadow-md h-32 w-32">
      {/* Número do dia no canto superior esquerdo */}
      <div className="absolute top-2 left-2 text-lg font-semibold text-gray-500">
        {day}
      </div>

      {/* Conteúdo do evento (se houver) */}
      <div className="mt-6">
        {title && <h3 className="text-sm font-bold text-gray-800">{title}</h3>}
        {date && <p className="text-xs text-gray-600">{date}</p>}
        {location && (
          <p className="text-xs text-gray-600">
            <strong>Local:</strong> {location}
          </p>
        )}
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

export default CalendarDay;

"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CalendarContextProviderProps = {
  children: ReactNode; // Define o tipo de children
};

type CalendarContextType = {
  events: EventDetails[];
  filteredEvents: EventDetails[];
  setFilter: (filter: Partial<FilterState>) => void;
};
// Tipos de eventos e filtros
type EventDetails = {
  summary: string;
  location?: string;
  description?: string;
  start: Date;
  end: object;
  [key: string]: any; // Para outros detalhes que possam existir
};

type FilterState = {
  keyword: string; // Para busca por palavra-chave
  dateRange?: { startDate: Date; endDate: Date }; // Filtros por data
  location?: string; // Filtro por localização
};

// Estado inicial de filtragem
const initialState: FilterState = {
  keyword: "",
};

// Função redutora para gerenciar ações de filtro
const eventReducer = (
  state: FilterState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

// Contexto de Eventos
export const CalendarContext = createContext<CalendarContextType | null>(null);

// Provedor de Eventos
export default function CalendarContextProvider({
  children,
}: CalendarContextProviderProps) {
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [state, dispatch] = useReducer(eventReducer, initialState);
  const [filteredEvents, setFilteredEvents] = useState<EventDetails[]>([]);

  // Função para definir filtros
  const setFilter = (filter: Partial<FilterState>) => {
    if (filter.keyword) {
      dispatch({ type: "SET_KEYWORD", payload: filter.keyword });
    }
    if (filter.dateRange) {
      dispatch({ type: "SET_DATE_RANGE", payload: filter.dateRange });
    }
    if (filter.location) {
      dispatch({ type: "SET_LOCATION", payload: filter.location });
    }
  };

  // useEffect para aplicar os filtros sempre que os eventos ou filtros mudarem

  return (
    <CalendarContext.Provider value={{ events, filteredEvents, setFilter }}>
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (context === null) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return context;
}

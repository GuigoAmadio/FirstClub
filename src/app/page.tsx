import Calendario from "@/src/components/calendario";
import ClubesCards from "@/src/components/clubesCard";
import FinalButton from "@/src/components/finalButton";
import Hero from "@/src/components/hero";
import Squares from "@/src/components/squares";
import SidebarComponent from "../components/calendario/mainCalendar";

import { fetchCalendarData } from "../lib/actions"; // Função para buscar os eventos

export default async function Home() {
  const events = await fetchCalendarData(); // Buscar eventos do calendário no servidor
  console.log(events);
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Calendario />
      <SidebarComponent events={events} />
      <ClubesCards />
      <Squares />
      <FinalButton />
    </main>
  );
}

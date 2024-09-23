import Calendario from "@/src/components/calendario";
import ClubesCards from "@/src/components/clubesCard";
import FinalButton from "@/src/components/finalButton";
import Hero from "@/src/components/hero";
import Squares from "@/src/components/squares";
import BigCalendar from "../components/calendario/bigCalendar";
import CalendarContextProvider from "../context/calendar-context";
import Calendar from "../components/calendario/bigCalendar";
import SidebarComponent from "../components/calendario/mainCalendar";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Calendario />
      <ClubesCards />
      <Squares />
      <FinalButton />
    </main>
  );
}

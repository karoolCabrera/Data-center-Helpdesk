import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import IncidentForm from "./components/IncidentForm";
import TicketList from "./components/TicketList";
import "./App.css";

function App() {
  const [refreshTickets, setRefreshTickets] = useState(0);

  const handleTicketCreated = () => {
    setRefreshTickets((current) => current + 1);
  };

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Dashboard />

        <IncidentForm onTicketCreated={handleTicketCreated} />

        <TicketList refreshTickets={refreshTickets} />
      </main>
    </div>
  );
}

export default App;
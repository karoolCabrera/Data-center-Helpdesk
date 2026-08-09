import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import IncidentForm from "./components/IncidentForm";
import TicketList from "./components/TicketList";
import "./App.css";

function App() {
  const [refreshTickets, setRefreshTickets] = useState(0);

  const handleTicketUpdated = () => {
    setRefreshTickets((current) => current + 1);
  };

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Dashboard refreshTickets={refreshTickets} />

        <IncidentForm onTicketCreated={handleTicketUpdated} />

        <TicketList
          refreshTickets={refreshTickets}
          onTicketUpdated={handleTicketUpdated}
        />
      </main>
    </div>
  );
}

export default App;
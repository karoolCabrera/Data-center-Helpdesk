import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import IncidentForm from "./components/IncidentForm";
import TicketList from "./components/TicketList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Dashboard />
        <IncidentForm />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
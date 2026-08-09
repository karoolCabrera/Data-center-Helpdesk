function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">🖥️</span>
        <span>Data Center HelpDesk</span>
      </div>

      <div className="navbar-menu">
        <a href="#dashboard">Dashboard</a>
        <a href="#incidentes">Registrar incidente</a>
        <a href="#tickets">Tickets</a>
      </div>
    </nav>
  );
}

export default Navbar;
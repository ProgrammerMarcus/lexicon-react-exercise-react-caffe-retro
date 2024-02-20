import "./FixedNavbar.css"

export function FixedNavbar() {
    return (
      <>
        <nav className="fixed-navbar">
          <a href="#hot" className="navbar-link">Hot</a>
          <a href="#juicy" className="navbar-link">Juicy</a>
          <a href="#cozy" className="navbar-link">Cosy</a>
        </nav>
      </>
    );
  }

export default FixedNavbar
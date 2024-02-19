import "./FixedNavbar.css"

export function FixedNavbar() {
    return (
      <>
        <div className="fixed-navbar">
          <a href="#hot" className="navbar-link">Hot</a>
          <a href="#juicy" className="navbar-link">Juicy</a>
          <a href="#cozy" className="navbar-link">Cosy</a>
        </div>
      </>
    );
  }

export default FixedNavbar
import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    {/*<a className="navbar-brand" href="#">Full Stack Application</a>*/}
    <Link className="navbar-brand" to="/">Investments Fund</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    {/* changing this button to link. */}
    <Link className="btn btn-outline-light" to="/addinvestment">Create Investment</Link>
    <Link className="btn btn-outline-light mx-2" to="/investment-summary"> View Investments Summary</Link>
  </div>
</nav>



    </div>
  )
}

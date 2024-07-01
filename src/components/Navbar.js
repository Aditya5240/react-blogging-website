import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/my-blogs">My Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new-blog">New Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-8 my-sm-0" type="submit">Search</button>
        </form>
      </div>

      <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DARK mode</label>
      </div>
    </nav>
  );
}

export default Navbar;

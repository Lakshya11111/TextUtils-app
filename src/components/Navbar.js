import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  // const themeRed = ()=>{
  //   document.body.style.backgroundColor = '#FA1815';
  //   props.showAlert("Red mode is enabled!", "success");
  // }

  // const themeBlue = ()=>{
  //   document.body.style.backgroundColor = '#042743';
  //   props.showAlert("Blue mode is enabled!", "success");
  // }

  // const themeGreen = ()=>{
  //   document.body.style.backgroundColor = '#055329';
  //   props.showAlert("Green mode is enabled!", "success");
  // }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
              {/* <a className="nav-link" href="/about">{props.about}</a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
          {/* <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" onClick={themeRed} name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="inlineRadio1">Red Theme</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" onClick={themeBlue} name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="inlineRadio2">Blue Theme</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" onClick={themeGreen} name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="inlineRadio3">Green Theme</label>
          </div> */}

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htm htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propType = {
  title: PropTypes.string,
  about: PropTypes.string
}


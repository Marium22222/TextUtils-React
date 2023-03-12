import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';

export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/about">{props.aboutText}</a>
      </li> */}
     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      {/* success for green and primary for blue danger for red outline for outline */}
      {/* <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
    </form> } */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input class="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
      <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'}mode</label>

    </div>
    </div>
    <div className="color1">
      <button onClick={props.toggler1} style={{backgroundColor:"green",borderRadius:"25px",height:"25px",width:"20px"}}></button>
      <button onClick={props.toggler2} style={{backgroundColor:"red",borderRadius:"25px",height:"25px",width:"20px"}}></button>
      <button onClick={props.toggler3} style={{backgroundColor:"yellow",borderRadius:"25px",height:"25px",width:"20px"}}></button>
  
    </div>
  </div>
</nav>
    )
}
Navbar.propTypes= {title:PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}
//is required give error when no props passed not even default ones.
// Navbar.propTypes= {title:PropTypes.string,
//     aboutText: PropTypes.string}

Navbar.defaultProps={
    title:'set title here',
    aboutText:'About text here'
}


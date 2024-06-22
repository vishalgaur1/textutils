import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import './custom-styles.css';
// import { Link } from 'react-router-dom';






export default function Navbar(props) {


  const [isToggled, setIsToggled] = useState(true)
  const toggleHandler=()=>{
    setIsToggled(!isToggled);
    props.toggleMode(!isToggled);
  }


  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">{props.About}</a>
            </li> */}

          </ul>
          <div style={{color: props.mode === 'dark' ? 'white' : 'black'}} className="d-flex">








{/* 

            <div className="custom-radio-group d-flex">
                  <div>
                  <button onClick={() =>props.colorchange('danger')} className='red mx-3'></button>
                  </div>
                  <div>
                  <button onClick={() =>props.colorchange('success')} className='green mx-3'></button>
                  </div>
            </div>
 */}








              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={toggleHandler} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} Mode`}</label>
              </div>


          </div>


          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes{

// }



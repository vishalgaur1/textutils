import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import './custom-styles.css';
import { Link } from 'react-router-dom';






export default function Navbar(props) {


  const [isToggled, setIsToggled] = useState(true)
  const toggleHandler=()=>{
    setIsToggled(!isToggled);
    props.toggleMode(!isToggled);
  }


  console.log(props.mode);

  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link>
            </li>

          </ul>
          <div style={{color: props.mode === 'dark' ? 'white' : 'black'}} className="d-flex">










            <div className="custom-radio-group d-flex">
                  <div>
                  <button onClick={() =>props.colorchange('danger')} className='red mx-3'></button>
                  </div>
                  <div>
                  <button onClick={() =>props.colorchange('success')} className='green mx-3'></button>
                  </div>
                  {/* <div>
                  <button onClick={cco} className='orange mx-3'></button>
                  </div> */}
            </div>









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



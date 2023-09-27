import React from 'react'
import {Link,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from "prop-types";

const Landing = () => {
   
  return (
    <div class="cont">
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Derm Bot</h1>
        
        <div className="buttons">
          <Link to="/dashboard" className="btn btn-primary">Want to use</Link>
          
        </div>
      </div>
    </div>
  </section></div>
  )
} 
export default Landing;
import React from 'react';
import about from '../../img/about.svg';
import Navbar_ from './Navbar';
const AboutUs = () => {
  return (<div>   <Navbar_ />
    <div className="container mt-5">
      <img src={about} alt="About Us" className="img-fluid mx-auto" />
    </div></div>
  );
};

export default AboutUs;

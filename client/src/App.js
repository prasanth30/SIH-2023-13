import React, { Fragment,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/layout/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
//redux
import NotFoundPage from "./Components/layout/Notfound";
// import { Provider } from "react-redux";
import MedicalReport from "./Components/layout/Result";
import AboutUs from "./Components/layout/About";


const App = () => {
    
  return (
    // <Provider>
      <Router>
        <Fragment> 
        
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/result" element={<MedicalReport />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/" element={<Landing />} />
              
            <Route path="/*" element={<NotFoundPage/>} />
        
            
            
 
              </Routes>
          
          
           
           
            
            
        </Fragment>
      </Router>
    // </Provider>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/#page-top">
            Brand
          </Link>{" "}
        </div>

        {/* <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" >
                Features
              </a>
            </li>
            <li>
              <a href="#about" >
                About
              </a>
            </li>
            <li>
              <a href="#contact" >
                Contact
              </a>
            </li>
            {/* <li>
              <a href="#services" >
                Services
              </a>
            </li> 
            {/* <li>
              <a href="#portfolio" >
                Gallery
              </a>
            </li> 
            {/* <li>
              <a href="#testimonials" >
                Testimonials
              </a>
            </li> 
            {/* <li>
              <a href="#team" >
                Team
              </a>
            </li> 
            
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

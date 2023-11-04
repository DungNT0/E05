import React from "react";
import $ from 'jquery';
import "./Accordion1.css";

const Accordion1 = () => {

  const handleClick = () => {
    $(".accordion1").on("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel1 = this.nextElementSibling;
      if (panel1.style.display === "block") {
        panel1.style.display = "none";
      } else {
        panel1.style.display = "block";
      }
    });

  }

  return (
    <div className="Accordion1">
      <h2>Accordion 1</h2>

      <button className="accordion1" onClick={handleClick}>Section 1</button>
      <div className="panel1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion1" onClick={handleClick}>Section 2</button>
      <div className="panel1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion1" onClick={handleClick}>Section 3</button>
      <div className="panel1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );

};

export default Accordion1;

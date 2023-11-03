import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css"
import "./Accordion2.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Accordion2 = () => {
  return (
    <div className="Accordion2">
      <h2>Accordion 2</h2>

      <button className="accordion2">Section 1</button>
      <div className="panel2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion2">Section 2</button>
      <div className="panel2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion2">Section 3</button>
      <div className="panel2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
};
var acc2 = document.getElementsByClassName("accordion2");

for (let i2 = 0; i2 < acc2.length; i2++) {
  acc2[i2].addEventListener("click", function () {
    for (let j = 0; j < acc2.length; j++) {
      acc2[j].classList.remove("active2");
      if (j !== i2) {
        acc2[j].nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.add("active2");
    var panel2 = this.nextElementSibling;
    if (panel2.style.maxHeight) {
      panel2.style.maxHeight = null;
    } else {
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }
    if (panel2.style.display === "block") {
      return null;
    } else {
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }
  });
}

export default Accordion2;
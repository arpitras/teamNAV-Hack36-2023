import React from "react";
import { BsNewspaper } from "react-icons/bs";
import MainAnimation from "../Background_effect/animation";
import Footer from "../components/Footer/Footer";
function Ttoe() {
  return (
    <div className="Ttoe">
      <h1>About</h1>
      <MainAnimation/>
      <a href="http://localhost:3030/"> Link</a>
      <Footer></Footer>
      {/* <a href="http://localhost:3030/"> Link</a> */}
    </div>
  );
}

export default Ttoe;
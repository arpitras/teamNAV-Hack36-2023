import React from "react";
import { BsNewspaper } from "react-icons/bs";
import MainAnimation from "../Background_effect/animation";
import Payment from "../components/Payment"
import Footer from "../components/Footer/Footer";
function Donate() {
  return (
    <div className="Ttoe">
      <MainAnimation/>
      <Payment/>
      <Footer></Footer>
    </div>
  );
}

export default Donate;
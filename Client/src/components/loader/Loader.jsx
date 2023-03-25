import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./loader.css";
import PropTypes from 'prop-types'
import AfterLoader from "./AfterLoader"
const Loader = (props) => 
{
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    setTimeout(() => setFadeOut(true), 10000);
  });
  const [showLoader, setShowLoader]=useState(true)
  useEffect(()=>{
    setTimeout(()=>setShowLoader(false),10000)
  })
  return (
        <div className="loamder">
        {showLoader?
        (
         <>
        <div className={fadeOut ? "hide-loader" : "main-loader"}>
          <div className="loader">
            <div className="bar">
              <div className="circle"></div>
              <p>Analyzing</p>
            </div>
          </div>
        </div>
      </>
         ):(
          <>
          <AfterLoader ></AfterLoader>
        </>
        )}

        </div>
  );
};

export default Loader;

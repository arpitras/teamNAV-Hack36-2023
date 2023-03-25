import Loader from "./Loader";
import React, { useState, useEffect } from "react";
import "./AfterLoader.css";
import { useLocation, useParams } from "react-router";
export default function AfterLoader(props) 
{
  // const showname(()=>{
  //   const cars = ["Arpit","Manan","Naman","Vinayak"];
  //   var x=(Math.round(Math.random()*10))%4;
  //   x%=4;
  //   setname(cars[x]);
  // });
  //const {handle} =useParams();
//  const location = useLocation();
//  const{userr}=location.state;
//   console.log(props.user.temps);
//  // const [user,setUser] =useState(null);

//  console.log(userr);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowLoader(false), 1);
  });
  // Math.floor(Math.random() * 100)
  const cars = ["Arpit", "Manan", "Naman", "Vinayak"];
  return (
    <div className="App">
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <div className="Host">
            <h2 className="title">
              We have Analysed your Responses, Your 1:1 mentor will be Mr{" "}
              {cars[Math.floor(Math.random() * 100) % 4]} .
            </h2>
            <h3>You can Chat with him Live by clicking on the button below</h3>
            {/* <button className="btn3" >Join Now</button> */}
            <a
              href="http://localhost:3030/joinmeet"
              className="btn btn-success btnForDepressed btn"
              role="button"
            >
              Join Room
            </a>
          </div>
        </>
      )}
    </div>
  );
}

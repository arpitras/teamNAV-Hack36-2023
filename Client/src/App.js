import React, { useRef } from 'react'
import  Navbar  from "./components/Navbar";
import Home from "./components/Home";

// import "./App.css" 
// import "./styles.css";

function App() {
  const ref = useRef(null)
  return (
    
    <div className="App">
      <Navbar />
      <Home /> 
      {/* <Projects></Projects>
      <Footer></Footer> */}
    </div>
  );
}

export default App

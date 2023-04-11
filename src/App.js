import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Cards from "./components/Cards";
function App() {
  const [mode,setmode]=useState(true);
  return (
    <>
      <Navbar title='textUtils' mode={mode}/>
      <div className="container">
        <TextForm heading='enter your freaking text to analize'/></div>
      <About></About>
      <Cards/>

    </>
  );
}

export default App;

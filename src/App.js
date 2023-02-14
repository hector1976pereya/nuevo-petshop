

import React from "react";
import Formulario from "./Components/Formulario";
import Nosotros from "./Components/Nosotros";
import "./App.css";
import Servicios from "./Components/Servicios";

function App() {
  return (
    <section className="App">
    <div>
      <Nosotros/>
    </div> 
    <div>
      <Formulario/>
    </div>
    <div>
      <Servicios/>
    </div>
    </section>
  );
}

export default App;

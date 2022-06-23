import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ici path="*" permet si jamais les pages citez au dessus ne fonctionne pas de revenir a l'acceuil ou une page error 404 selon la page qu'on a choisis d'appeler */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

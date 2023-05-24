import React from "react";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/about" exact={true} Component={About} />
        <Route path="/" Component={Home} />
        <Route path="/movie-detail" component={Detail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

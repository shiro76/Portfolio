import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import AppPortfolio from "./AppPortfolio";
import TodoPage from "./components/TodoPage";
import SnakePage from "./components/SnakePage";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<AppPortfolio />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/snake" element={<SnakePage />} />
      </Routes>
    </Router>
  );
}

export default App;
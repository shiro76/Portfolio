import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import AppPortfolio from "./AppPortfolio";
import TodoPage from "./components/TodoPage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<AppPortfolio />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
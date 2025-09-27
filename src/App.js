import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import AppPortfolio from "./AppPortfolio"; // on va créer ça pour ton portfolio actuel
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


// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Todo from "./components/Todo";


// function App() {
//   return (
//     <div className="font-sans">
//       <Header />
//       <Hero />
//       <Skills />
//       <Projects />
//       <Todo/>
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
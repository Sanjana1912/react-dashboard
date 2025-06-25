import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProblemDetail from "./pages/ProblemDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/problem/:id" element={<ProblemDetail />} />
    </Routes>
  </Router>
);

export default App;

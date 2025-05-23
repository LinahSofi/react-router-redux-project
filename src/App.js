import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NewExpense from "./components/NewExpense";
import ListExpenses from "./components/ListExpenses";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">New Expense</Link></li>
            <li><Link to="/list">List Expenses</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewExpense />} />
          <Route path="/list" element={<ListExpenses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
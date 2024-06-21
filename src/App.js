import React, { useState } from "react";
import "./App.css";
import Chart from "react-google-charts";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div>
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

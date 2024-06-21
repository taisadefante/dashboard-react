import React, { useState } from "react";
import "./App.css";
import Chart from "react-google-charts";

function App() {
  const TITULO = "Quantidae de cadastro primeiro semestre";
  const [dados, setDados] = useState([
    ["Mês", "Quantidade"],
    ["Janeiro", 33],
    ["Fevereiro", 68],
    ["Março", 49],
    ["Abril", 15],
    ["Maio", 80],
    ["Junho", 27],
  ]);

  return (
    <div>
      <h1>Dashboard</h1>

      <Chart
        width={"400px"}
        height={"300px"}
        chartType={"PieChart"}
        data={dados}
        options={{
          title: TITULO,
        }}
      />
    </div>
  );
}

export default App;

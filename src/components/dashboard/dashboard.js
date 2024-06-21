import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import Style from "./dashboard.module.css";

function Dashboard() {
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

  useEffect(() => {
    function alterarDados() {
      const dadosGraficos = dados.map((linha) => {
        if (Number.isInteger(linha[1])) {
          linha[1] = Math.floor(Math.random() * 101);
        }
        return linha;
      });
      setDados(dadosGraficos);
    }

    const intervalId = setInterval(() => alterarDados(), 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dados]);

  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <Chart
          className={Style.chart}
          width={"400px"}
          height={"300px"}
          chartType={"PieChart"}
          data={dados}
          options={{
            title: TITULO,
          }}
        />

        <br />
        <Chart
          className="chart"
          width={"400px"}
          height={"300px"}
          chartType={"PieChart"}
          data={dados}
          options={{
            title: TITULO,
            is3D: true,
          }}
        />
        <br />

        <Chart
          className="chart"
          width={"400px"}
          height={"300px"}
          chartType={"PieChart"}
          data={dados}
          options={{
            title: TITULO,
            pieHole: 0.4,
          }}
        />

        <br />
        <Chart
          className="chart"
          width={"400px"}
          height={"300px"}
          chartType={"BarChart"}
          data={dados}
          options={{
            title: TITULO,
            chartArea: { width: "50%" },
            hAxis: { title: "Quantidade" },
            vAxis: { title: "Mês" },
            animation: { duration: 1000, easing: "out", startup: "true" },
          }}
        />

        <Chart
          className="chart"
          width={"400px"}
          height={"300px"}
          chartType={"LineChart"}
          data={dados}
          options={{
            title: TITULO,
            hAxis: { title: "MÊs" },
            vAxis: { title: "Quantidade" },
            animation: { duration: 1000, easing: "out", startup: "true" },
          }}
        />
        <Chart
          className="chart"
          width={"400px"}
          height={"300px"}
          chartType={"AreaChart"}
          data={dados}
          options={{
            title: TITULO,
            hAxis: { title: "MÊs" },
            vAxis: { title: "Quantidade" },
            animation: { duration: 1000, easing: "out", startup: "true" },
          }}
        />
      </div>
    </>
  );
}

export default Dashboard;

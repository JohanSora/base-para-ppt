import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const data = [
    {
      name: "Semana 1",
      CCI: 4000,
      CCT: 2400,
    },
    {
      name: "Semana 2",
      CCI: 3000,
      CCT: 1398,
    },
    {
      name: "Semana 3",
      CCI: 2000,
      CCT: 9800,
    },
    {
      name: "Semana 4",
      CCI: 2780,
      CCT: 3908,
    },
    {
      name: "Semana 5",
      CCI: 1890,
      CCT: 4800,
    },
    {
      name: "Semana 6",
      CCI: 2390,
      CCT: 3800,
    },
    // {
    //   name: "Semana 7",
    //   CCI: 3490,
    //   CCT: 4300,
    //   amt: 2100,
    // },
  ];

  return (
    <ResponsiveContainer width="100%" height={300} className="bg-base-100">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis name="Semanas" dataKey="name" />
        <YAxis name="Dolares" type="number" unit="$" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="CCT"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="CCI" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;

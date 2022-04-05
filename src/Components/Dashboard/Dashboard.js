import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import useChartData from "../../Hooks/useChartdata";
import "./Dashboard.css";

const Dashboard = () => {
  const [data] = useChartData();
  let chartHeight = 250;
  let chartWidth = 500;

  //month vs sell
  const renderLineChart = (
    <LineChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  //investment vs revenue - Area Chart
  const renderAreaChart = (
    <AreaChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="investment"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );

  //investment vs revenue - bar chart
  const renderBarChart = (
    <BarChart width={chartWidth} height={chartHeight} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );

  //investment vs revenue - pie chart
  const renderPieChart = (
    <PieChart width={chartWidth}
    height={chartHeight}>
      <Pie
        data={data}
        dataKey="investment"
        nameKey="month"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        data={data}
        dataKey="revenue"
        nameKey="month"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
      <Tooltip />
    </PieChart>
  );

  return (
    <div className="mb-8">
      <h1 className="text-center text-3xl hover:underline text-emerald-400 mb-12 mt-5">
        DASHBOARD
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 gap-y-12 place-items-center">
        <div>
          <h1 className="text-center text-2xl font-semibold hover:underline text-emerald-400 mb-8">
            Month vs Sell
          </h1>
          {renderLineChart}
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold hover:underline text-emerald-400 mb-8">
            Area Chart: Investment vs Revenue
          </h1>
          {renderAreaChart}
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold hover:underline text-emerald-400 mb-8">
            Bar Chart: Investment vs Revenue
          </h1>
          {renderBarChart}
        </div>
        <div>
        <h1 className="text-center text-2xl font-semibold hover:underline text-emerald-400 mb-8">
            Pie Chart: Investment vs Revenue
          </h1>
          {renderPieChart}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface EngagementChartProps {
  data: any;
}

const EngagementChart: React.FC<EngagementChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Engagement Over Time",
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
      <Line options={options} data={data} />
    </div>
  );
};

export default EngagementChart;

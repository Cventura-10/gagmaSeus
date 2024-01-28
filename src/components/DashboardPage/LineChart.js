import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const LineChart = ({ salesData }) => {
  if (!salesData || !salesData.timestamps || salesData.timestamps.length === 0) {
    return <p>No valid salesData or timestamps</p>;
  }

  const chartData = {
    labels: salesData.timestamps,
    datasets: [
      {
        label: 'Revenue',
        data: salesData.revenue,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

LineChart.propTypes = {
  salesData: PropTypes.shape({
    timestamps: PropTypes.array.isRequired,
    revenue: PropTypes.array.isRequired,
    // Add any other properties as needed
  }),
};

export default LineChart;

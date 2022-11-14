import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ chartData }) {
	return (
		<div>
			<Bar data={chartData} width={300} height={100} />
		</div>
	)};

export default BarChart;

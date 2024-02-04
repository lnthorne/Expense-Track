// LineGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export interface LineGraphProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            fill: boolean;
            backgroundColor: string;
            borderColor?: string;
        }[];
    };
    options?: any; // You can define a more specific type for chart options if necessary
}

const LineGraph: React.FC<LineGraphProps> = ({ data, options }) => {
    return <Line data={data} options={options} />;
};

export default LineGraph;

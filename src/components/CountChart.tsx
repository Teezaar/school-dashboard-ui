"use client";

import { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    PieLabelRenderProps,
} from "recharts";

// Define the types of the data for the chart.
interface DataEntry {
    name: string;
    count: number;
    fill: string;
}

interface CountChartProps {
    data: DataEntry[];
    title: string;
}

const CountChart: React.FC<CountChartProps> = ({ data, title }) => {

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: PieLabelRenderProps) => {
        if (
            cx === undefined ||
            cy === undefined ||
            innerRadius === undefined ||
            outerRadius === undefined ||
            percent === undefined
        ) {
            return null; // If any of these values are undefined, don't render the label
        }

        const RADIAN = Math.PI / 180;
        const radius =
            parseFloat(innerRadius.toString()) +
            (parseFloat(outerRadius.toString()) -
                parseFloat(innerRadius.toString())) *
                0.5;
        const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN);
        const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

        // Ensuring `percent` is treated as a number explicitly
        const percentage = typeof percent === "number" ? percent * 100 : 0;

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > (cx as number) ? "start" : "end"}
                dominantBaseline="central"
                className="text-xs md:text-sm"
            >
                {`${percentage.toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="glassUi rounded-xl w-full h-full p-4 flex flex-col items-center justify-between">
            {/* Title */}
            <div className="text-center mb-4">
                <h1 className="text-lg font-semibold">{title}</h1>
            </div>

            {/* Chart */}
            <div className="w-full h-[70%]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius="80%"
                            dataKey="count"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.fill}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            {/* Labels and Counts */}
            <div className="flex justify-around w-full mt-4">
                {data.map((entry, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-2"
                    >
                        <div
                            className="w-5 h-5 rounded-full"
                            style={{ backgroundColor: entry.fill }}
                        />
                        <h1 className="font-bold text-sm">{entry.count}</h1>
                        <h1 className="text-xs text-gray-500">
                            {entry.name} (
                            {(
                                (entry.count /
                                    data.reduce(
                                        (acc, curr) => acc + curr.count,
                                        0
                                    )) *
                                100
                            ).toFixed(0)}
                            %)
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountChart;

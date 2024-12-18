"use client";

import Image from "next/image";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "شنبه",
        حاضر: 400,
        غایب: 340,
    },
    {
        name: "یکشنبه",
        حاضر: 510,
        غایب: 8,
    },
    {
        name: "دوشنبه",
        حاضر: 400,
        غایب: 80,
    },
    {
        name: "سه شنبه",
        حاضر: 370,
        غایب: 108,
    },
    {
        name: "چهارشنبه",
        حاضر: 290,
        غایب: 450,
    },
];

const AttendanceChart = () => {
    return (
        <div className="glassUi rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">حضور و غیاب</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} barSize={18} data={data}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#ddd"
                    />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 13 }}
                        tickMargin={4}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14 }}
                        tickMargin={20}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            borderColor: "#ddd",
                        }}
                    />
                    <Legend
                        align="right"
                        verticalAlign="top"
                        wrapperStyle={{
                            paddingTop: "20px",
                            paddingBottom: "40px",
                        }}
                    />
                    <Bar
                        dataKey="حاضر"
                        fill="var(--myBlue)" // Uses the predefined --myPurple CSS variable
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="غایب"
                        fill="var(--myPurple)" // Uses the predefined --myYellowLight CSS variable
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;

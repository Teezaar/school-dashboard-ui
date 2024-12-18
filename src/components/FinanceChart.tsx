"use client";

import Image from "next/image";
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

const data = [
    {
        name: "فروردین",
        مخارج: 2000,
        درآمد: 3800,
    },
    {
        name: "تیر",
        مخارج: 2780,
        درآمد: 4908,
    },
    {
        name: "مهر",
        مخارج: 1700,
        درآمد: 1950,
    },

    {
        name: "دی",
        مخارج: 3890,
        درآمد: 5350,
    },
    // {
    //     name: "اسفند",
    //     مخارج: 1490,
    //     درآمد: 7300,
    // },
];

const FinanceChart = () => {
    return (
        <div className="glassUi rounded-xl w-full h-full p-4 flex-1 ">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">امور مالی</h1>
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
            {/* CHART */}
            <ResponsiveContainer width="100%" height="90%">
                <LineChart width={500} height={300} data={data}>
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
                        tickMargin={12}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        tickMargin={32}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            borderColor: "#ddd",
                        }}
                    />
                    <Legend
                        align="center"
                        verticalAlign="top"
                        wrapperStyle={{
                            paddingTop: "10px",
                            paddingBottom: "30px",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="درآمد"
                        stroke="var(--myBlue)"
                        strokeWidth={4}
                    />
                    <Line
                        type="monotone"
                        dataKey="مخارج"
                        stroke="var(--myPurple)"
                        strokeWidth={4}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FinanceChart;

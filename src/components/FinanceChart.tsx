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
        درآمد: 6800,
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
        درآمد: 8350,
    },
    {
        name: "اسفند",
        مخارج: 1490,
        درآمد: 7300,
    },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">امور مالی</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
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
                        stroke="#CFCEFF"
                        strokeWidth={4}
                    />
                    <Line
                        type="monotone"
                        dataKey="مخارج"
                        stroke="#C3EBFA"
                        strokeWidth={4}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FinanceChart;

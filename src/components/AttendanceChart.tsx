"use client";

import Image from "next/image";
import {
    BarChart,
    Bar,
    Rectangle,
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
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">حضور و غیاب</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
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
                        fill="#CFCEFF"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="غایب"
                        fill="#FAE27C"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
